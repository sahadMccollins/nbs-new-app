import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {GlobalStyle} from '@style';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default productDetail = props => {
  const {t, productDetails} = props;
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={GlobalStyle.container}>
      <Text
        style={[
          styles.title,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('productDetail.productDetails')}
      </Text>
      <Text
        style={[
          styles.discription,
          {
            marginVertical: windowHeight(6),
            color: props.colors.subText,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('productDetail.discription')}
      </Text>
      <FlatList
        data={productDetails}
        style={{flexDirection: viewRTLStyle}}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item, index}) => (
          <View>
            <Text
              style={[
                styles.name,
                {color: props.colors.text, textAlign: textRTLStyle},
              ]}>
              {t(item.name)}
            </Text>
            <Text
              style={[
                styles.discription,
                {color: props.colors.subText, textAlign: textRTLStyle},
              ]}>
              {t(item.content)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
