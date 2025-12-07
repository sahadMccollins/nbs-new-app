// import React from 'react';
// import {View, FlatList} from 'react-native';
// import styles from './styles';
// import {Product} from '@commonComponents';

// export default categorys = props => {
//   const {categorys, t} = props;

//   return (
//     <View style={styles.mainContainer}>
//       <FlatList
//         numColumns={2}
//         columnWrapperStyle={styles.column}
//         data={categorys}
//         ItemSeparatorComponent={() => <View style={styles.seperator} />} // ItemSeparatorComponent={styles.seperator}
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
//             width={"50%"}
//             newProduct={item.newProduct}
//             navigation={props.navigation}
//           />
//         )}
//       />
//     </View>
//   );
// };



import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { Product } from '@commonComponents';

export default categorys = props => {
  const { products, t, navigation } = props;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={products}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            title={item.title}
            discountPrice={item.price}
            price={item.oldPrice}
            discount={item.discount}
            t={t}
            disc
            width={"50%"}
            productTags={item.productTags}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};