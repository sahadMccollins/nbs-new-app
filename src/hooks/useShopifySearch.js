import { useCallback, useState } from "react";
import { shopifySearchService } from "../services/shopify/search";
import { useSearchStore } from "../context/searchContext";

export const useShopifySearch = () => {

    const { setProducts, setsuggestedSearch } = useSearchStore();
    const [loading, setLoading] = useState(false);
    // const [products, setProducts] = useState(null);
    // const [suggestedSearch, setsuggestedSearch] = useState([]);

    const fetchSearchProducts = useCallback(async (query) => {
        setLoading(true);
        try {
            const result = await shopifySearchService.getSearchProducts(query);
            setProducts(result.products);  // <-- Save to state
        } catch (err) {
            console.log("Product Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    }, []);


    const fetchSearchSuggestions = useCallback(async (query) => {
        try {
            const result = await shopifySearchService.getSearchSuggestions(query);
            setsuggestedSearch(result.suggestions);  // <-- Save to state
        } catch (err) {
            console.log("Recommended Fetch Error:", err);
        }
    }, []);

    return {
        fetchSearchProducts,
        fetchSearchSuggestions,
        loading
    };
};
