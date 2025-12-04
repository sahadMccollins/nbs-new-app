/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.js"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Animated, LogBox, Text, View } from 'react-native';
import Navigator from './src/navigator';
import { getValue } from './src/utils/localStorage';
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from './src/style/rtlStyle';
import {logo} from "@utils/images/images";

LogBox.ignoreAllLogs();
export const CommonContext = createContext();

function App() {
  const [isRTL, setIsRTL] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currSymbol, setCurrSymbol] = useState('$');
  const [currValue, setCurrValue] = useState(1);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const contextValues = {
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    textRTLStyle: textRTLStyle(isRTL),
    viewRTLStyle: viewRTLStyle(isRTL),
    imageRTLStyle: imageRTLStyle(isRTL),
    viewSelfRTLStyle: viewSelfRTLStyle(isRTL),
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    isFirstLaunch,
    setIsFirstLaunch,
  };

  console.log('IS FIRST TIME', isFirstLaunch);

  useEffect(() => {
    const getDarkModeval = async () => {
      getValue('darkMode')
        .then(res => JSON.parse(res))
        .then(val => {
          if (val !== null) {
            setIsDark(val);
          }
        });
    };
    getDarkModeval();
  }, []);

  return (
    <CommonContext.Provider value={contextValues}>
      <Navigator />
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: "black" }}>Multikart is an eCommerce mobile app with full integration with your existing Shopify website. It offers app developers a fast and expressive way to build native apps on both iOS and Android using a single codebase. This app comes with around 30+ screens and will work on both Android and iOS platforms. Multikart has some additional features like shimmer effect, multi-currency, multi-language, RTL support. This UI enables you to develop beautiful and feature-rich apps. You can add any part of the code. You like and apply it to your code. Our code is well organized with all folders, file names, class names variables and functions under 70 lines. This code is well named to make it easy to reuse and customize. This app has features like light and dark mode.</Text>
      </View> */}
      {/* <Animated.Image
        source={logo}
        style={{width: 100, height: 100, resizeMode: 'contain'}}
      /> */}
    </CommonContext.Provider>
  );
}

export const useValues = () => useContext(CommonContext);
export default App;
