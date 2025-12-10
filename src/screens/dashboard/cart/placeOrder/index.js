// // import React from 'react';
// // import {View, Text} from 'react-native';
// // import {Button} from '@commonComponents';
// // import {fontSizes} from '@theme/appConstant';
// // import appColors from '@theme/appColors';
// // import styles from './style';
// // import {useValues} from '@App';

// // export default placeOrder = props => {
// //   const {t, colors} = props;
// //   const {viewRTLStyle, currSymbol, currValue} = useValues();

// //   const goToDeliveryDetails = () => {
// //     props.navigation.navigate('DeliveryDetails');
// //   };

// //   return (
// //     <View
// //       style={[
// //         styles.mainView,
// //         {backgroundColor: colors.card, flexDirection: viewRTLStyle},
// //       ]}>
// //       <View>
// //         <Text style={[styles.price, {color: colors.text}]}>
// //           {currSymbol}
// //           {(270.0 * currValue).toFixed(2)}
// //         </Text>
// //         <Text style={[styles.price, {color: appColors.primary}]}>
// //           {t('cart.viewDetails')}
// //         </Text>
// //       </View>
// //       <Button
// //         style={styles.order}
// //         fontSize={fontSizes.FONT18}
// //         text={'cart.placeOrder'}
// //         t={t}
// //         onPress={goToDeliveryDetails}
// //       />
// //     </View>
// //   );
// // };


// import React, { useMemo } from 'react';
// import { View, Text } from 'react-native';
// import { Button } from '@commonComponents';
// import { fontSizes } from '@theme/appConstant';
// import appColors from '@theme/appColors';
// import styles from './style';
// import { useValues } from '@App';
// import { useCart } from '../../../../context/cartContext';

// export default placeOrder = (props) => {
//   const { t, colors } = props;
//   const { viewRTLStyle, currSymbol, currValue } = useValues();
//   const { cart } = useCart();

//   // ✅ Only calculate total price (no savings)
//   const totalAmount = useMemo(() => {
//     if (!cart || !Array.isArray(cart)) return 0;

//     let total = 0;

//     cart.forEach(item => {
//       const price = Number(item?.price) || 0;
//       const qty = Number(item?.quantity) || 1;
//       total += price * qty;
//     });

//     return total;
//   }, [cart]);

//   const goToDeliveryDetails = () => {
//     props.navigation.navigate('DeliveryDetails');
//   };

//   return (
//     <View
//       style={[
//         styles.mainView,
//         { backgroundColor: colors.card, flexDirection: viewRTLStyle },
//       ]}
//     >
//       <View>
//         {/* ✅ Showing only total price */}
//         <Text style={[styles.price, { color: colors.text }]}>
//           {currSymbol}
//           {(totalAmount * currValue).toFixed(2)}
//         </Text>

//         <Text style={[styles.price, { color: appColors.primary }]}>
//           {t('cart.viewDetails')}
//         </Text>
//       </View>

//       <Button
//         style={styles.order}
//         fontSize={fontSizes.FONT18}
//         text={'cart.placeOrder'}
//         t={t}
//         onPress={goToDeliveryDetails}
//       />
//     </View>
//   );
// };


import React, { useMemo, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from '@commonComponents';
import { fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './style';
import { useValues } from '@App';
import { useCart } from '../../../../context/cartContext';
import { useCustomer } from '../../../../context/customerContext';
import { useShopifyCart } from '../../../../hooks/useShopifyCart';

export default placeOrder = (props) => {
  const { t, colors } = props;
  const { viewRTLStyle, currSymbol, currValue } = useValues();
  const { cart } = useCart();
  const { customer } = useCustomer();
  const { createShopifyCheckoutUrl } = useShopifyCart();

  const [loading, setLoading] = useState(false);

  // ✅ Calculate total price
  const totalAmount = useMemo(() => {
    if (!cart || !Array.isArray(cart)) return 0;
    let total = 0;
    cart.forEach(item => {
      const price = Number(item?.price) || 0;
      const qty = Number(item?.quantity) || 1;
      total += price * qty;
    });
    return total;
  }, [cart]);

  // ✅ Check if user is logged in
  const isLoggedIn = !!customer?.accessToken;

  // ✅ Handle checkout based on user status
  const handleCheckout = async () => {
    if (isLoggedIn) {
      // Logged-in users go to delivery details (address selection)
      props.navigation.navigate('DeliveryDetails');
    } else {
      // Guest users go directly to checkout
      try {
        setLoading(true);

        const cartDetail = {
          cartItems: cart,
          selectedAddress: null, // No address for guests
          email: null, // No email (guest can enter at checkout)
        };

        const url = await createShopifyCheckoutUrl(cartDetail);

        // Pass checkout URL to DeliveryDetails for WebView display
        props.navigation.navigate('DeliveryDetails', {
          checkoutUrl: url,
          isGuestCheckout: true
        });

      } catch (err) {
        console.log("Guest checkout error:", err);
        alert('Error initiating checkout. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View
      style={[
        styles.mainView,
        { backgroundColor: colors.card, flexDirection: viewRTLStyle },
      ]}
    >
      <View>
        <Text style={[styles.price, { color: colors.text }]}>
          {currSymbol}
          {(totalAmount * currValue).toFixed(2)}
        </Text>
        <Text style={[styles.price, { color: appColors.primary }]}>
          {t('cart.viewDetails')}
        </Text>
      </View>

      <Button
        style={styles.order}
        fontSize={fontSizes.FONT18}
        text={'cart.placeOrder'}
        t={t}
        onPress={handleCheckout}
        disabled={loading}
        loading={loading}
      />

      {/* {loading && (
        <ActivityIndicator
          style={{ position: 'absolute', alignSelf: 'center' }}
          size="small"
          color={appColors.primary}
        />
      )} */}
    </View>
  );
};