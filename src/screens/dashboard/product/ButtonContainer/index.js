// // import React from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import styles from './styles';
// // import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// // import appColors from '@theme/appColors';
// // import { useValues } from '@App';
// // import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';

// // export default buttonContainer = props => {
// //   const { t, colors } = props;
// //   const { viewRTLStyle } = useValues();
// //   const { toggleProduct, isInWishlist } = useShopifyWishlist();

// //   return (
// //     <View
// //       style={[
// //         styles.mainView,
// //         {
// //           backgroundColor: colors.card,
// //           borderTopColor: colors.divider,
// //           flexDirection: viewRTLStyle,
// //         },
// //       ]}>
// //       {/* <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Wishlist color={colors.text} />
// //         <Text style={[styles.text, { color: colors.text }]}>
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </View> */}

// //       <TouchableOpacity style={[styles.rowContainer, { flexDirection: viewRTLStyle }]} onPress={() => {
// //         toggleProduct(props.item);
// //       }}>
// //         <Wishlist color={colors.text} />
// //         <Text style={[styles.text, { color: colors.text }]}>
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </TouchableOpacity>

// //       <View>
// //         <View
// //           style={[
// //             styles.verticleLine,
// //             { backgroundColor: colors.divider },
// //           ]}></View>
// //       </View>
// //       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Cart color={appColors.primary} />
// //         <TouchableOpacity
// //           onPress={() => {
// //             props.navigation.navigate('cart');
// //           }}>
// //           <Text style={styles.cartText}>{t('checkDelivery.addToBag')}</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };



// // import React, { use } from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import styles from './styles';
// // import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// // import appColors from '@theme/appColors';
// // import { useValues } from '@App';
// // import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';
// // import { useShopifyCart } from '../../../../hooks/useShopifyCart';

// // export default buttonContainer = (props) => {
// //   const { t, colors } = props;
// //   const { viewRTLStyle } = useValues();
// //   const { toggleProduct, isInWishlist } = useShopifyWishlist();
// //   const { addToCart, isInCart,  } = useShopifyCart();

// //   const product = props.item;
// //   const inWishlist = isInWishlist(product?.id);   // <- IMPORTANT

// //   return (
// //     <View
// //       style={[
// //         styles.mainView,
// //         {
// //           backgroundColor: colors.card,
// //           borderTopColor: colors.divider,
// //           flexDirection: viewRTLStyle,
// //         },
// //       ]}
// //     >
// //       {/* WISHLIST BUTTON */}
// //       <TouchableOpacity
// //         style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
// //         onPress={() => toggleProduct(product)}
// //       >
// //         {inWishlist ? (
// //           <WishlistFilled color={appColors.primary} />   // Filled heart
// //         ) : (
// //           <Wishlist color={colors.text} />               // Empty heart
// //         )}

// //         <Text
// //           style={[
// //             styles.text,
// //             { color: inWishlist ? appColors.primary : colors.text },
// //           ]}
// //         >
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </TouchableOpacity>

// //       {/* DIVIDER */}
// //       <View>
// //         <View
// //           style={[
// //             styles.verticleLine,
// //             { backgroundColor: colors.divider },
// //           ]}
// //         />
// //       </View>

// //       {/* ADD TO BAG */}
// //       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Cart color={appColors.primary} />
// //         <TouchableOpacity
// //           onPress={() => addToCart(product)}
// //         >
// //           <Text style={styles.cartText}>
// //             {t('checkDelivery.addToBag')}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';
// import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// import appColors from '@theme/appColors';
// import { useValues } from '@App';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';
// import { useShopifyCart } from '../../../../hooks/useShopifyCart';

// export default buttonContainer = (props) => {
//   const { t, colors } = props;
//   const { viewRTLStyle } = useValues();

//   const { toggleProduct, isInWishlist } = useShopifyWishlist();
//   const {
//     cart,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     isInCart,
//   } = useShopifyCart();

//   const product = props.item;

//   // WISHLIST STATUS
//   const inWishlist = isInWishlist(product?.id);

//   // CART STATUS
//   const inCart = isInCart(product?.id);
//   const cartItem = cart.find((p) => p.id === product?.id);
//   const quantity = cartItem?.quantity || 0;

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {
//           backgroundColor: colors.card,
//           borderTopColor: colors.divider,
//           flexDirection: viewRTLStyle,
//         },
//       ]}
//     >
//       {/* ----------- WISHLIST BUTTON ----------- */}
//       <TouchableOpacity
//         style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
//         onPress={() => toggleProduct(product)}
//       >
//         {inWishlist ? (
//           <WishlistFilled color={appColors.primary} />
//         ) : (
//           <Wishlist color={colors.text} />
//         )}

//         <Text
//           style={[
//             styles.text,
//             { color: inWishlist ? appColors.primary : colors.text },
//           ]}
//         >
//           {t('tabBar.wishList')}
//         </Text>
//       </TouchableOpacity>

//       {/* DIVIDER */}
//       <View>
//         <View
//           style={[
//             styles.verticleLine,
//             { backgroundColor: colors.divider },
//           ]}
//         />
//       </View>

//       {/* ----------- CART BUTTON / QTY CONTROL ----------- */}
//       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>

//         {/* If NOT in cart → Show ADD TO BAG */}
//         {!inCart ? (
//           <>
//             <Cart color={appColors.primary} />
//             <TouchableOpacity onPress={() => addToCart(product)}>
//               <Text style={styles.cartText}>
//                 {t('checkDelivery.addToBag')}
//               </Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           // If IN CART → Show (- qty +)
//           <View style={[styles.pillContainer, { flexDirection: viewRTLStyle }]}>
//             <TouchableOpacity
//               activeOpacity={1}
//               style={[styles.leftMainView, { borderColor: props.colors.text }]}
//               onPress={() => decreaseQuantity(product.id)}>
//               <Icon name={'minus'} size={18} color={appColors.primary} />
//             </TouchableOpacity>

//             {/* QUANTITY */}
//             <Text style={styles.text}>{quantity}</Text>

//             <TouchableOpacity
//               activeOpacity={1}
//               style={[styles.rightMainView, { borderColor: props.colors.text }]}
//               onPress={() => increaseQuantity(product.id)}>
//               <Icon name={'plus'} size={18} color={appColors.primary} />
//             </TouchableOpacity>
//           </View>

//         )}
//       </View>
//     </View>
//   );
// };


import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Wishlist, Cart, Document, WishlistFilled } from '@utils/icons';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '@App';
import Icon from 'react-native-vector-icons/AntDesign';
import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../../../hooks/useShopifyCart';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default buttonContainer = (props) => {
  const { t, colors, visibleLoginModal } = props;
  const { viewRTLStyle, isRTL } = useValues();

  const { toggleProduct, isInWishlist } = useShopifyWishlist();
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
  } = useShopifyCart();

  const insets = useSafeAreaInsets();

  const product = props.item;

  // WISHLIST STATUS
  const inWishlist = isInWishlist(product?.id);

  // CART STATUS
  const inCart = isInCart(product?.id);
  const cartItem = cart.find((p) => p.id === product?.id);
  const quantity = cartItem?.quantity || 0;

  // PRODUCT AVAILABILITY
  const isAvailable = product?.variants[0]?.available === true;

  // REQUEST A QUOTE CHECK
  const isRequestQuote = product?.tags?.includes("request-a-quote") || product?.tags?.includes("request-a-qoute");


  return (
    <View
      style={[
        styles.mainView,
        {
          bottom: insets.bottom + windowHeight(40),
          // backgroundColor: colors.card,
          backgroundColor: colors.background,
          borderTopColor: colors.divider,
          flexDirection: viewRTLStyle,
        },
      ]}
    >
      {/* ----------- WISHLIST BUTTON ----------- */}
      {isRequestQuote ? (
        // <TouchableOpacity
        //   style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
        //   onPress={() => toggleProduct(product)}
        // >
        //   {inWishlist ? (
        //     <WishlistFilled color={appColors.primary} />
        //   ) : (
        //     <Wishlist color={colors.text} />
        //   )}

        //   <Text
        //     style={[
        //       styles.text,
        //       { color: inWishlist ? appColors.primary : colors.text },
        //     ]}
        //   >
        //     {t('tabBar.wishList')}
        //   </Text>
        // </TouchableOpacity>
        null
      ) : (
        <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={visibleLoginModal} >
            {/* <CartQuotation color={appColors.primary} /> */}
            <Document color={appColors.primary} />
            <Text style={styles.cartText}>
              {t('products.priceOnRequestCap') || 'Request a Quote'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {isRequestQuote ? null : (
        < View >
          <View
            style={[
              styles.verticleLine,
              { backgroundColor: colors.divider },
            ]}
          />
        </View>
      )}

      {/* ----------- CART BUTTON / QTY CONTROL / OUT OF STOCK / REQUEST QUOTE ----------- */}
      <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>

        {/* OUT OF STOCK */}
        {isRequestQuote ? (
          // REQUEST A QUOTE
          <>
            <Cart color={appColors.primary} />
            <TouchableOpacity onPress={visibleLoginModal} >
              <Text style={styles.cartText}>
                {t('products.priceOnRequestCap') || 'Request a Quote'}
              </Text>
            </TouchableOpacity>
          </>
        ) : !isAvailable ? (
          <>
            <Cart color={colors.text} />
            <Text style={[styles.cartText, { color: colors.text, minWidth: '50' }]}>
              {t('products.outOfStock') || 'Out of Stock'}
            </Text>
          </>
        ) : !inCart ? (
          // ADD TO BAG
          <>
            <Cart color={appColors.primary} />
            <TouchableOpacity onPress={() => addToCart(product)}>
              <Text style={styles.cartText}>
                {t('checkDelivery.addToBag')}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          // QUANTITY CONTROLS
          <View style={[styles.pillContainer, { flexDirection: viewRTLStyle }]}>
            {/* <TouchableOpacity
              activeOpacity={1}
              style={[styles.leftMainView, { borderColor: props.colors.text }]}
              onPress={() => decreaseQuantity(product.id)}>
              <Icon name={'minus'} size={18} color={appColors.primary} />
            </TouchableOpacity>

            <Text style={styles.text}>{quantity}</Text>

            <TouchableOpacity
              activeOpacity={1}
              style={[styles.rightMainView, { borderColor: props.colors.text }]}
              onPress={() => increaseQuantity(product.id)}>
              <Icon name={'plus'} size={18} color={appColors.primary} />
            </TouchableOpacity> */}


            {/* MINUS */}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                isRTL ? styles.rightMainView : styles.leftMainView,
                { borderColor: props.colors.text },
              ]}
              onPress={() => decreaseQuantity(product.id)}
            >
              <Icon name="minus" size={18} color={appColors.primary} />
            </TouchableOpacity>

            {/* QUANTITY */}
            <Text style={styles.text}>{quantity}</Text>

            {/* PLUS */}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                isRTL ? styles.leftMainView : styles.rightMainView,
                { borderColor: props.colors.text },
              ]}
              onPress={() => increaseQuantity(product.id)}
            >
              <Icon name="plus" size={18} color={appColors.primary} />
            </TouchableOpacity>

          </View>
        )}
      </View>
    </View >
  );
};