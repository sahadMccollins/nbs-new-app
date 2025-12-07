import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEYS = {
  CUSTOMER_ACCESS_TOKEN: "shopify_customer_access_token",
  CUSTOMER_ID: "shopify_customer_id",
  CUSTOMER_EMAIL: "shopify_customer_email",
};

export const tokenStorage = {
  async saveCustomerTokens(accessToken, customerId, email) {
    try {
      await AsyncStorage.multiSet([
        [TOKEN_KEYS.CUSTOMER_ACCESS_TOKEN, accessToken],
        [TOKEN_KEYS.CUSTOMER_ID, customerId],
        [TOKEN_KEYS.CUSTOMER_EMAIL, email],
      ]);
    } catch (error) {
      console.error("Token storage error:", error);
      throw error;
    }
  },

  async getCustomerAccessToken() {
    try {
      return await AsyncStorage.getItem(TOKEN_KEYS.CUSTOMER_ACCESS_TOKEN);
    } catch (error) {
      console.error("Token retrieval error:", error);
      return null;
    }
  },

  async getCustomerInfo() {
    try {
      const [token, id, email] = await AsyncStorage.multiGet([
        TOKEN_KEYS.CUSTOMER_ACCESS_TOKEN,
        TOKEN_KEYS.CUSTOMER_ID,
        TOKEN_KEYS.CUSTOMER_EMAIL,
      ]);
      return {
        accessToken: token[1],
        customerId: id[1],
        email: email[1],
      };
    } catch (error) {
      console.error("Customer info retrieval error:", error);
      return null;
    }
  },

  async clearCustomerTokens() {
    try {
      await AsyncStorage.multiRemove([
        TOKEN_KEYS.CUSTOMER_ACCESS_TOKEN,
        TOKEN_KEYS.CUSTOMER_ID,
        TOKEN_KEYS.CUSTOMER_EMAIL,
      ]);
    } catch (error) {
      console.error("Token clearing error:", error);
    }
  },

  async isLoggedIn() {
    const token = await this.getCustomerAccessToken();
    return !!token;
  },
};