import { fetchGraphQL } from "../../utils/fetchGraphql";
import { tokenStorage } from "../storage/tokenStorage";
import {
    GET_CUSTOMER_ADDRESSES,
    CREATE_CUSTOMER_ADDRESS,
    UPDATE_CUSTOMER_ADDRESS,
    DELETE_CUSTOMER_ADDRESS,
} from "./mutations";

export const shopifyAddressService = {
    async getCustomerAddresses(accessToken) {
        try {
            const response = await fetchGraphQL(GET_CUSTOMER_ADDRESSES, {
                customerAccessToken: accessToken,
                first: 10,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to fetch addresses",
                    isNetworkError: true,
                };
            }

            const addresses = response.data.customer?.addresses?.edges || [];
            return {
                success: true,
                addresses: addresses.map((edge) => edge.node),
                totalCount: response.data.customer?.addresses?.totalCount || 0,
            };
        } catch (error) {
            console.error("Get addresses error:", error);
            throw error;
        }
    },

    async createAddress(accessToken, addressInput) {
        try {
            const response = await fetchGraphQL(CREATE_CUSTOMER_ADDRESS, {
                customerAccessToken: accessToken,
                address: addressInput,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to create address",
                    isNetworkError: true,
                };
            }

            const { userErrors, customerAddress } =
                response.data.customerAddressCreate;

            if (userErrors && userErrors.length > 0) {
                throw {
                    message: userErrors[0].message,
                    field: userErrors[0].field,
                };
            }

            return {
                success: true,
                address: customerAddress,
            };
        } catch (error) {
            console.error("Create address error:", error);
            throw error;
        }
    },

    async updateAddress(accessToken, addressId, addressInput) {
        try {
            const response = await fetchGraphQL(UPDATE_CUSTOMER_ADDRESS, {
                customerAccessToken: accessToken,
                id: addressId,
                address: addressInput,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to update address",
                    isNetworkError: true,
                };
            }

            const { userErrors, customerAddress } =
                response.data.customerAddressUpdate;

            if (userErrors && userErrors.length > 0) {
                throw {
                    message: userErrors[0].message,
                    field: userErrors[0].field,
                };
            }

            return {
                success: true,
                address: customerAddress,
            };
        } catch (error) {
            console.error("Update address error:", error);
            throw error;
        }
    },

    async deleteAddress(accessToken, addressId) {
        try {
            const response = await fetchGraphQL(DELETE_CUSTOMER_ADDRESS, {
                customerAccessToken: accessToken,
                id: addressId,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to delete address",
                    isNetworkError: true,
                };
            }

            const { userErrors } = response.data.customerAddressDelete;

            if (userErrors && userErrors.length > 0) {
                throw {
                    message: userErrors[0].message,
                    field: userErrors[0].field,
                };
            }

            return { success: true };
        } catch (error) {
            console.error("Delete address error:", error);
            throw error;
        }
    },
};