import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomerContext = createContext();

const CUSTOMER_STORAGE_KEY = "shopify_customer_data";

export const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load customer data from AsyncStorage on app startup
    useEffect(() => {
        loadCustomerFromStorage();
    }, []);

    const loadCustomerFromStorage = async () => {
        try {
            setLoading(true);
            const storedCustomer = await AsyncStorage.getItem(CUSTOMER_STORAGE_KEY);
            if (storedCustomer) {
                setCustomer(JSON.parse(storedCustomer));
            }
        } catch (error) {
            console.error("Error loading customer from storage:", error);
        } finally {
            setLoading(false);
        }
    };

    const saveCustomer = async (customerData) => {
        try {
            setCustomer(customerData);
            await AsyncStorage.setItem(
                CUSTOMER_STORAGE_KEY,
                JSON.stringify(customerData)
            );
        } catch (error) {
            console.error("Error saving customer to storage:", error);
            throw error;
        }
    };

    const updateCustomer = async (updatedData) => {
        try {
            const updated = { ...customer, ...updatedData };
            setCustomer(updated);
            await AsyncStorage.setItem(
                CUSTOMER_STORAGE_KEY,
                JSON.stringify(updated)
            );
        } catch (error) {
            console.error("Error updating customer in storage:", error);
            throw error;
        }
    };

    const clearCustomer = async () => {
        try {
            setCustomer(null);
            await AsyncStorage.removeItem(CUSTOMER_STORAGE_KEY);
        } catch (error) {
            console.error("Error clearing customer from storage:", error);
            throw error;
        }
    };

    const isLoggedIn = () => !!customer;

    return (
        <CustomerContext.Provider
            value={{
                customer,
                loading,
                saveCustomer,
                updateCustomer,
                clearCustomer,
                isLoggedIn,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomer = () => {
    const context = useContext(CustomerContext);
    if (!context) {
        throw new Error("useCustomer must be used within CustomerProvider");
    }
    return context;
};