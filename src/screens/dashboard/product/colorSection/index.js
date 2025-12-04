import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import Check from '../../../../assets/icons/check';
import Animated, {StretchInX} from 'react-native-reanimated';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function colorSection(props) {
  const {t, colors, selectColors, title, numColumns, marginVertical} = props;
  const [selectedcolor, setSelectedColor] = useState();
  const {viewRTLStyle, textRTLStyle, isRTL} = useValues();

  const setSelectedIndex = val => {
    selectColors.map(item => {
      if (val == item.id) {
        setSelectedColor(val);
      }
    });
  };

  return (
    <View style={styles.container}>
      {title && (
        <Text
          style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
          {t('product.selectColor')}:
        </Text>
      )}
      <FlatList
        data={selectColors}
        style={{flexDirection: viewRTLStyle}}
        numColumns={numColumns ? numColumns : 4}
        ItemSeparatorComponent={() => <View style={styles.Separator} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.circle,
              {
                backgroundColor: item.color,
                marginVertical: marginVertical
                  ? marginVertical
                  : windowHeight(0),
              },
            ]}
            onPress={() => setSelectedIndex(index)}>
            {item.id == selectedcolor ? (
              <Animated.View entering={StretchInX} style={styles.checkIcon}>
                <Check
                  checked={item.selected}
                  color={appColors.black}
                  height={'18'}
                  width={'20'}
                />
              </Animated.View>
            ) : (
              <View></View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
