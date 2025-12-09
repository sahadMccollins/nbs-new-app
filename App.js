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
import { logo } from "@utils/images/images";
import { CustomerProvider } from './src/context/customerContext';
import { CollectionsProvider } from './src/context/collectionContext';
import { CartProvider } from './src/context/cartContext';
import { WishlistProvider } from './src/context/wishlistContext';


LogBox.ignoreAllLogs();
export const CommonContext = createContext();

function App() {
  const [isRTL, setIsRTL] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currSymbol, setCurrSymbol] = useState('AED ');
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
      <CustomerProvider>
        <CartProvider>
          <WishlistProvider>
            <CollectionsProvider>
              <Navigator />
            </CollectionsProvider>
          </WishlistProvider>
        </CartProvider>
      </CustomerProvider>
    </CommonContext.Provider>
  );
}

export const useValues = () => useContext(CommonContext);
export default App;
