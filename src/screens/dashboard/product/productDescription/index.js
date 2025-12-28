import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StarRating from '@commonComponents/starRating';
import { Wishlist, WishlistFilled } from '@utils/icons';
import appColors from '@theme/appColors';
import styles from './styles';
import { useValues } from '@App';
import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';

export default productDescription = props => {
  const { t, product, colors } = props;
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();
  const { toggleProduct, isInWishlist } = useShopifyWishlist();

  let featuresArray = [];

  const inWishlist = isInWishlist(product?.id);

  try {
    const rawFeatures = product?.features ?? "[]"; // default to empty array string
    featuresArray = JSON.parse(rawFeatures);
  } catch (error) {
    console.error("Error parsing features JSON:", error);
    featuresArray = [];
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: viewRTLStyle, // 'row' or 'row-reverse'
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingRight: 20
        }} >
        <Text
          style={[
            styles.name,
            { color: props.colors.text, textAlign: textRTLStyle },
          ]}>
          {product?.title}
        </Text>
        {/* <TouchableOpacity
          onPress={() => toggleProduct(product)}
        >
          {inWishlist ? (
            <WishlistFilled color={appColors.primary} />
          ) : (
            <Wishlist color={colors.text} />
          )}
        </TouchableOpacity> */}
      </View>
      {product?.tags?.includes("request-a-qoute") ||
        product?.tags?.includes("request-a-quote") ? (
        <View style={[styles.priceView, { flexDirection: viewRTLStyle }]}>
          <Text style={[styles.discountPrice, { color: props.colors.text }]}>
            {props.t("products.priceOnRequest")}
          </Text>
        </View>
      ) : (
        <View style={[styles.priceView, { flexDirection: viewRTLStyle }]}>
          <Text style={[styles.discountPrice, { color: props.colors.text }]}>
            {currSymbol}{(product?.variants[0]?.price * currValue).toFixed(2)}
          </Text>
          {product?.variants[0]?.oldPrice && product?.variants[0]?.oldPrice > product?.variants[0]?.price && (
            <>
              <Text style={[styles.price, { color: props.colors.subText }]}>
                {currSymbol}{(product?.variants[0]?.oldPrice * currValue).toFixed(2)}
              </Text>
              <Text style={styles.discount}>
                {product?.variants[0]?.oldPrice && product?.variants[0]?.price && product?.variants[0]?.oldPrice > product?.variants[0]?.price
                  ? `(${Math.round(((product?.variants[0]?.oldPrice - product?.variants[0]?.price) / product?.variants[0]?.oldPrice) * 100)}% OFF)`
                  : ''}
              </Text>

            </>
          )}
        </View>
      )}
      <Text style={[styles.text, { textAlign: textRTLStyle }]}>
        {t('product.inclusive')}
      </Text>

      <Text style={[styles.highlightText, { textAlign: textRTLStyle, color: colors.text }]}>
        {t('product.highlights')}
      </Text>

      <FlatList
        data={featuresArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.featureItem}>
            <Text style={styles.bullet}>▸</Text>
            <Text
              style={[
                styles.discription,
                { color: props.colors.subText, textAlign: textRTLStyle },
              ]}>
              {item}
            </Text>
          </View>
        )}
      />
      {/* <Text
        style={[
          styles.content,
          { color: props.colors.subText, textAlign: textRTLStyle },
        ]}>
        {product?.descriptionHtml}
      </Text> */}
      {/* <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <StarRating />
        <Text style={[styles.rating, {color: props.colors.subText}]}>
          {t('product.ratings')}
        </Text>
      </View> */}
    </View>
  );
};


// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from './styles';
// import { useValues } from '@App';

// export default function ProductDescription(props) {
//   const { t, product } = props;
//   const { viewRTLStyle, textRTLStyle, currSymbol, currValue } = useValues();

//   // avoid undefined crashes
//   const variant = product?.variants?.[0];

//   if (!variant) {
//     return (
//       <View style={styles.container}>
//         <Text style={[styles.name, { color: props.colors.text }]}>
//           {product?.title || ""}
//         </Text>
//       </View>
//     );
//   }

//   const price = (variant.price * currValue).toFixed(2);
//   const oldPrice = variant.oldPrice
//     ? (variant.oldPrice * currValue).toFixed(2)
//     : null;

//   const discount =
//     variant.oldPrice && variant.oldPrice > variant.price
//       ? Math.round(((variant.oldPrice - variant.price) / variant.oldPrice) * 100)
//       : null;

//   return (
//     <View style={styles.container}>
//       <Text
//         style={[
//           styles.name,
//           { color: props.colors.text, textAlign: textRTLStyle },
//         ]}
//       >
//         {product?.title}
//       </Text>

//       <View style={[styles.priceView, { flexDirection: viewRTLStyle }]}>
//         <Text style={[styles.discountPrice, { color: props.colors.text }]}>
//           {currSymbol}{price}
//         </Text>

//         {oldPrice && (
//           <>
//             <Text style={[styles.price, { color: props.colors.subText }]}>
//               {currSymbol}{oldPrice}
//             </Text>
//             <Text style={styles.discount}>
//               ({discount}% OFF)
//             </Text>
//           </>
//         )}
//       </View>

//       <Text style={[styles.text, { textAlign: textRTLStyle }]}>
//         {t('product.inclusive')}
//       </Text>

//       <Text
//         style={[
//           styles.content,
//           { color: props.colors.subText, textAlign: textRTLStyle },
//         ]}
//       >
//         {product?.descriptionHtml}
//       </Text>
//     </View>
//   );
// }
