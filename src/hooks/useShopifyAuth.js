import { useState } from "react";
import { shopifyAuthService } from "../services/shopify/auth";
import { useCustomer } from "../context/customerContext";

export const useShopifyAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { saveCustomer, clearCustomer } = useCustomer();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await shopifyAuthService.loginCustomer(email, password);
      // Save customer to context and AsyncStorage
      await saveCustomer({
        id: result.customer.id,
        email: result.customer.email,
        firstName: result.customer.firstName,
        lastName: result.customer.lastName,
        accessToken: result.accessToken,
        expiresAt: result.expiresAt,
      });
      return result;
    } catch (err) {
      const errorMsg = err.message || "Login failed. Please try again.";
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, firstName, lastName) => {
    setLoading(true);
    setError(null);
    try {
      const result = await shopifyAuthService.registerCustomer(
        email,
        password,
        firstName,
        lastName
      );
      // Save customer to context and AsyncStorage
      await saveCustomer({
        id: result.customer.id,
        email: result.customer.email,
        firstName: result.customer.firstName,
        lastName: result.customer.lastName,
        accessToken: result.customer.accessToken,
        expiresAt: result.expiresAt,
      });
      return result;
    } catch (err) {
      const errorMsg = err.message || "Registration failed. Please try again.";
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await shopifyAuthService.logout();
      // Clear customer from context and AsyncStorage
      await clearCustomer();
      return { success: true };
    } catch (err) {
      setError(err.message || "Logout failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPasswordRequest = async (email) => {
    setLoading(true);
    setError(null);
    try {
      return await shopifyAuthService.resetPasswordRequest(email);
    } catch (err) {
      setError(err.message || "Password reset failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, register, logout, resetPasswordRequest, loading, error };
};