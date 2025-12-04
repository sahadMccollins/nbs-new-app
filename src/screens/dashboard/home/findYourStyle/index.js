import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import appColors from '@theme/appColors';
import Data from '@utils/json';
import styles from './style';
import {Product} from '@commonComponents';
import {useValues} from '@App';

export default findYourStyle = props => {
  const findYourStyleFilter = Data.findYourStyleFilter;
  const [findYourStyle, setFindYourStyle] = useState([]);
  const [select, setSelect] = useState(0);
  const {viewRTLStyle, textRTLStyle} = useValues();

  useEffect(() => {
    selectValue(0);
  }, []);

  const selectValue = id => {
    setSelect(id);
    var findYourStyle = Data.findYourStyle;
    var arr = [];
    findYourStyle.map(item => {
      if (item.id == id + 1) {
        arr.push(item);
      }
    });
    setFindYourStyle(arr);
  };
  
  return (
    <View>
      <View style={styles.headerView}>
        <Text
          style={[
            styles.style,
            {color: props.colors.text, textAlign: textRTLStyle},
          ]}>
          {props.t('homePage.findYourStyle')}
        </Text>
        <Text style={[styles.superSale, {textAlign: textRTLStyle}]}>
          {props.t('homePage.superSummerSale')}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollView,
          {flexDirection: viewRTLStyle},
        ]}>
        {findYourStyleFilter.map((item, key) => (
          <TouchableOpacity
            key={key}
            activeOpacity={0.8}
            onPress={() => selectValue(key)}
            style={[
              styles.filterView,
              {
                backgroundColor:
                  key === select
                    ? appColors.primary
                    : props.colors.styleBackground,
              },
            ]}>
            <Text
              style={[
                styles.title,
                {color: key === select ? appColors.white : props.colors.text},
              ]}>
              {props.t(item.title)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={findYourStyle}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.discountPrice}
            price={item.price}
            discount={item.discount}
            t={props.t}
            disc
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};
