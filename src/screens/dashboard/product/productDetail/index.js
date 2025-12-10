import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalStyle } from '@style';
import styles from './styles';
import { useValues } from '@App';
import RenderHtml from 'react-native-render-html';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productDetail = props => {
  const { t, productDescription, specifications } = props;
  const { viewRTLStyle, textRTLStyle } = useValues();

  const parseSpecifications = (specValues) => {
    // Handle null, undefined, or empty string cases
    if (!specValues || specValues.trim() === '') {
      return [];
    }

    try {
      const parsed = JSON.parse(specValues);
      return parsed.map((spec) => {
        const [key, value] = spec.split(':');
        return {
          key: key?.trim() || '',
          value: value?.trim() || ''
        };
      });
    } catch (error) {
      console.error('Error parsing specifications:', error);
      return [];
    }
  };

  const formattedSpecifications = parseSpecifications(specifications);

  return (
    <View style={GlobalStyle.container}>
      <Text
        style={[
          styles.title,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {t('productDetail.productDetails')}
      </Text>
      {/* <Text
        style={[
          styles.discription,
          {
            marginVertical: windowHeight(6),
            color: props.colors.subText,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('productDetail.discription')}
      </Text> */}


      <RenderHtml
        // contentWidth={SIZES.width}
        source={{ html: productDescription || '' }}
        baseStyle={{
          color: props.colors.subText,
          marginVertical: windowHeight(6),
          fontSize: fontSizes.FONT17,
          fontFamily: appFonts.LatoMidum,
          lineHeight: windowHeight(18)
        }}

        tagsStyles={{
          h3: {
            fontSize: fontSizes.FONT20,
            // fontWeight: 900,
            marginVertical: windowHeight(6),
            color: '#000',
          },
          strong: {
            fontWeight: '500',
          },
          ul: {
            paddingLeft: windowWidth(15),
            // marginVertical: 3,
            lineHeight: windowHeight(18)
          },
          li: {
            // marginBottom: 4,
            // lineHeight: 33,
          },
          p: {
            marginBottom: 5,
          },
        }}
      />

      <View style={{ marginVertical: 10 }}>
        {formattedSpecifications.map((spec, index) => (
          <View
            key={index}
            style={[styles.row, {
              backgroundColor: props.colors.product
            }]}
          >
            <Text style={[styles.keyText, {
              color: props.colors.subText
            }]}>{spec.key}</Text>
            <Text style={[styles.valueText, {
              color: props.colors.subText
            }]}>: {spec.value}</Text>
          </View>
        ))}
      </View>

      {/* <FlatList
        data={productDetails}
        style={{ flexDirection: viewRTLStyle }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({ item, index }) => (
          <View>
            <Text
              style={[
                styles.name,
                { color: props.colors.text, textAlign: textRTLStyle },
              ]}>
              {t(item.name)}
            </Text>
            <Text
              style={[
                styles.discription,
                { color: props.colors.subText, textAlign: textRTLStyle },
              ]}>
              {t(item.content)}
            </Text>
          </View>
        )}
      /> */}
    </View>
  );
};
