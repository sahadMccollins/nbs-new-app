import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { windowHeight } from '@theme/appConstant';
import styles from './styles';
import appColors from '@theme/appColors';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { ActiveHome } from '../../assets/icons/activeHome';
import { Home, Category, Cart, Profile, Wishlist } from '@utils/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default tabComponents = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { viewRTLStyle } = useValues();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.mainView,
        { flexDirection: viewRTLStyle, backgroundColor: colors.card, height: windowHeight(50) + insets.bottom, },
        // {backgroundColor: "red"}
      ]}>
      {state.routes.map((route, index, key) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;
        const onPress = () => {
          navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity
            key={key}
            activeOpacity={1}
            onPress={onPress}
            style={styles.button}>
            <View
              style={{
                marginTop: isFocused ? windowHeight(4) : windowHeight(4),
              }}>
              {icon({
                tintColor: isFocused ? appColors.primary : colors.text,
              })}
            </View>
            <Text
              style={[
                styles.label,
                isFocused ? { color: appColors.primary } : { color: colors.text },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
