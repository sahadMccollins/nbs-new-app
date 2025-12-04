import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorSection from '../../../../product/colorSection';
import RangeSlider from '../rangeSlider';
import Sizes from '../sizes';
import Data from '@utils/json';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import Brands from '../brands';
import {useValues} from '@App';

export default function filterOptions(props) {
  const {t, colors} = props;
  const Occasions = Data.Occasions;
  const {textRTLStyle} = useValues();

  // const [selectedColor, setSelectedColor] = useState(0);
  // const setColor = val => {
  //   setSelectedColor(val);
  // };
  return (
    <View>
      <RangeSlider colors={colors} />
      <View style={{height: windowHeight(18)}}></View>
      <Text
        style={[styles.title, {color: colors.text, textAlign: textRTLStyle}]}>
        {t('shopPage.Occasion')}
      </Text>
      <Brands t={t} brands={Occasions} />
      <View style={styles.blankView}></View>
      <Text style={[styles.title, {color: colors.text}]}>
        {t('shopPage.colors')}
      </Text>
      <ColorSection
        t={t}
        colors={colors}
        selectColors={Data.Colors}
        // setColor={setColor}
        numColumns={6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(4),
    marginVertical: windowHeight(8),
  },
  blankView: {
    height: windowHeight(12),
  },
});
