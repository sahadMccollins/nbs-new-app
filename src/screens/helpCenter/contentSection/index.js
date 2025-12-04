import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  UIManager,
  FlatList,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';
import Data from '@utils/json';
import {SideArrow} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '@App';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function contentSection(props) {
  const {viewRTLStyle, imageRTLStyle, textRTLStyle} = useValues();
  const {t, colors} = props;
  const quetions = Data.helpCenter;
  const [selectedQuetions, setSelectedQuetions] = useState(null);
  const onSelect = val => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    var value;
    val === selectedQuetions ? (value = null) : (value = val);
    setSelectedQuetions(value);
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 5,
        }}
        data={quetions}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                onSelect(index);
              }}
              style={[
                styles.mainView,
                {backgroundColor: colors.product, flexDirection: viewRTLStyle},
              ]}>
              <Text style={[styles.name, {color: colors.text}]}>
                {t(item.quetion)}
              </Text>
              <View style={{transform: [{scaleX: imageRTLStyle}]}}>
                <SideArrow
                  color={colors.subText}
                  height={windowWidth(16)}
                  width={windowWidth(16)}
                />
              </View>
            </TouchableOpacity>
            {index == selectedQuetions && selectedQuetions == 0 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 1 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 2 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 3 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 4 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 5 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
            {index == selectedQuetions && selectedQuetions == 6 && (
              <Text
                style={[
                  styles.content,
                  {color: colors.subText, textAlign: textRTLStyle},
                ]}>
                {t('aboutUs.content')}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
}
