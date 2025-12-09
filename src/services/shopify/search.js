import { fetchGraphQL } from "../../utils/fetchGraphql";
import {
    GET_SEARCH_PRODUCTS,
    GET_SEARCH_SUGGESTION,
} from "./mutations";

export const shopifySearchService = {
    async getSearchProducts(searchTerm) {
        try {
            const response = await fetchGraphQL(GET_SEARCH_PRODUCTS, {
                query: searchTerm,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to fetch addresses",
                    isNetworkError: true,
                };
            }

            const products = response.data.products?.edges || [];
            return {
                success: true,
                products: products.map(edge => ({
                    id: edge.node.id,
                    title: edge.node.title,
                    description: edge.node.description,
                    tags: edge.node.tags,
                    productType: edge.node.productType,
                    vendor: edge.node.vendor,
                    price: edge.node.priceRange.minVariantPrice.amount,
                    oldPrice: edge.node.compareAtPriceRange.maxVariantPrice.amount,
                    image: edge.node.images.edges[0]?.node.transformedSrc,
                    merchandiseId: edge.node.variants.edges[0]?.node.id,
                    cursor: edge.cursor,
                    available: edge.node.availableForSale,
                    productTags: edge.node.tags,
                }))
            };
        } catch (error) {
            console.error("Get addresses error:", error);
            throw error;
        }
    },

    async getSearchSuggestions(searchTerm) {
        try {
            const response = await fetchGraphQL(GET_SEARCH_SUGGESTION, {
                query: searchTerm,
            });

            if (response.errors) {
                throw {
                    message: response.errors[0]?.message || "Failed to create address",
                    isNetworkError: true,
                };
            }

            const suggestions = response.data.search?.edges || [];

            return {
                success: true,
                suggestions: suggestions.map(edge => edge.node),
            };


        } catch (error) {
            console.error("Create address error:", error);
            throw error;
        }
    },
};