import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Data from '@utils/json';
import styles from './style';
import {useValues} from '@App';

export default category = props => {
  const category = Data.category;
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <ScrollView
      horizontal
      contentContainerStyle={[styles.scrollView, {flexDirection: viewRTLStyle}]}
      showsHorizontalScrollIndicator={false}>
      {category.map(
        (item, key) =>
          key != 0 && (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CategoryStackScreen');
              }}
              activeOpacity={1}
              style={styles.categoryView}
              key={key}>
              <View style={styles.imageView}>
                <Image source={item.image} style={styles.categoryImg} />
              </View>
              <Text style={[styles.nameView, {color: props.colors.text}]}>
                {props.t(item.name)}
              </Text>
            </TouchableOpacity>
          ),
      )}
    </ScrollView>
  );
};
