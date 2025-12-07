// import React, { useEffect, useState } from 'react';
// import { View, Image } from 'react-native';
// import Data from '@utils/json';
// import Swiper from 'react-native-swiper';
// import styles from './styles';

// export default slider = props => {
//   const { selectedColor, colors, images } = props;

//   return (
//     <View style={styles.mainView}>
//       <Swiper
//         paginationStyle={styles.pagination}
//         dot={
//           <View style={[styles.dot, { backgroundColor: colors.brandsBg }]} />
//         }
//         activeDot={
//           <View
//             style={[styles.activeDot, { backgroundColor: colors.brandsBg }]}
//           />
//         }
//         dotColor={'black'}
//         activeDotColor={'gray'}
//         key={images?.length}
//         loop={true}
//         autoplay={true}
//         autoplayTimeout={5}
//         scrollViewStyle={styles.scrollView}
//         showsPagination
//         removeClippedSubviews={false}
//         containerStyle={styles.container}>
//         {images?.map((item, key) => (
//           <View key={key}>
//             <Image
//               source={{ uri: item.src }}
//               style={[
//                 styles.img,
//                 { resizeMode: selectedColor == 2 ? 'contain' : 'cover' },
//               ]}
//             />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };


import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default function Slider(props) {
  const { selectedColor, colors, images } = props;

  // Prevent Swiper from receiving undefined children
  const productImages = Array.isArray(images) ? images : [];

  if (productImages.length === 0) {
    return (
      <View style={styles.mainView}>
        <Image
          source={{ uri: 'https://via.placeholder.com/500x500?text=No+Image' }}
          style={styles.img}
        />
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <Swiper
        paginationStyle={styles.pagination}
        dot={<View style={[styles.dot, { backgroundColor: colors.brandsBg }]} />}
        activeDot={
          <View style={[styles.activeDot, { backgroundColor: colors.brandsBg }]} />
        }
        key={productImages.length}
        loop
        autoplay
        autoplayTimeout={5}
        showsPagination
        removeClippedSubviews={false}
        containerStyle={styles.container}
      >
        {productImages.map((item, key) => (
          <View key={key}>
            <Image
              source={{ uri: item.src }}
              style={[
                styles.img,
                { resizeMode: selectedColor === 2 ? 'contain' : 'cover' },
              ]}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
