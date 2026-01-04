// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from './styles';
// import { useValues } from '@App';
// import { fontSizes } from '@theme/appConstant';

// export default withPrice = props => {
//   const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
//   return (
//     <View>
//       <Text style={[styles.brand, { textAlign: textRTLStyle, marginVertical: 4 }]}>
//         {props.t("products.by")} {props.brandName}
//       </Text>
//       <View style={[styles.priceView, { flexDirection: viewRTLStyle, alignItems: 'baseline' }]}>
//         {props.isFreeGift ? (
//           <Text
//             style={[
//               styles.discountPrice,
//               { color: props.colors.text, textAlign: textRTLStyle, textDecorationLine: 'line-through' },
//             ]}>
//             {currSymbol}
//             {(props.discountPrice * currValue).toFixed(2)}
//           </Text>
//         ) : (
//           <Text
//             style={[
//               styles.discountPrice,
//               { color: props.colors.text, textAlign: textRTLStyle },
//             ]}>
//             {currSymbol}
//             {(props.discountPrice * currValue).toFixed(2)}
//           </Text>
//         )}

//         {props.price && props.discountPrice && props.price > props.discountPrice && (
//           <>
//             <Text style={[styles.price, { textAlign: textRTLStyle, fontSize: fontSizes.FONT17 }]}>
//               {currSymbol}
//               {(props.price * currValue).toFixed(2)}
//             </Text>
//             <Text style={[styles.discount, { textAlign: textRTLStyle, fontSize: fontSizes.FONT14 }]}>
//               {`${Math.round(((props.price - props.discountPrice) / props.price) * 100)}% OFF`}
//             </Text>
//           </>
//         )}
//       </View>
//     </View>
//   );
// };


import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useValues } from '@App';
import { fontSizes } from '@theme/appConstant';

export default function withPrice(props) {
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();

  // ✅ SAFE quantity
  const quantity =
    Number(props.quantity) ||
    Number(props.qty) ||
    1;

  const hasDiscount =
    props.price &&
    props.discountPrice &&
    props.price > props.discountPrice;

  const showExtraQtyNote =
    props.isFreeGift && quantity > 1;


  return (
    <View>
      {/* Brand */}
      <Text
        style={[
          styles.brand,
          { textAlign: textRTLStyle, marginVertical: 4 },
        ]}
      >
        {props.t('products.by')} {props.brandName}
      </Text>

      <View
        style={[
          styles.priceView,
          { flexDirection: viewRTLStyle, alignItems: 'baseline' },
        ]}
      >
        {/* 🎁 FREE GIFT */}
        {props.isFreeGift ? (
          <>
            {/* Striked original price */}
            <Text
              style={[
                styles.price,
                {
                  textAlign: textRTLStyle,
                  textDecorationLine: 'line-through',
                  color: props.colors.text,
                  fontSize: fontSizes.FONT15,
                  opacity: 0.5,
                },
              ]}
            >
              {currSymbol}
              {(props.discountPrice * currValue).toFixed(2)}
            </Text>

            {/* FREE label */}
            <Text
              style={[
                styles.discount,
                {
                  textAlign: textRTLStyle,
                  fontSize: fontSizes.FONT16,
                  color: 'green',
                  marginStart: 6,
                  fontWeight: 'bold',
                },
              ]}
            >
              FREE
            </Text>
          </>
        ) : (
          <>
            {/* Normal discounted price */}
            <Text
              style={[
                styles.discountPrice,
                {
                  color: props.colors.text,
                  textAlign: textRTLStyle,
                },
              ]}
            >
              {currSymbol}
              {(props.discountPrice * currValue).toFixed(2)}
            </Text>

            {/* Original price + discount */}
            {hasDiscount && (
              <>
                <Text
                  style={[
                    styles.price,
                    {
                      textAlign: textRTLStyle,
                      fontSize: fontSizes.FONT17,
                    },
                  ]}
                >
                  {currSymbol}
                  {(props.price * currValue).toFixed(2)}
                </Text>

                <Text
                  style={[
                    styles.discount,
                    {
                      textAlign: textRTLStyle,
                      fontSize: fontSizes.FONT14,
                    },
                  ]}
                >
                  {`${Math.round(
                    ((props.price - props.discountPrice) / props.price) * 100
                  )}% OFF`}
                </Text>
              </>
            )}
          </>
        )}
      </View>

      {/* ✅ Quantity clarification (FREE gift only) */}
      {showExtraQtyNote && (
        <Text
          style={{
            fontSize: fontSizes.FONT13,
            color: '#666',
            marginTop: 4,
            textAlign: textRTLStyle,
          }}
        >
          * 1 item free, additional items charged
        </Text>
      )}
    </View>
  );
}
