// import { useState } from "react";
// import { useCart } from "../context/cartContext";

// export const useShopifyCart = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const { cart, addProduct, removeProduct, clearAll } = useCart();

//     const addToCart = (product) => {
//         try {
//             setLoading(true);
//             setError(null);

//             if (!product || !product.id) {
//                 throw new Error("Invalid product");
//             }

//             console.log('Adding product to cart:', product);
//             addProduct(product);

//             setLoading(false);
//             return { success: true, message: "Added to cart" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     const removeFromCart = (productId) => {
//         try {
//             setLoading(true);
//             setError(null);

//             if (!productId) {
//                 throw new Error("Invalid product ID");
//             }

//             removeProduct(productId); // ✔ fixed

//             setLoading(false);
//             return { success: true, message: "Removed from cart" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     const isInCart = (productId) => {
//         if (!cart || !Array.isArray(cart)) return false;
//         return cart.some((item) => item.id === productId);
//     };

//     const toggleProduct = (product) => {
//         console.log('Toggling product in cart:', product);
//         if (isInCart(product.id)) {
//             return removeFromCart(product.id); // ✔ improved
//         } else {
//             return addToCart(product);
//         }
//     };

//     const getCount = () => {
//         return cart && Array.isArray(cart) ? cart.length : 0;
//     };

//     const clearCart = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             await clearAll();

//             setLoading(false);
//             return { success: true, message: "Cart cleared" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     return {
//         cart,
//         loading,
//         error,
//         addToCart,
//         removeFromCart,
//         toggleProduct,
//         isInCart,
//         getCount,
//         clearCart,
//     };
// };


// useShopifyCart.js
import { useState } from "react";
import { useCart } from "../context/cartContext";

export const useShopifyCart = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        cart,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        clearAll,
    } = useCart();

    const addToCart = (cartProduct) => {
        try {
            setLoading(true);
            addProduct(cartProduct);
            return { success: true };
        } catch (e) {
            setError(e.message);
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    const toggleProduct = (product) => {
        const exists = cart.some((p) => p.id === product.id);
        if (exists) {
            removeProduct(product.id);
        } else {
            addToCart(product);
        }
    };

    return {
        cart,
        loading,
        error,
        addToCart,
        removeFromCart: removeProduct,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        toggleProduct,
        clearCart: clearAll,
        getCount: () => cart.length,
        isInCart: (id) => cart.some((p) => p.id === id),
    };
};
