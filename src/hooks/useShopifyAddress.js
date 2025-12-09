import { useState } from "react";
import { shopifyAddressService } from "../services/shopify/address";
import { useCustomer } from "../context/customerContext";

export const useShopifyAddress = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { customer } = useCustomer();

    const fetchAddresses = async () => {
        setLoading(true);
        setError(null);
        try {
            if (!customer?.accessToken) {
                throw new Error("Customer not authenticated");
            }
            const result = await shopifyAddressService.getCustomerAddresses(
                customer.accessToken
            );
            setAddresses(result.addresses);
            return result;
        } catch (err) {
            const errorMsg = err.message || "Failed to fetch addresses";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const addAddress = async (addressInput) => {
        setLoading(true);
        setError(null);
        try {
            if (!customer?.accessToken) {
                throw new Error("Customer not authenticated");
            }
            const result = await shopifyAddressService.createAddress(
                customer.accessToken,
                addressInput
            );
            setAddresses([...addresses, result.address]);
            return result;
        } catch (err) {
            const errorMsg = err.message || "Failed to add address";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateAddress = async (addressId, addressInput) => {
        setLoading(true);
        setError(null);
        try {
            if (!customer?.accessToken) {
                throw new Error("Customer not authenticated");
            }
            const result = await shopifyAddressService.updateAddress(
                customer.accessToken,
                addressId,
                addressInput
            );
            setAddresses(
                addresses.map((addr) =>
                    addr.id === addressId ? result.address : addr
                )
            );
            return result;
        } catch (err) {
            const errorMsg = err.message || "Failed to update address";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteAddress = async (addressId) => {
        setLoading(true);
        setError(null);
        try {
            if (!customer?.accessToken) {
                throw new Error("Customer not authenticated");
            }
            await shopifyAddressService.deleteAddress(
                customer.accessToken,
                addressId
            );
            setAddresses(addresses.filter((addr) => addr.id !== addressId));
            return { success: true };
        } catch (err) {
            const errorMsg = err.message || "Failed to delete address";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        addresses,
        loading,
        error,
        fetchAddresses,
        addAddress,
        updateAddress,
        deleteAddress,
    };
};