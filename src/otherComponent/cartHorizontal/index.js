import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {useTheme} from '@react-navigation/native';
import {windowHeight} from '@theme/appConstant';
import Price from '../../commonComponents/productHorizontal/withPrice';
import WithWishlist from '../../commonComponents/productHorizontal/withWishlist';
import {Divider} from '@commonComponents';
import {Wishlist} from '@utils/icons';
import AddToCart from '../../commonComponents/productHorizontal/withAddToCart';
import {useValues} from '@App';

export default function CartHorizontal(props) {
  const products = props.products;
  const {
    onPressAddToCart,
    onPressRemove,
    onPressmoveToWishlist,
    containerStyle,
  } = props;
  const {colors} = useTheme();
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <ScrollView
        contentContainerStyle={{paddingBottom: containerStyle}}
        showsVerticalScrollIndicator={false}>
        {products.map((item, key) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('Product')}>
            <View key={key}>
              <View
                style={[
                  styles.dealsView,
                  {
                    backgroundColor: colors.brandsbg,
                    flexDirection: viewRTLStyle,
                  },
                ]}>
                <Image
                  style={[styles.image, props.productStyle]}
                  source={item.image}
                />
                <View style={[styles.txtView, {flexDirection: viewRTLStyle}]}>
                  <View>
                    <Text
                      style={[
                        styles.title,
                        {color: props.colors.text, textAlign: textRTLStyle},
                      ]}>
                      {props.t(item.title)}
                    </Text>
                    {props.showPrice && (
                      <Price
                        brandName={t(item.brandName)}
                        colors={props.colors}
                        discountPrice={t(item.discountPrice)}
                        price={t(item.price)}
                        discount={t(item.discount)}
                      />
                    )}
                    {props.showWishlist && (
                      <WithWishlist
                        colors={props.colors}
                        onPressmoveToWishlist={onPressmoveToWishlist}
                        t={t}
                        icon={
                          <Wishlist
                            height={windowHeight(15)}
                            width={windowHeight(15)}
                          />
                        }
                      />
                    )}
                    {props.showCart && (
                      <AddToCart
                        colors={props.colors}
                        t={t}
                        onPressAddToCart={onPressAddToCart}
                        onPressRemove={onPressRemove}
                      />
                    )}
                  </View>
                </View>
              </View>
              {props.showDivider && <Divider />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
