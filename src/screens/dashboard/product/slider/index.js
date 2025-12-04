import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import Data from '@utils/json';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default slider = props => {
  const [products, setProducts] = useState([]);
  const {selectedColor,colors} = props;
  useEffect(() => {
    var product = Data.productSection;
    var arr = [];
    product.map(item => {
      if (item.id == selectedColor) {
        arr.push(item);
      }
    });
    setProducts(arr);
  }, [selectedColor]);
  return (
    <View style={styles.mainView}>
      <Swiper
        paginationStyle={styles.pagination}
        dot={
          <View style={[styles.dot, {backgroundColor:colors.brandsBg}]} />
        }
        activeDot={
          <View
            style={[styles.activeDot, {backgroundColor:colors.brandsBg}]}
          />
        }
        dotColor={'black'}
        activeDotColor={'gray'}
        key={products.length}
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        scrollViewStyle={styles.scrollView}
        showsPagination
        removeClippedSubviews={false}
        containerStyle={styles.container}>
        {products.map((item, key) => (
          <View key={key}>
            <Image
              source={item.image}
              style={[
                styles.img,
                {resizeMode: selectedColor == 2 ? 'contain' : 'cover'},
              ]}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
