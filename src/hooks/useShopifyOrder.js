import { useState } from "react";
import { shopifyOrderService } from "../services/shopify/order";
import { useCustomer } from "../context/customerContext";

export const useShopifyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { customer } = useCustomer();

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            if (!customer?.accessToken) {
                throw new Error("Customer not authenticated");
            }
            const result = await shopifyOrderService.getOrderDetails(
                customer.accessToken
            );
            setOrders(result.orders);
            return result;
        } catch (err) {
            const errorMsg = err.message || "Failed to fetch orders";
            setError(errorMsg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        orders,
        loading,
        error,
        fetchOrders,
    };
};