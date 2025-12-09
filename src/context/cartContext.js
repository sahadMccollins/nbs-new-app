// import React, { createContext, useContext, useState, useEffect, useRef } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AppState } from "react-native";

// const CartContext = createContext();

// const CART_STORAGE_KEY = "shopify_wishlist_data";

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const appState = useRef(AppState.currentState);
//     const subscription = useRef(null);

//     //
//     // Load wishlist on app start
//     //
//     useEffect(() => {
//         const loadCart = async () => {
//             try {
//                 const stored = await AsyncStorage.getItem(CART_STORAGE_KEY);
//                 if (stored) {
//                     setCart(JSON.parse(stored));
//                 } else {
//                     setCart([]);
//                 }
//             } catch (err) {
//                 console.error("Error loading wishlist:", err);
//                 setCart([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCart();
//     }, []);

//     //
//     // Save wishlist whenever it changes
//     //
//     useEffect(() => {
//         if (!loading) {
//             AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//         }
//     }, [cart, loading]);

//     //
//     // Save when app goes to background/inactive
//     //
//     useEffect(() => {
//         const handleAppStateChange = async (nextAppState) => {
//             if (nextAppState === "background" || nextAppState === "inactive") {
//                 await AsyncStorage.setItem(
//                     CART_STORAGE_KEY,
//                     JSON.stringify(cart ?? [])
//                 );
//             }
//             appState.current = nextAppState;
//         };

//         subscription.current = AppState.addEventListener("change", handleAppStateChange);

//         return () => {
//             subscription.current?.remove();
//         };
//     }, [cart]);

//     //
//     // Wishlist Operations
//     //
//     const addProduct = (product) => {
//         if (!product) throw new Error("Product cannot be null");

//         setCart((prev) => {
//             if (!Array.isArray(prev)) return [product];
//             if (prev.some((p) => p.id === product.id)) return prev;
//             return [...prev, product];
//         });
//     };

//     const removeProduct = (productId) => {
//         setCart((prev) => prev.filter((p) => p.id !== productId));
//     };

//     const clearAll = async () => {
//         setCart([]);
//         await AsyncStorage.removeItem(CART_STORAGE_KEY);
//     };

//     return (
//         <CartContext.Provider
//             value={{
//                 cart,
//                 loading,
//                 addProduct,
//                 removeProduct,
//                 clearAll,
//             }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used within CartProvider");
//     }
//     return context;
// };



// cartContext.js
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";
import { tags } from "react-native-svg/lib/typescript/xmlTags";

const CartContext = createContext();
const CART_STORAGE_KEY = "shopify_cart_data";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const appState = useRef(AppState.currentState);

    //
    // Load wishlist/cart on app start
    //
    useEffect(() => {
        const loadCart = async () => {
            try {
                const stored = await AsyncStorage.getItem(CART_STORAGE_KEY);
                if (stored) setCart(JSON.parse(stored));
            } catch (err) {
                console.error("Error loading cart:", err);
            } finally {
                setLoading(false);
            }
        };
        loadCart();
    }, []);

    //
    // Save whenever cart updates
    //
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        }
    }, [cart, loading]);

    //
    // Save on background
    //
    useEffect(() => {
        const sub = AppState.addEventListener("change", async (nextState) => {
            if (nextState === "background" || nextState === "inactive") {
                await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            }
            appState.current = nextState;
        });

        return () => sub.remove();
    }, [cart]);

    //
    // 📌 Add product (if exists, increase quantity)
    //
    // const addProduct = (product) => {
    //     if (!product?.id) return;

    //     setCart((prev) => {
    //         const exists = prev.find((p) => p.id === product.id);

    //         if (exists) {
    //             return prev.map((p) =>
    //                 p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    //             );
    //         }
    //         return [...prev, { ...product, quantity: 1 }];
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
            quantity: 1,
        };
    };

    const addProduct = (product) => {
        if (!product?.id) return;

        const normalized = normalizeProduct(product);

        setCart((prev) => {
            const exists = prev.find((p) => p.id === normalized.id);

            if (exists) {
                return prev.map((p) =>
                    p.id === normalized.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }

            return [...prev, normalized];
        });
    };


    //
    // 📌 Remove product completely
    //
    const removeProduct = (productId) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    };

    //
    // 📌 Increase quantity
    //
    const increaseQuantity = (productId) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    //
    // 📌 Decrease quantity (auto-remove if goes to 0)
    //
    const decreaseQuantity = (productId) => {
        setCart((prev) =>
            prev
                .map((p) =>
                    p.id === productId
                        ? { ...p, quantity: Math.max(0, p.quantity - 1) }
                        : p
                )
                .filter((p) => p.quantity > 0)
        );
    };

    //
    // 📌 Set exact quantity
    //
    const setQuantity = (productId, qty) => {
        if (qty <= 0) {
            removeProduct(productId);
            return;
        }

        setCart((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, quantity: qty } : p
            )
        );
    };

    //
    // Clear cart
    //
    const clearAll = async () => {
        setCart([]);
        await AsyncStorage.removeItem(CART_STORAGE_KEY);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                addProduct,
                removeProduct,
                increaseQuantity,
                decreaseQuantity,
                setQuantity,
                clearAll,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
