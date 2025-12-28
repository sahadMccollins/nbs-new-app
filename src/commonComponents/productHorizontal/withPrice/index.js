import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useValues } from '@App';
import { fontSizes } from '@theme/appConstant';

export default withPrice = props => {
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
  return (
    <View>
      <Text style={[styles.brand, { textAlign: textRTLStyle, marginVertical: 4 }]}>
        {props.t("products.by")} {props.brandName}
      </Text>
      <View style={[styles.priceView, { flexDirection: viewRTLStyle, alignItems: 'baseline' }]}>
        <Text
          style={[
            styles.discountPrice,
            { color: props.colors.text, textAlign: textRTLStyle },
          ]}>
          {currSymbol}
          {(props.discountPrice * currValue).toFixed(2)}
        </Text>

        {props.price && props.discountPrice && props.price > props.discountPrice && (
          <>
            <Text style={[styles.price, { textAlign: textRTLStyle, fontSize: fontSizes.FONT17 }]}>
              {currSymbol}
              {(props.price * currValue).toFixed(2)}
            </Text>
            <Text style={[styles.discount, { textAlign: textRTLStyle, fontSize: fontSizes.FONT14 }]}>
              {`${Math.round(((props.price - props.discountPrice) / props.price) * 100)}% OFF`}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
