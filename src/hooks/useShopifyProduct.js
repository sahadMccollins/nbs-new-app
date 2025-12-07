import { useCallback, useState } from "react";
import { shopifySingleProductService } from "../services/shopify/product";

export const useShopifyProduct = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    // const fetchProductData = async (id) => {
    //     setLoading(true);
    //     try {
    //         const result = await shopifySingleProductService.getProductById(id);
    //         setProduct(result);  // <-- Save to state
    //     } catch (err) {
    //         console.log("Product Fetch Error:", err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const fetchProductData = useCallback(async (id) => {
        setLoading(true);
        try {
            const result = await shopifySingleProductService.getProductById(id);
            setProduct(result);  // <-- Save to state
        } catch (err) {
            console.log("Product Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    }, []);


    const fetchRecommendedProductsData = useCallback(async (id) => {
        try {
            const result = await shopifySingleProductService.getRecommendedProductsById(id);
            setRecommendedProducts(result);  // <-- Save to state
        } catch (err) {
            console.log("Recommended Fetch Error:", err);
        }
    }, []);

    // const fetchRecommendedProductsData = async (id) => {
    //     try {
    //         const result = await shopifySingleProductService.getRecommendedProductsById(id);
    //         setRecommendedProducts(result);  // <-- Save to state
    //     } catch (err) {
    //         console.log("Recommended Fetch Error:", err);
    //     }
    // };

    return {
        fetchProductData,
        fetchRecommendedProductsData,
        product,
        recommendedProducts,
        loading
    };
};
