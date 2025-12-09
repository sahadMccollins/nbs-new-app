// import React from 'react';
// import {View, Text} from 'react-native';
// import {Button} from '@commonComponents';
// import {fontSizes} from '@theme/appConstant';
// import appColors from '@theme/appColors';
// import styles from './style';
// import {useValues} from '@App';

// export default placeOrder = props => {
//   const {t, colors} = props;
//   const {viewRTLStyle, currSymbol, currValue} = useValues();

//   const goToDeliveryDetails = () => {
//     props.navigation.navigate('DeliveryDetails');
//   };

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {backgroundColor: colors.card, flexDirection: viewRTLStyle},
//       ]}>
//       <View>
//         <Text style={[styles.price, {color: colors.text}]}>
//           {currSymbol}
//           {(270.0 * currValue).toFixed(2)}
//         </Text>
//         <Text style={[styles.price, {color: appColors.primary}]}>
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


import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@commonComponents';
import { fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './style';
import { useValues } from '@App';
import { useCart } from '../../../../context/cartContext';

export default placeOrder = (props) => {
  const { t, colors } = props;
  const { viewRTLStyle, currSymbol, currValue } = useValues();
  const { cart } = useCart();

  // ✅ Only calculate total price (no savings)
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

  const goToDeliveryDetails = () => {
    props.navigation.navigate('DeliveryDetails');
  };

  return (
    <View
      style={[
        styles.mainView,
        { backgroundColor: colors.card, flexDirection: viewRTLStyle },
      ]}
    >
      <View>
        {/* ✅ Showing only total price */}
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
        onPress={goToDeliveryDetails}
      />
    </View>
  );
};
