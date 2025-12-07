import { fetchGraphQL } from "../../utils/fetchGraphql";
import { tokenStorage } from "../storage/tokenStorage";
import {
  CUSTOMER_LOGIN,
  CUSTOMER_CREATE,
  CUSTOMER_DETAILS,
  PASSWORD_RESET_REQUEST,
} from "./mutations";

export const shopifyAuthService = {
  async loginCustomer(email, password) {
    try {
      const response = await fetchGraphQL(CUSTOMER_LOGIN, {
        input: {
          email,
          password,
        },
      });

      const errors = response.errors;
      if (errors) {
        throw {
          message: errors[0]?.message || "Login failed",
          isNetworkError: true,
        };
      }

      const { customerAccessToken, userErrors } =
        response.data.customerAccessTokenCreate;

      if (userErrors && userErrors.length > 0) {
        throw {
          message: userErrors[0].message,
          field: userErrors[0].field,
        };
      }

      // Fetch customer details to get ID
      const customerResponse = await fetchGraphQL(CUSTOMER_DETAILS, {
        customerAccessToken: customerAccessToken.accessToken,
      });

      if (customerResponse.errors) {
        throw {
          message: customerResponse.errors[0]?.message || "Failed to fetch customer details",
        };
      }

      const customer = customerResponse.data.customer;

      // Save tokens
      await tokenStorage.saveCustomerTokens(
        customerAccessToken.accessToken,
        customer.id,
        customer.email
      );

      return {
        success: true,
        customer,
        accessToken: customerAccessToken.accessToken,
        expiresAt: customerAccessToken.expiresAt,
      };
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  async registerCustomer(email, password, firstName = "", lastName = "") {
    try {
      const response = await fetchGraphQL(CUSTOMER_CREATE, {
        input: {
          email,
          password,
          firstName,
          lastName,
        },
      });

      const errors = response.errors;
      if (errors) {
        throw {
          message: errors[0]?.message || "Registration failed",
          isNetworkError: true,
        };
      }

      const { customer, userErrors } = response.data.customerCreate;

      if (userErrors && userErrors.length > 0) {
        throw {
          message: userErrors[0].message,
          field: userErrors[0].field,
        };
      }

      // Auto-login after registration
      return this.loginCustomer(email, password);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async logout() {
    try {
      await tokenStorage.clearCustomerTokens();
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  async resetPasswordRequest(email) {
    try {
      const response = await fetchGraphQL(PASSWORD_RESET_REQUEST, {
        email,
      });

      const errors = response.errors;
      if (errors) {
        throw {
          message: errors[0]?.message || "Password reset request failed",
        };
      }

      const { userErrors } = response.data.customerRecover;

      if (userErrors && userErrors.length > 0) {
        throw {
          message: userErrors[0].message,
        };
      }

      return { success: true };
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  },

  async checkAuthStatus() {
    return await tokenStorage.isLoggedIn();
  },
};