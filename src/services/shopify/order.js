import { fetchGraphQL } from "../../utils/fetchGraphql";
import {
    GET_ORDER_DETAILS,
} from "./mutations";

export const shopifyOrderService = {
    async getOrderDetails(accessToken) {
        try {
            const response = await fetchGraphQL(GET_ORDER_DETAILS, {
                customerAccessToken: accessToken
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to fetch orders",
                    isNetworkError: true,
                };
            }

            // const orders = response.data.customer?.addresses?.edges || [];
            const orders = response.data.customer?.orders.edges.map((edge) => edge.node);
            return {
                success: true,
                // orders: orders.map((edge) => edge.node)
                orders: orders
            };
        } catch (error) {
            console.error("Get orders error:", error);
            throw error;
        }
    },
};