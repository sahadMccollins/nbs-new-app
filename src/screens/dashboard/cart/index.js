import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { windowHeight } from '@theme/appConstant';
import { Divider } from '@commonComponents';
import Support from './support';
import YouMayLike from './youMayLike';
import PlaceOrder from './placeOrder';
import Coupons from './coupons';
import OrderDetails from './orderDetails';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import CartModal from '../../../otherComponent/cartModal';
import { BottomDialogModal } from '@otherComponent';
import CartHorizontal from '../../../otherComponent/cartHorizontal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../../context/cartContext';
import { useShopifyCart } from '../../../hooks/useShopifyCart';

const FREE_PRODUCT_RULES = [
  {
    minTotal: 600, product: {
      id: 'gid://shopify/Product/9005749993684',
      merchandiseId: 'gid://shopify/ProductVariant/47316202881236',
      title: 'Su-Kam Line Interactive 600VA UPS',
      tags: ['Su-Kam, UPS'],
      handle: 'su-kam-line-interactive-600va-ups',
      vendor: 'Su-Kam',
      productType: 'UPS',
      publishedAt: '2025-12-04T18:51:02+04:00',
      productTags: ['Su-Kam, UPS'],
      image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/1_82f2b810-b967-407d-a762-8cf95f442e9a.jpg?v=1764858983',
      price: '120.00',
      oldPrice: '0.0',
      available: true,
      quantity: 1
    }
  },
  {
    minTotal: 2000, product: {
      id: 'gid://shopify/Product/9013536424148',
      merchandiseId: 'gid://shopify/ProductVariant/47344950083796',
      title: 'SUNRIDE PORTABLE POWER STATION AC150 (144WH , 13AH)',
      tags: ['Sunride Solar, Power Station'],
      handle: 'sunride-portable-power-station-ac150-144wh-13ah',
      vendor: 'Sunride Solar',
      productType: 'Power Station',
      publishedAt: '2025-12-12T21:24:48+04:00',
      productTags: ['Sunride Solar, Power Station'],
      image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/INP-23.jpg?v=1765559144',
      price: '280.0',
      oldPrice: '0.0',
      available: true,
      quantity: 1
    }
  },
  {
    minTotal: 3500, product: {
      id: 'gid://shopify/Product/9013533376724',
      merchandiseId: 'gid://shopify/ProductVariant/47344931995860',
      title: 'SUNRIDE PORTABLE POWER STATION AC300 (166WH, 15AH)',
      tags: ['Sunride Solar, Power Station'],
      handle: 'sunride-portable-power-station-ac300-166wh-15ah',
      vendor: 'Sunride Solar',
      productType: 'Power Station',
      publishedAt: '2025-12-12T21:00:43+04:00',
      productTags: ['Sunride Solar, Power Station'],
      image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/INP-11.jpg?v=1765558428',
      price: '400.0',
      oldPrice: '0.0',
      available: true,
      quantity: 1
    }
  }
];

export function cart({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { cart } = useCart();
  const { addToCart, removeFromCart, removeFreeFromCart } = useShopifyCart();
  // const cartList = Data.cartList;
  const mayLike = Data.mayLike;
  const [showModal, setShowModal] = useState(false);
  const isRunning = useRef(false);

  const [title, setTitle] = useState('');

  const goTowishList = () => {
    navigation.navigate('wishList');
  };
  const onPressmoveToWishlist = () => {
    setTitle(t('cart.moveTowishlist'));
    setShowModal(!showModal);
  };
  const onPressRemove = () => {
    setTitle(t('cart.remove'));
    // addToCart();
  };

  // const cartTotal = useMemo(() => {
  //   if (!Array.isArray(cart)) return 0;

  //   return cart.reduce((sum, item) => {
  //     const price = Number(item?.price) || 0;
  //     const qty = Number(item?.quantity) || 1;
  //     return sum + price * qty;
  //   }, 0);
  // }, [cart]);

  const cartTotal = useMemo(() => {
    if (!Array.isArray(cart)) return 0;

    return cart.reduce((sum, item) => {
      if (item.isFreeGift) return sum; // ⛔ ignore free gifts
      const price = Number(item?.price) || 0;
      const qty = Number(item?.quantity) || 1;
      return sum + price * qty;
    }, 0);
  }, [cart]);



  // useEffect(() => {
  //   if (isRunning.current) return;

  //   // 🔑 collect all free gift variant IDs
  //   const freeMerchandiseIds = FREE_PRODUCT_RULES.map(
  //     r => r.product.merchandiseId
  //   );

  //   // 🔑 find free gifts already in cart
  //   // const existingFreeItems = cart.filter(item =>
  //   //   freeMerchandiseIds.includes(item.merchandiseId)
  //   // );

  //   // 🔑 find free gifts already in cart
  //   const existingFreeItems = cart.filter(item =>
  //     // console.log('item', item, cartTotal),
  //     item.isFreeGift === true &&
  //     freeMerchandiseIds.includes(item.merchandiseId)
  //   );

  //   // return

  //   console.log('existingFreeItems', existingFreeItems);



  //   // 🔑 find highest eligible rule
  //   let eligibleRule = null;
  //   for (let i = 0; i < FREE_PRODUCT_RULES.length; i++) {
  //     if (cartTotal >= FREE_PRODUCT_RULES[i].minTotal) {
  //       eligibleRule = FREE_PRODUCT_RULES[i];
  //     }
  //   }

  //   /* ❌ NOT ELIGIBLE → REMOVE ALL FREE GIFTS */
  //   if (!eligibleRule) {
  //     console.log('Removing all free gifts - not eligible');
  //     if (existingFreeItems.length === 0) return;

  //     isRunning.current = true;
  //     existingFreeItems.forEach(item => {
  //       item.isFreeGift &&
  //       //   removeFromCart(item.id); // lineId
  //       removeFreeFromCart(item.id);
  //     });
  //     isRunning.current = false;
  //     return;
  //   }

  //   console.log('Eligible rule:', eligibleRule);

  //   const eligibleMerchandiseId = eligibleRule.product.merchandiseId;

  //   const hasCorrectGift = existingFreeItems.some(
  //     item => item.merchandiseId === eligibleMerchandiseId && item.isFreeGift === true
  //   );

  //   console.log('hasCorrectGift', hasCorrectGift);

  //   const wrongGifts = existingFreeItems.filter(
  //     item => item.merchandiseId !== eligibleMerchandiseId
  //   );

  //   // Already perfect → do nothing
  //   if (hasCorrectGift && wrongGifts.length === 0) return;

  //   isRunning.current = true;

  //   // remove wrong gifts
  //   wrongGifts.forEach(item => {
  //     removeFromCart(item.id);
  //   });

  //   // add correct free gift
  //   if (!hasCorrectGift) {
  //     console.log('Adding correct free gift');
  //     addToCart({
  //       ...eligibleRule.product,
  //       isFreeGift: true
  //     });
  //   }

  //   isRunning.current = false;

  // }, [cartTotal]);


  useEffect(() => {
    if (isRunning.current) return;

    // Find the highest eligible rule based on cart total
    let eligibleRule = null;
    for (let i = 0; i < FREE_PRODUCT_RULES.length; i++) {
      if (cartTotal >= FREE_PRODUCT_RULES[i].minTotal) {
        eligibleRule = FREE_PRODUCT_RULES[i];
      }
    }

    isRunning.current = true;

    /* ❌ NOT ELIGIBLE → REMOVE ALL FREE GIFTS */
    if (!eligibleRule) {

      const freeItems = cart.filter(item => item.isFreeGift === true);
      if (freeItems.length > 0) {
        freeItems.forEach(item => {
          removeFreeFromCart(item.id);
        });
      }

      isRunning.current = false;
      return;
    }

    const eligibleMerchandiseId = eligibleRule.product.merchandiseId;

    // Find ALL free gifts in cart
    const allFreeGifts = cart.filter(item => item.isFreeGift === true);

    // Check if user has the CORRECT free gift
    const hasCorrectFreeGift = allFreeGifts.some(
      item => item.merchandiseId === eligibleMerchandiseId
    );

    // Find free gifts that are NO LONGER eligible (different product)
    const wrongFreeGifts = allFreeGifts.filter(
      item => item.merchandiseId !== eligibleMerchandiseId
    );

    // ✅ ALREADY PERFECT → DO NOTHING
    if (hasCorrectFreeGift && wrongFreeGifts.length === 0) {
      isRunning.current = false;
      return;
    }

    // STEP 1: Remove wrong/outdated free gifts first
    wrongFreeGifts.forEach(item => {
      removeFreeFromCart(item.id);
    });

    // STEP 2: Add the correct free gift if not already present
    if (!hasCorrectFreeGift) {
      addToCart({
        ...eligibleRule.product,
        isFreeGift: true,
        quantity: 1
      });
    }

    isRunning.current = false;

  }, [cartTotal]);

  return (
    // <SafeAreaView >
    //   <Header
    //     text={t('cart.shoppingCart')}
    //     showWishListIcon
    //     showText
    //     subText={t('cart.steps')}
    //     navigation={navigation}
    //     onWishlistPress={goTowishList}
    //   />
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={styles.details}>
    //     {cart.length === 0 ? (
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           paddingHorizontal: 20,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             fontSize: 16,
    //             color: colors.text,
    //             textAlign: 'center',
    //             fontWeight: '800',
    //             marginBottom: 8,
    //             textTransform: 'uppercase',
    //           }}
    //         >
    //           Empty Cart
    //         </Text>

    //         <Text
    //           style={{
    //             fontSize: 14,
    //             color: colors.text,
    //             textAlign: 'center',
    //           }}
    //         >
    //           Your cart is currently empty. Add items to place an order.
    //         </Text>
    //       </View>
    //     ) : (
    //       <>
    //         <CartHorizontal
    //           products={cart}
    //           t={t}
    //           showWishlist
    //           colors={colors}
    //           showPrice
    //           showDivider
    //           productStyle={styles.products}
    //           setShowModal={setShowModal}
    //           onPressmoveToWishlist={onPressmoveToWishlist}
    //           onPressRemove={onPressRemove}
    //           navigation={navigation}
    //         />

    //         <OrderDetails
    //           title
    //           applyCoupon
    //           t={t}
    //           colors={colors}
    //           navigation={navigation}
    //         />
    //         <Divider marginTop={windowHeight(20)} />
    //         <Support t={t} colors={colors} />
    //       </>
    //     )}
    //   </ScrollView>
    //   {/* <PlaceOrder t={t} colors={colors} navigation={navigation} /> */}
    //   {cart.length > 0 && (
    //     <PlaceOrder t={t} colors={colors} navigation={navigation} />
    //   )}

    //   <BottomDialogModal
    //     modal={
    //       <CartModal
    //         onPress={showModal}
    //         t={t}
    //         setShowModal={setShowModal}
    //         showModal={showModal}
    //         title={title}
    //         paddingBottom={'14%'}
    //       />
    //     }
    //     showModal={showModal}
    //     visibleModal={() => setShowModal(!showModal)}
    //   />
    // </SafeAreaView>


    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={t('cart.shoppingCart')}
        showWishListIcon
        showText
        subText={t('cart.steps')}
        navigation={navigation}
        onWishlistPress={goTowishList}
      />

      {cart.length === 0 ? (
        // ⚡ NO SCROLL VIEW → CENTER WORKS PERFECTLY
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.text,
              textAlign: 'center',
              fontWeight: '800',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            {t('cart.emptyCart')}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.text,
              textAlign: 'center',
            }}
          >
            {t('cart.emptyCartDesc')}
          </Text>
        </View>
      ) : (
        // ⚡ NORMAL CART SCROLL VIEW
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.details}
          >
            <CartHorizontal
              products={cart}
              t={t}
              showWishlist
              colors={colors}
              showPrice
              showDivider
              productStyle={styles.products}
              setShowModal={setShowModal}
              onPressmoveToWishlist={onPressmoveToWishlist}
              onPressRemove={onPressRemove}
              navigation={navigation}
            />

            <OrderDetails
              title
              applyCoupon
              t={t}
              colors={colors}
              navigation={navigation}
            />

            <Divider marginTop={windowHeight(20)} />
            <Support t={t} colors={colors} />
          </ScrollView>

          <PlaceOrder t={t} colors={colors} navigation={navigation} />
        </>
      )}

      <BottomDialogModal
        modal={
          <CartModal
            onPress={showModal}
            t={t}
            setShowModal={setShowModal}
            showModal={showModal}
            title={title}
            paddingBottom={'14%'}
          />
        }
        showModal={showModal}
        visibleModal={() => setShowModal(!showModal)}
      />
    </SafeAreaView>

  );
}








// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { ScrollView, Text, View } from 'react-native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import { windowHeight } from '@theme/appConstant';
// import { Divider } from '@commonComponents';
// import Support from './support';
// import YouMayLike from './youMayLike';
// import PlaceOrder from './placeOrder';
// import Coupons from './coupons';
// import OrderDetails from './orderDetails';
// import Data from '@utils/json';
// import { useTheme } from '@react-navigation/native';
// import styles from './style';
// import CartModal from '../../../otherComponent/cartModal';
// import { BottomDialogModal } from '@otherComponent';
// import CartHorizontal from '../../../otherComponent/cartHorizontal';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useCart } from '../../../context/cartContext';
// import { useShopifyCart } from '../../../hooks/useShopifyCart';

// const FREE_PRODUCT_RULES = [
//   {
//     minTotal: 600, product: {
//       id: 'gid://shopify/Product/9005749993684',
//       merchandiseId: 'gid://shopify/ProductVariant/47316202881236',
//       title: 'Su-Kam Line Interactive 600VA UPS',
//       tags: ['Su-Kam, UPS'],
//       handle: 'su-kam-line-interactive-600va-ups',
//       vendor: 'Su-Kam',
//       productType: 'UPS',
//       publishedAt: '2025-12-04T18:51:02+04:00',
//       productTags: ['Su-Kam, UPS'],
//       image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/1_82f2b810-b967-407d-a762-8cf95f442e9a.jpg?v=1764858983',
//       price: '120.00',
//       oldPrice: '0.0',
//       available: true,
//       quantity: 1
//     }
//   },
//   {
//     minTotal: 2000, product: {
//       id: 'gid://shopify/Product/9013536424148',
//       merchandiseId: 'gid://shopify/ProductVariant/47344950083796',
//       title: 'SUNRIDE PORTABLE POWER STATION AC150 (144WH , 13AH)',
//       tags: ['Sunride Solar, Power Station'],
//       handle: 'sunride-portable-power-station-ac150-144wh-13ah',
//       vendor: 'Sunride Solar',
//       productType: 'Power Station',
//       publishedAt: '2025-12-12T21:24:48+04:00',
//       productTags: ['Sunride Solar, Power Station'],
//       image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/INP-23.jpg?v=1765559144',
//       price: '280.0',
//       oldPrice: '0.0',
//       available: true,
//       quantity: 1
//     }
//   },
//   {
//     minTotal: 3500, product: {
//       id: 'gid://shopify/Product/9013533376724',
//       merchandiseId: 'gid://shopify/ProductVariant/47344931995860',
//       title: 'SUNRIDE PORTABLE POWER STATION AC300 (166WH, 15AH)',
//       tags: ['Sunride Solar, Power Station'],
//       handle: 'sunride-portable-power-station-ac300-166wh-15ah',
//       vendor: 'Sunride Solar',
//       productType: 'Power Station',
//       publishedAt: '2025-12-12T21:00:43+04:00',
//       productTags: ['Sunride Solar, Power Station'],
//       image: 'https://cdn.shopify.com/s/files/1/0760/7743/3044/files/INP-11.jpg?v=1765558428',
//       price: '400.0',
//       oldPrice: '0.0',
//       available: true,
//       quantity: 1
//     }
//   }
// ];

// export function cart({ navigation }) {
//   const { t } = useTranslation();
//   const { colors } = useTheme();

//   const { cart } = useCart();
//   const { addToCart, removeFromCart, updateCart } = useShopifyCart();
//   const mayLike = Data.mayLike;
//   const [showModal, setShowModal] = useState(false);
//   const isProcessing = useRef(false);

//   const [title, setTitle] = useState('');

//   const goTowishList = () => {
//     navigation.navigate('wishList');
//   };

//   const onPressmoveToWishlist = () => {
//     setTitle(t('cart.moveTowishlist'));
//     setShowModal(!showModal);
//   };

//   const onPressRemove = () => {
//     setTitle(t('cart.remove'));
//   };

//   // ✅ Calculate cart total EXCLUDING free gifts
//   const cartTotal = useMemo(() => {
//     if (!Array.isArray(cart)) return 0;

//     return cart.reduce((sum, item) => {
//       if (item.isFreeGift) return sum;
//       const price = Number(item?.price) || 0;
//       const qty = Number(item?.quantity) || 1;
//       return sum + price * qty;
//     }, 0);
//   }, [cart]);

//   // ✅ FREE GIFT LOGIC
//   useEffect(() => {
//     if (isProcessing.current) return;
//     if (cart.length === 0) return;

//     isProcessing.current = true;

//     try {
//       const freeMerchandiseIds = FREE_PRODUCT_RULES.map(r => r.product.merchandiseId);

//       // Find highest eligible rule
//       let eligibleRule = null;
//       for (let i = FREE_PRODUCT_RULES.length - 1; i >= 0; i--) {
//         if (cartTotal >= FREE_PRODUCT_RULES[i].minTotal) {
//           eligibleRule = FREE_PRODUCT_RULES[i];
//           break;
//         }
//       }

//       // ❌ NOT ELIGIBLE → Remove all free gifts
//       if (!eligibleRule) {
//         cart.forEach(item => {
//           if (item.isFreeGift === true) {
//             removeFromCart(item.id);
//           }
//         });
//         return;
//       }

//       const eligibleMerchandiseId = eligibleRule.product.merchandiseId;

//       // Find existing free gift and paid versions
//       const freeGiftItem = cart.find(
//         item => item.merchandiseId === eligibleMerchandiseId && item.isFreeGift === true
//       );

//       const paidItems = cart.filter(
//         item => item.merchandiseId === eligibleMerchandiseId && item.isFreeGift !== true
//       );

//       // ✅ Case 1: Paid item exists, no free gift → Convert 1 to free
//       if (paidItems.length > 0 && !freeGiftItem) {
//         const firstPaid = paidItems[0];

//         // Mark first item as free (keep qty 1)
//         updateCart(firstPaid.id, {
//           quantity: 1,
//           isFreeGift: true,
//           price: '0',
//         });

//         // If original qty > 1, add remaining as separate paid item
//         if (firstPaid.quantity > 1) {
//           addToCart({
//             ...firstPaid,
//             id: `${firstPaid.id}_paid`,
//             quantity: firstPaid.quantity - 1,
//             isFreeGift: false,
//             price: firstPaid.price,
//           });
//         }

//         // Remove other paid duplicates
//         for (let i = 1; i < paidItems.length; i++) {
//           removeFromCart(paidItems[i].id);
//         }
//       }

//       // ✅ Case 2: Free gift exists, also has paid items → Remove paid items
//       if (freeGiftItem && paidItems.length > 0) {
//         paidItems.forEach(item => removeFromCart(item.id));
//       }

//       // ✅ Case 3: Remove wrong free gifts (different merchandise)
//       cart.forEach(item => {
//         if (item.isFreeGift === true &&
//             freeMerchandiseIds.includes(item.merchandiseId) &&
//             item.merchandiseId !== eligibleMerchandiseId) {
//           removeFromCart(item.id);
//         }
//       });

//     } finally {
//       isProcessing.current = false;
//     }

//   }, [cartTotal]);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Header
//         text={t('cart.shoppingCart')}
//         showWishListIcon
//         showText
//         subText={t('cart.steps')}
//         navigation={navigation}
//         onWishlistPress={goTowishList}
//       />

//       {cart.length === 0 ? (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             paddingHorizontal: 20,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 16,
//               color: colors.text,
//               textAlign: 'center',
//               fontWeight: '800',
//               marginBottom: 8,
//               textTransform: 'uppercase',
//             }}
//           >
//             {t('cart.emptyCart')}
//           </Text>

//           <Text
//             style={{
//               fontSize: 14,
//               color: colors.text,
//               textAlign: 'center',
//             }}
//           >
//             {t('cart.emptyCartDesc')}
//           </Text>
//         </View>
//       ) : (
//         <>
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.details}
//           >
//             <CartHorizontal
//               products={cart}
//               t={t}
//               showWishlist
//               colors={colors}
//               showPrice
//               showDivider
//               productStyle={styles.products}
//               setShowModal={setShowModal}
//               onPressmoveToWishlist={onPressmoveToWishlist}
//               onPressRemove={onPressRemove}
//               navigation={navigation}
//             />

//             <OrderDetails
//               title
//               applyCoupon
//               t={t}
//               colors={colors}
//               navigation={navigation}
//             />

//             <Divider marginTop={windowHeight(20)} />
//             <Support t={t} colors={colors} />
//           </ScrollView>

//           <PlaceOrder t={t} colors={colors} navigation={navigation} />
//         </>
//       )}

//       <BottomDialogModal
//         modal={
//           <CartModal
//             onPress={showModal}
//             t={t}
//             setShowModal={setShowModal}
//             showModal={showModal}
//             title={title}
//             paddingBottom={'14%'}
//           />
//         }
//         showModal={showModal}
//         visibleModal={() => setShowModal(!showModal)}
//       />
//     </SafeAreaView>
//   );
// }