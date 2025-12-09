import { useState } from "react";
import { useWishlist } from "../context/wishlistContext";

export const useShopifyWishlist = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { wishlist, addProduct, removeProduct, clearAll } = useWishlist();

    const addToWishlist = (product) => {
        try {
            setLoading(true);
            setError(null);

            if (!product || !product.id) {
                throw new Error("Invalid product");
            }

            console.log('Adding product to wishlist:', product);
            addProduct(product);

            setLoading(false);
            return { success: true, message: "Added to wishlist" };
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return { success: false, message: err.message };
        }
    };

    const removeFromWishlist = (productId) => {
        try {
            setLoading(true);
            setError(null);

            if (!productId) {
                throw new Error("Invalid product ID");
            }

            removeProduct(productId); // ✔ fixed

            setLoading(false);
            return { success: true, message: "Removed from wishlist" };
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return { success: false, message: err.message };
        }
    };

    const isInWishlist = (productId) => {
        if (!wishlist || !Array.isArray(wishlist)) return false;
        return wishlist.some((item) => item.id === productId);
    };

    const toggleProduct = (product) => {
        console.log('Toggling product in wishlist:', product);
        if (isInWishlist(product.id)) {
            return removeFromWishlist(product.id); // ✔ improved
        } else {
            return addToWishlist(product);
        }
    };

    const getCount = () => {
        return wishlist && Array.isArray(wishlist) ? wishlist.length : 0;
    };

    const clearWishlist = async () => {
        try {
            setLoading(true);
            setError(null);

            await clearAll();

            setLoading(false);
            return { success: true, message: "Wishlist cleared" };
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return { success: false, message: err.message };
        }
    };

    return {
        wishlist,
        loading,
        error,
        addToWishlist,
        removeFromWishlist,
        toggleProduct,
        isInWishlist,
        getCount,
        clearWishlist,
    };
};
