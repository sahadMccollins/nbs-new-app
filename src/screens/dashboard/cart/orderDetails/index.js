// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import appColors from '@theme/appColors';
// import styles from './style';
// import { windowWidth } from '@theme/appConstant';
// import { useValues } from '@App';
// import { useCart } from '../../../../context/cartContext';

// export default orderDetails = props => {
//   const { t, colors, title, applyCoupon, paddingHorizontal, navigation } = props;
//   const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
//   const { cart } = useCart();

//   console.log('cart in order details', cart);

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {
//           paddingHorizontal: paddingHorizontal
//             ? paddingHorizontal
//             : windowWidth(14),
//         },
//       ]}>
//       {title && (
//         <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
//           <Text
//             style={[
//               styles.orderDetails,
//               { color: colors.text, textAlign: textRTLStyle },
//             ]}>
//             {t('orderDetails.orderDetail')}
//           </Text>
//           <Text style={styles.orderDetails}> :</Text>
//         </View>
//       )}
//       <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
//         <Text style={styles.title}>{t('orderDetails.bagTotal')}</Text>
//         <Text style={styles.title}>
//           {currSymbol}
//           {(220.0 * currValue).toFixed(2)}
//         </Text>
//       </View>
//       <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
//         <Text style={styles.title}>{t('orderDetails.bagSavings')}</Text>

//         <Text style={[styles.title, { color: appColors.savings }]}>
//           -{currSymbol}
//           {(20.0 * currValue).toFixed(2)}
//         </Text>
//       </View>
//       {/* <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
//         <Text style={styles.title}>{t('orderDetails.couponDiscount')}</Text>
//         {applyCoupon ? (
//           <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => navigation.navigate('ApplyCoupon')}>
//             <Text style={[styles.title, {color: appColors.primary}]}>
//               {t('orderDetails.applyCoupon')}
//             </Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.title}>
//             {currSymbol}
//             {(20.0 * currValue).toFixed(2)}
//           </Text>
//         )}
//       </View>
//       <View style={[styles.details, {flexDirection: viewRTLStyle}]}>
//         <Text style={styles.title}>{t('orderDetails.delivery')}</Text>
//         <Text style={styles.title}>
//           {currSymbol}
//           {(50.0 * currValue).toFixed(2)}
//         </Text>
//       </View> */}
//       <View
//         style={[
//           styles.total,
//           { borderTopColor: colors.line, flexDirection: viewRTLStyle },
//         ]}>
//         <Text style={[styles.totalAmount, { color: colors.text }]}>
//           {t('orderDetails.totalAmount')}
//         </Text>
//         <Text style={[styles.totalAmount, { color: colors.text }]}>
//           {currSymbol}
//           {(270.0 * currValue).toFixed(2)}
//         </Text>
//       </View>
//     </View>
//   );
// };


// import React, { useMemo } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import appColors from '@theme/appColors';
// import styles from './style';
// import { windowWidth } from '@theme/appConstant';
// import { useValues } from '@App';
// import { useCart } from '../../../../context/cartContext';

// export default orderDetails = (props) => {
//   const { t, colors, title, applyCoupon, paddingHorizontal, navigation } = props;
//   const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
//   const { cart } = useCart();

//   console.log('cart in order details', cart);

//   // 👉 Calculate values from cart
//   const { bagTotal, bagSavings, totalAmount } = useMemo(() => {
//     if (!cart || !Array.isArray(cart)) {
//       return { bagTotal: 0, bagSavings: 0, totalAmount: 0 };
//     }

//     let bagTotal = 0;
//     let bagSavings = 0;
//     let totalAmount = 0;

//     cart.forEach((item) => {
//       const price = parseFloat(item?.price) || 0;
//       const oldPrice = parseFloat(item?.oldPrice) || 0;
//       const qty = item?.quantity || 1;

//       bagTotal += oldPrice * qty;
//       bagSavings += (oldPrice - price) * qty;
//       totalAmount += price * qty;
//     });

//     return { bagTotal, bagSavings, totalAmount };
//   }, [cart]);

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {
//           paddingHorizontal: paddingHorizontal
//             ? paddingHorizontal
//             : windowWidth(14),
//         },
//       ]}
//     >
//       {title && (
//         <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
//           <Text
//             style={[
//               styles.orderDetails,
//               { color: colors.text, textAlign: textRTLStyle },
//             ]}
//           >
//             {t('orderDetails.orderDetail')}
//           </Text>
//           <Text style={styles.orderDetails}> :</Text>
//         </View>
//       )}

//       {/* Bag Total */}
//       <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
//         <Text style={styles.title}>{t('orderDetails.bagTotal')}</Text>
//         <Text style={styles.title}>
//           {currSymbol}
//           {(bagTotal * currValue).toFixed(2)}
//         </Text>
//       </View>

//       {/* Bag Savings */}
//       <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
//         <Text style={styles.title}>{t('orderDetails.bagSavings')}</Text>
//         <Text style={[styles.title, { color: appColors.savings }]}>
//           -{currSymbol}
//           {(bagSavings * currValue).toFixed(2)}
//         </Text>
//       </View>

//       {/* Total Amount */}
//       <View
//         style={[
//           styles.total,
//           { borderTopColor: colors.line, flexDirection: viewRTLStyle },
//         ]}
//       >
//         <Text style={[styles.totalAmount, { color: colors.text }]}>
//           {t('orderDetails.totalAmount')}
//         </Text>
//         <Text style={[styles.totalAmount, { color: colors.text }]}>
//           {currSymbol}
//           {(totalAmount * currValue).toFixed(2)}
//         </Text>
//       </View>
//     </View>
//   );
// };


import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import appColors from '@theme/appColors';
import styles from './style';
import { windowWidth } from '@theme/appConstant';
import { useValues } from '@App';
import { useCart } from '../../../../context/cartContext';

export default orderDetails = (props) => {
  const { t, colors, title, paddingHorizontal } = props;
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
  const { cart } = useCart();

  // Compute: bagTotal = sum(price * qty)
  //          bagSavings = sum(max(0, oldPrice - price) * qty)
  //          totalAmount = bagTotal - bagSavings
  const { bagTotal, bagSavings, totalAmount } = useMemo(() => {
    if (!cart || !Array.isArray(cart)) return { bagTotal: 0, bagSavings: 0, totalAmount: 0 };

    let bagTotal = 0;
    let bagSavings = 0;

    cart.forEach(item => {
      const price = Number(item?.price) || 0;
      const oldPrice = Number(item?.oldPrice) || 0;
      const qty = Number(item?.quantity) || 1;

      bagTotal += price * qty;
      const diff = oldPrice - price;
      if (diff > 0) bagSavings += diff * qty;
    });

    const totalAmount = bagTotal - bagSavings;
    return { bagTotal, bagSavings, totalAmount };
  }, [cart]);

  return (
    <View
      style={[
        styles.mainView,
        { paddingHorizontal: paddingHorizontal ? paddingHorizontal : windowWidth(14) },
      ]}
    >
      {title && (
        <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
          <Text style={[styles.orderDetails, { color: colors.text, textAlign: textRTLStyle }]}>
            {t('orderDetails.orderDetail')}
          </Text>
          <Text style={styles.orderDetails}> :</Text>
        </View>
      )}

      <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.title}>{t('orderDetails.bagTotal')}</Text>
        <Text style={styles.title}>
          {currSymbol}{(bagTotal * currValue).toFixed(2)}
        </Text>
      </View>

      <View style={[styles.details, { flexDirection: viewRTLStyle }]}>
        <Text style={styles.title}>{t('orderDetails.bagSavings')}</Text>
        <Text style={[styles.title, { color: appColors.savings }]}>
          -{currSymbol}{(bagSavings * currValue).toFixed(2)}
        </Text>
      </View>

      <View style={[styles.total, { borderTopColor: colors.line, flexDirection: viewRTLStyle }]}>
        <Text style={[styles.totalAmount, { color: colors.text }]}>{t('orderDetails.totalAmount')}</Text>
        <Text style={[styles.totalAmount, { color: colors.text }]}>
          {currSymbol}{(totalAmount * currValue).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
