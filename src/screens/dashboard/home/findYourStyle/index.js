// import React, {useState, useEffect} from 'react';
// import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
// import appColors from '@theme/appColors';
// import Data from '@utils/json';
// import styles from './style';
// import {Product} from '@commonComponents';
// import {useValues} from '@App';

// export default findYourStyle = props => {
//   const findYourStyleFilter = Data.findYourStyleFilter;
//   const [findYourStyle, setFindYourStyle] = useState([]);
//   const [select, setSelect] = useState(0);
//   const {viewRTLStyle, textRTLStyle} = useValues();

//   useEffect(() => {
//     selectValue(0);
//   }, []);

//   const selectValue = id => {
//     setSelect(id);
//     var findYourStyle = Data.findYourStyle;
//     var arr = [];
//     findYourStyle.map(item => {
//       if (item.id == id + 1) {
//         arr.push(item);
//       }
//     });
//     setFindYourStyle(arr);
//   };

//   return (
//     <View>
//       <View style={styles.headerView}>
//         <Text
//           style={[
//             styles.style,
//             {color: props.colors.text, textAlign: textRTLStyle},
//           ]}>
//           {props.t('homePage.ourProducts')}
//         </Text>
//         <Text style={[styles.superSale, {textAlign: textRTLStyle}]}>
//           {props.t('homePage.ourProductsDesc')}
//         </Text>
//       </View>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={[
//           styles.scrollView,
//           {flexDirection: viewRTLStyle},
//         ]}>
//         {findYourStyleFilter.map((item, key) => (
//           <TouchableOpacity
//             key={key}
//             activeOpacity={0.8}
//             onPress={() => selectValue(key)}
//             style={[
//               styles.filterView,
//               {
//                 backgroundColor:
//                   key === select
//                     ? appColors.primary
//                     : props.colors.styleBackground,
//               },
//             ]}>
//             <Text
//               style={[
//                 styles.title,
//                 {color: key === select ? appColors.white : props.colors.text},
//               ]}>
//               {props.t(item.title)}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <FlatList
//         numColumns={2}
//         columnWrapperStyle={styles.column}
//         data={findYourStyle}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <Product
//             image={item.image}
//             title={item.title}
//             discountPrice={item.discountPrice}
//             price={item.price}
//             discount={item.discount}
//             t={props.t}
//             disc
//             navigation={props.navigation}
//           />
//         )}
//       />
//     </View>
//   );
// };



import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import appColors from '@theme/appColors';
import styles from './style';
import { Product } from '@commonComponents';
import { useValues } from '@App';

const COLLECTION_IDS = [
  "gid://shopify/Collection/443266466004",
  "gid://shopify/Collection/443234746580",
  "gid://shopify/Collection/443234615508",
  "gid://shopify/Collection/443235369172"
];

const COLLECTION_LABELS = [
  "ourProductsArr.generators",
  "ourProductsArr.waterpumps",
  "ourProductsArr.powerstations",
  "ourProductsArr.batteries",
];

export default findYourStyle = props => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [select, setSelect] = useState(0);
  const { viewRTLStyle, textRTLStyle } = useValues();
  const { collections } = props;

  const collectionFilters = useMemo(() => {
    return COLLECTION_LABELS.map((label, index) => ({
      id: index,
      title: label,
      collectionId: COLLECTION_IDS[index]
    }));
  }, []);

  const selectValue = (id) => {
    setSelect(id);
    const selectedCollection = collections.find(
      col => col.id === COLLECTION_IDS[id]
    );
    setSelectedProducts(selectedCollection?.products || []);
  };

  useEffect(() => {
    if (collections.length > 0) {
      selectValue(0);
    }
  }, [collections]);

  return (
    <View>
      <View style={styles.headerView}>
        <Text
          style={[
            styles.style,
            { color: props.colors.text, textAlign: textRTLStyle },
          ]}>
          {props.t('homePage.ourProducts')}
        </Text>
        <Text style={[styles.superSale, { textAlign: textRTLStyle }]}>
          {props.t('homePage.ourProductsDesc')}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollView,
          // { flexDirection: viewRTLStyle },
        ]}>
        {collectionFilters.map((item, key) => (
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
                { color: key === select ? appColors.white : props.colors.text },
              ]}>
              {props.t(item.title)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <FlatList
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={selectedProducts}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.price}
            price={item.oldPrice}
            discount={item.discount}
            t={props.t}

            disc
            navigation={props.navigation}
          />
        )}
      /> */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={selectedProducts}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Product
            product={item}
            t={props.t}
            disc
            width={"50%"}
            navigation={props.navigation}
          />
        )}
      />
      <Text
        style={styles.seeAll}
        onPress={() => {
          props.navigation.navigate('ShopPageCollection', {
            collectionId: COLLECTION_IDS[select],
          });
        }}
      >
        {props.t('homePage.seeAll')}
      </Text>

    </View>
  );
};