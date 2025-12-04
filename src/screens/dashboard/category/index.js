import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import Data from '@utils/json';
import styles from './style';
import { windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export function category({ navigation }) {
  const { t } = useTranslation();
  const category = Data.category;
  const { colors } = useTheme();
  const { isDark } = useValues();

  const goToScreen = () => {
    navigation.navigate('cart');
  };

  return (
    <SafeAreaView>
      <Header
        showIcon
        text={t('category.categories')}
        navigation={navigation}
        onCartPress={goToScreen}
        showWishListIcon
      />
      <ScrollView contentContainerStyle={styles.container}>
        {category.map((item, key) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('innerCategory')}
            key={key}
            style={[
              styles.category,
              {
                flexDirection: key % 2 === 0 ? 'row' : 'row-reverse',
                backgroundColor: isDark ? '#232323' : item.color,
                marginTop: key === 0 ? windowHeight(10) : windowHeight(30),
              },
            ]}>
            <View>
              {/* {key != 0 ? (
                <Text style={[styles.categoryName, { color: colors.text }]}>
                  {t(item.name).toUpperCase()}
                </Text>
              ) : (
                <Image source={item.image} style={styles.categoryImage} />
              )} */}
                <Text style={[styles.categoryName, { color: colors.text }]}>
                  {t(item.name).toUpperCase()}
                </Text>
              <Text style={styles.categorySub}>{t(item.categorySubTxt)}</Text>
            </View>
            <Image style={styles.categoryImg} source={item.categoryImg} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}



// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import Data from '@utils/json';
// import styles from './style';
// import { windowHeight } from '@theme/appConstant';
// import { useTheme } from '@react-navigation/native';
// import { useValues } from '@App';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export function category({ navigation }) {
//   const { t } = useTranslation();
//   const category = Data.category;
//   const { colors } = useTheme();
//   const { isDark } = useValues();

//   const goToScreen = () => {
//     navigation.navigate('cart');
//   };

//   return (
//     <SafeAreaView>
//       <Header
//         showIcon
//         text={t('category.categories')}
//         navigation={navigation}
//         onCartPress={goToScreen}
//         showWishListIcon
//       />
//       <ScrollView contentContainerStyle={styles.container}>
//         {category.map((item, key) => (
//           <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => navigation.navigate('innerCategory')}
//             key={key}
//             style={[
//               styles.category,
//               {
//                 flexDirection: key % 2 === 0 ? 'row' : 'row-reverse',
//                 backgroundColor: isDark ? '#232323' : item.color,
//                 marginTop: key === 0 ? windowHeight(10) : windowHeight(30),
//               },
//             ]}>

//             {/* --- Text Section (70%) --- */}
//             <View style={{ flex: 0.5, backgroundColor: "red" }}>
//               {/* {key != 0 ? (
//                 <Text style={[styles.categoryName, { color: colors.text }]}>
//                   {t(item.name).toUpperCase()}
//                 </Text>
//               ) : (
//                 <Image source={item.image} style={styles.categoryImage} />
//               )} */}

//               <Text style={[styles.categoryName, { color: colors.text }]}>
//                 {t(item.name).toUpperCase()}
//               </Text>

//               <Text
//                 style={styles.categorySub}
//                 numberOfLines={2}
//                 ellipsizeMode="tail">
//                 {t(item.categorySubTxt)}
//               </Text>
//             </View>

//             {/* --- Image Section (30%) --- */}
//             <View style={{ flex: 0.3, alignItems: 'center', backgroundColor: "black" }}>
//               <Image style={styles.categoryImg} source={item.categoryImg} />
//             </View>

//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
