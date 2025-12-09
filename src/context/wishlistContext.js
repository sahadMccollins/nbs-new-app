import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

const WishlistContext = createContext();

const WISHLIST_STORAGE_KEY = "shopify_wishlist_data";

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    const appState = useRef(AppState.currentState);
    const subscription = useRef(null);

    //
    // Load wishlist on app start
    //
    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const stored = await AsyncStorage.getItem(WISHLIST_STORAGE_KEY);
                if (stored) {
                    setWishlist(JSON.parse(stored));
                } else {
                    setWishlist([]);
                }
            } catch (err) {
                console.error("Error loading wishlist:", err);
                setWishlist([]);
            } finally {
                setLoading(false);
            }
        };

        loadWishlist();
    }, []);

    //
    // Save wishlist whenever it changes
    //
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
        }
    }, [wishlist, loading]);

    //
    // Save when app goes to background/inactive
    //
    useEffect(() => {
        const handleAppStateChange = async (nextAppState) => {
            if (nextAppState === "background" || nextAppState === "inactive") {
                await AsyncStorage.setItem(
                    WISHLIST_STORAGE_KEY,
                    JSON.stringify(wishlist ?? [])
                );
            }
            appState.current = nextAppState;
        };

        subscription.current = AppState.addEventListener("change", handleAppStateChange);

        return () => {
            subscription.current?.remove();
        };
    }, [wishlist]);

    //
    // Wishlist Operations
    //
    // const addProduct = (product) => {
    //     if (!product) throw new Error("Product cannot be null");

    //     setWishlist((prev) => {
    //         if (!Array.isArray(prev)) return [product];
    //         if (prev.some((p) => p.id === product.id)) return prev;
    //         return [...prev, product];
    //     });
    // };

    const normalizeProduct = (product) => {
        const variant = product?.variants?.[0] || {};

        return {
            id: product.id,
            merchandiseId: variant.id || product.merchandiseId,
            title: product.title,
            tags: product.tags || [],
            handle: product.handle || "",
            vendor: product.vendor || "",
            productType: product.productType || "",
            publishedAt: product.publishedAt || "",
            productTags: product.productTags || [],
            image: product.image || variant.image || null,
            price: product.price || variant.price || "0",
            oldPrice: product.oldPrice || variant.oldPrice || "0",
            available: product.available ?? variant.available ?? true,
        };
    };

    const addProduct = (product) => {
        if (!product) throw new Error("Product cannot be null");

        console.log("data", product);

        const normalized = normalizeProduct(product);

        setWishlist((prev) => {
            if (!Array.isArray(prev)) return [normalized];

            if (prev.some((p) => p.id === normalized.id)) return prev;

            return [...prev, normalized];
        });
    };


    const removeProduct = (productId) => {
        setWishlist((prev) => prev.filter((p) => p.id !== productId));
    };

    const clearAll = async () => {
        setWishlist([]);
        await AsyncStorage.removeItem(WISHLIST_STORAGE_KEY);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                loading,
                addProduct,
                removeProduct,
                clearAll,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within WishlistProvider");
    }
    return context;
};
