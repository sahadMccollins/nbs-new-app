import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomRangeSlider from '@otherComponent/customRangeSlider';
import {windowHeight} from '@theme/appConstant';

export default function rangeSlider(props) {
  const {colors} = props;
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 500;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  return (
    <GestureHandlerRootView>
      <View style={styles.content}>
        <CustomRangeSlider
          sliderWidth={340}
          min={MIN_DEFAULT}
          max={MAX_DEFAULT}
          step={10}
          onValueChange={range => {
            setMinValue(range.min);
            setMaxValue(range.max);
          }}
          colors={colors}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: windowHeight(50),
  },
});
