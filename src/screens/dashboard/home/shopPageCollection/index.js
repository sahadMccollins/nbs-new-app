// import React, { useState, useEffect, useCallback } from 'react';
// import { ScrollView, View, ActivityIndicator, FlatList, Text } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import { windowHeight, windowWidth } from '@theme/appConstant';
// import SearchBar from '@commonComponents/searchBar';
// import { Product } from '@commonComponents';
// import Categorys from './categorys';
// import Filter from './filter';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { fetchGraphQL } from '../../../../utils/fetchGraphql';

// /** ------------------------------------------------------------------
//  * NETWORK – GraphQL helper
//  * ------------------------------------------------------------------*/
// const fetchCollectionTitle = async (collectionId) => {
//   const query = `
//   {
//     collection(id: "${collectionId}") {
//       title
//     }
//   }`;

//   try {
//     const res = await fetchGraphQL(query);
//     return res.data.collection.title;
//   } catch (err) {
//     console.error('Failed to fetch collection title:', err);
//     return null;
//   }
// };

// const fetchProductsFromCollection = async (
//   collectionId,
//   cursor,
//   sortKey,
//   reverse = false,
//   selectedTypes,
//   selectedBrands,
// ) => {
//   const sortParam = reverse ? `, sortKey: ${sortKey}, reverse: true` : `, sortKey: ${sortKey}`;
//   let filterQuery = '';

//   if (selectedTypes && selectedTypes.length > 0) {
//     const types = selectedTypes.map(t => `product_type:'${t}'`).join(' OR ');
//     filterQuery += `${types}`;
//   }

//   if (selectedBrands && selectedBrands.length > 0) {
//     const brands = selectedBrands.map(v => `vendor:'${v}'`).join(' OR ');
//     filterQuery += ` ${brands}`;
//   }

//   const queryParam = filterQuery ? `, query: "${filterQuery}"` : '';

//   const query = `
//   {
//     collection(id: "${collectionId}") {
//       products(first: 20${cursor ? `, after: \"${cursor}\"` : ''}${sortParam}${queryParam}) {
//         pageInfo { hasNextPage }
//         edges {
//           cursor
//           node {
//             id
//             title
//             description
//             tags
//             productType
//             vendor
//             availableForSale
//             priceRange { minVariantPrice { amount } }
//             compareAtPriceRange { maxVariantPrice { amount } }
//             images(first: 1) { edges { node { transformedSrc } } }
//             variants(first: 1) { edges { node { 
//               id
//               availableForSale
//             } } }
//           }
//         }
//       }
//     }
//   }`;

//   try {
//     const res = await fetchGraphQL(query);
//     console.log("res", res);
//     const edges = res.data.collection.products.edges;
//     const hasNextPage = res.data.collection.products.pageInfo.hasNextPage;

//     const products = edges.map(edge => ({
//       id: edge.node.id,
//       title: edge.node.title,
//       description: edge.node.description,
//       tags: edge.node.tags,
//       productType: edge.node.productType,
//       vendor: edge.node.vendor,
//       price: edge.node.priceRange.minVariantPrice.amount,
//       oldPrice: edge.node.compareAtPriceRange.maxVariantPrice.amount,
//       image: edge.node.images.edges[0]?.node.transformedSrc,
//       merchandiseId: edge.node.variants.edges[0]?.node.id,
//       cursor: edge.cursor,
//       available: edge.node.availableForSale,
//       productTags: edge.node.tags,
//     }));

//     return { products, hasNextPage, endCursor: edges.at(-1)?.cursor ?? null };
//   } catch (err) {
//     console.error('Failed to fetch products:', err);
//     return { products: [], hasNextPage: false, endCursor: null };
//   }
// };


// /** ------------------------------------------------------------------
//  * COMPONENT
//  * ------------------------------------------------------------------*/
// export default function ShopPageCollection({ navigation, route }) {
//   const colors = useTheme();
//   const { t } = useTranslation();
//   const [modalVisible, setModalVisible] = useState(false);

//   // Get collectionId and sort params from route
//   const collectionId = route?.params?.collectionId;
//   const routeSortKey = route?.params?.sortKey || 'TITLE';
//   const routeReverse = route?.params?.reverse ?? false;

//   // Collection title state
//   const [collectionTitle, setCollectionTitle] = useState(null);

//   // Product fetching state
//   const [loading, setLoading] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [hasNextPage, setHasNextPage] = useState(false);
//   const [endCursor, setEndCursor] = useState(null);

//   // Filter state
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [appliedTypes, setAppliedTypes] = useState([]);
//   const [appliedBrands, setAppliedBrands] = useState([]);

//   // Sort state - initialize from route params
//   const [sort, setSort] = useState({
//     sortKey: routeSortKey,
//     reverse: routeReverse,
//   });

//   // Fetch collection title when collectionId changes
//   useEffect(() => {
//     if (!collectionId) return;

//     const getTitle = async () => {
//       const title = await fetchCollectionTitle(collectionId);
//       setCollectionTitle(title);
//     };

//     getTitle();
//   }, [collectionId]);

//   // Reset filters and products when collection changes
//   useEffect(() => {
//     setProducts([]);
//     setEndCursor(null);
//     setHasNextPage(false);
//     setSelectedTypes([]);
//     setSelectedBrands([]);
//     setAppliedTypes([]);
//     setAppliedBrands([]);
//     setSort({
//       sortKey: routeSortKey,
//       reverse: routeReverse,
//     });
//   }, [collectionId, routeSortKey, routeReverse]);

//   // Fetch products on filter/sort change
//   useEffect(() => {
//     if (!collectionId) return;

//     const loadProducts = async () => {
//       setLoading(true);
//       const res = await fetchProductsFromCollection(
//         collectionId,
//         undefined,
//         sort.sortKey,
//         sort.reverse,
//         appliedTypes,
//         appliedBrands
//       );
//       setProducts(res.products);
//       setHasNextPage(res.hasNextPage);
//       setEndCursor(res.endCursor);
//       setLoading(false);
//     };

//     loadProducts();
//   }, [collectionId, sort, appliedTypes, appliedBrands]);

//   // Load more products for pagination
//   const loadMoreProducts = useCallback(async () => {
//     if (!hasNextPage || loadingMore || !collectionId) return;
//     setLoadingMore(true);
//     const res = await fetchProductsFromCollection(
//       collectionId,
//       endCursor,
//       sort.sortKey,
//       sort.reverse,
//       appliedTypes,
//       appliedBrands
//     );
//     setProducts(prev => [...prev, ...res.products]);
//     setHasNextPage(res.hasNextPage);
//     setEndCursor(res.endCursor);
//     setLoadingMore(false);
//   }, [collectionId, hasNextPage, loadingMore, endCursor, sort.sortKey, sort.reverse, appliedTypes, appliedBrands]);

//   const renderFooter = () => {
//     if (!loadingMore) return null;
//     return (
//       <View style={{ paddingVertical: 24 }}>
//         <ActivityIndicator size="large" color={colors.primary} />
//       </View>
//     );
//   };

//   const onFilterPress = () => {
//     setModalVisible(!modalVisible);
//   };

//   const handleShowResults = () => {
//     setAppliedTypes(selectedTypes);
//     setAppliedBrands(selectedBrands);
//     setModalVisible(false);
//   };

//   const toggleCheckbox = (item, type) => {
//     if (type === 'product') {
//       setSelectedTypes(prev =>
//         prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
//       );
//     } else {
//       setSelectedBrands(prev =>
//         prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
//       );
//     }
//   };

//   const toggleSortKey = (value, reverse = false) => {
//     setSort({ sortKey: value, reverse });
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Header
//         text={collectionTitle || t('paymentCard.allCollection')}
//         showText
//         showIcon
//         showSearchIcon
//         subText={t('shopPage.numProducts')}
//         navigation={navigation}
//       />

//       {loading ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator size="large" color={colors.primary} />
//         </View>
//       ) : (
//         <View style={{ flex: 1 }}>
//           <View style={{ marginTop: windowHeight(3) }} />

//           {!loading && products.length === 0 ? (
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 paddingHorizontal: 20,
//               }}
//             >
//               <Text style={{ fontSize: 16, color: colors.text, textAlign: 'center', fontWeight: "800", marginBottom: 8, textTransform: "uppercase" }}>
//                 {t('shopPage.emptyCollection')}
//               </Text>
//               <Text style={{ fontSize: 14, color: colors.text, textAlign: 'center' }}>
//                 {t('shopPage.emptyCollectionDesc')}
//               </Text>
//             </View>
//           ) : (
//             <View style={{
//               flex: 1,
//               width: '100%',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//               <FlatList
//                 numColumns={2}
//                 columnWrapperStyle={{
//                   justifyContent: 'space-between',
//                   marginHorizontal: windowWidth(16),
//                   marginTop: windowHeight(20),
//                 }}
//                 data={products}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                   <Product
//                     product={item}
//                     t={t}
//                     disc
//                     width={"50%"}
//                     navigation={navigation}
//                   />
//                 )}
//                 onEndReached={loadMoreProducts}
//                 onEndReachedThreshold={0.5}
//                 ListFooterComponent={renderFooter}
//                 scrollEventThrottle={16}
//               />
//             </View>
//           )}
//         </View>
//       )}

//       <Filter
//         t={t}
//         modalVisible={modalVisible}
//         setModalVisible={setModalVisible}
//         selectedTypes={selectedTypes}
//         selectedBrands={selectedBrands}
//         onToggleCheckbox={toggleCheckbox}
//         onShowResults={handleShowResults}
//         onSortChange={toggleSortKey}
//         currentSort={sort}
//       />
//     </SafeAreaView>
//   );
// }




import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import SearchBar from '@commonComponents/searchBar';
import { Product } from '@commonComponents';
import { CommonModal, SortBy } from '@otherComponent';
import Filter from './filter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchGraphQL } from '../../../../utils/fetchGraphql';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';

/** ------------------------------------------------------------------
 * NETWORK – GraphQL helper
 * ------------------------------------------------------------------*/
const fetchCollectionTitle = async (collectionId) => {
  const query = `
  {
    collection(id: "${collectionId}") {
      title
    }
  }`;

  try {
    const res = await fetchGraphQL(query);
    return res.data.collection.title;
  } catch (err) {
    console.error('Failed to fetch collection title:', err);
    return null;
  }
};

const fetchProductsFromCollection = async (
  collectionId,
  cursor,
  sortKey,
  reverse = false,
  selectedTypes,
  selectedBrands,
) => {
  const sortParam = reverse ? `, sortKey: ${sortKey}, reverse: true` : `, sortKey: ${sortKey}`;
  let filterQuery = '';

  if (selectedTypes && selectedTypes.length > 0) {
    const types = selectedTypes.map(t => `product_type:'${t}'`).join(' OR ');
    filterQuery += `${types}`;
  }

  if (selectedBrands && selectedBrands.length > 0) {
    const brands = selectedBrands.map(v => `vendor:'${v}'`).join(' OR ');
    filterQuery += ` ${brands}`;
  }

  const queryParam = filterQuery ? `, query: "${filterQuery}"` : '';

  const query = `
  {
    collection(id: "${collectionId}") {
      products(first: 20${cursor ? `, after: \"${cursor}\"` : ''}${sortParam}${queryParam}) {
        pageInfo { hasNextPage }
        edges {
          cursor
          node {
            id
            title
            description
            tags
            productType
            vendor
            availableForSale
            priceRange { minVariantPrice { amount } }
            compareAtPriceRange { maxVariantPrice { amount } }
            images(first: 1) { edges { node { transformedSrc } } }
            variants(first: 1) { edges { node { 
              id
              availableForSale
            } } }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetchGraphQL(query);
    const edges = res.data.collection.products.edges;
    const hasNextPage = res.data.collection.products.pageInfo.hasNextPage;

    const products = edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.title,
      description: edge.node.description,
      tags: edge.node.tags,
      productType: edge.node.productType,
      vendor: edge.node.vendor,
      price: edge.node.priceRange.minVariantPrice.amount,
      oldPrice: edge.node.compareAtPriceRange.maxVariantPrice.amount,
      image: edge.node.images.edges[0]?.node.transformedSrc,
      merchandiseId: edge.node.variants.edges[0]?.node.id,
      cursor: edge.cursor,
      available: edge.node.availableForSale,
      productTags: edge.node.tags,
    }));

    return { products, hasNextPage, endCursor: edges.at(-1)?.cursor ?? null };
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return { products: [], hasNextPage: false, endCursor: null };
  }
};

const fetchProductTypesFromShopify = async () => {

  const query = `
    query {
        productTypes(first: 100) {
            nodes
        }   
    }`;

  try {
    const res = await fetchGraphQL(query);
    const types = res.data.productTypes.nodes;
    return types;
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return null;
  }
};


/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
export default function ShopPageCollection({ navigation, route }) {
  const colors = useTheme();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Get collectionId and sort params from route
  const collectionId = route?.params?.collectionId;
  const routeSortKey = route?.params?.sortKey || 'TITLE';
  const routeReverse = route?.params?.reverse ?? false;

  // Collection title state
  const [collectionTitle, setCollectionTitle] = useState(null);

  // Product fetching state
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsTypes, setProductsTypes] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  // Filter state
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [appliedTypes, setAppliedTypes] = useState([]);
  const [appliedBrands, setAppliedBrands] = useState([]);

  // Sort state - initialize from route params
  const [sort, setSort] = useState({
    sortKey: routeSortKey,
    reverse: routeReverse,
  });

  const visibleModal = () => {
    setShowModal(!showModal);
  };

  // Fetch collection title when collectionId changes
  useEffect(() => {
    if (!collectionId) return;

    const getTitle = async () => {
      const title = await fetchCollectionTitle(collectionId);
      setCollectionTitle(title);
    };

    getTitle();
  }, [collectionId]);

  // Reset filters and products when collection changes
  useEffect(() => {
    setProducts([]);
    setEndCursor(null);
    setHasNextPage(false);
    setSelectedTypes([]);
    setSelectedBrands([]);
    setAppliedTypes([]);
    setAppliedBrands([]);
    setSort({
      sortKey: routeSortKey,
      reverse: routeReverse,
    });
  }, [collectionId, routeSortKey, routeReverse]);

  // Fetch products on filter/sort change
  useEffect(() => {
    if (!collectionId) return;

    const loadProducts = async () => {
      setLoading(true);
      const res = await fetchProductsFromCollection(
        collectionId,
        undefined,
        sort.sortKey,
        sort.reverse,
        appliedTypes,
        appliedBrands
      );
      setProducts(res.products);
      setHasNextPage(res.hasNextPage);
      setEndCursor(res.endCursor);
      setLoading(false);
    };

    loadProducts();
  }, [collectionId, sort, appliedTypes, appliedBrands]);

  useEffect(() => {
    // Fetch product types for filter options
    const loadProductTypes = async () => {
      const res = await fetchProductTypesFromShopify();
      setProductsTypes(res);
    };

    loadProductTypes();
  }, []);

  // Load more products for pagination
  const loadMoreProducts = useCallback(async () => {
    if (!hasNextPage || loadingMore || !collectionId) return;
    setLoadingMore(true);
    const res = await fetchProductsFromCollection(
      collectionId,
      endCursor,
      sort.sortKey,
      sort.reverse,
      appliedTypes,
      appliedBrands
    );
    setProducts(prev => [...prev, ...res.products]);
    setHasNextPage(res.hasNextPage);
    setEndCursor(res.endCursor);
    setLoadingMore(false);
  }, [collectionId, hasNextPage, loadingMore, endCursor, sort.sortKey, sort.reverse, appliedTypes, appliedBrands]);

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ paddingVertical: 24 }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };

  const onFilterPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleShowResults = () => {
    setAppliedTypes(selectedTypes);
    setAppliedBrands(selectedBrands);
    setModalVisible(false);
  };

  const toggleCheckbox = (item, type) => {
    if (type === 'product') {
      setSelectedTypes(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    } else {
      setSelectedBrands(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    }
  };

  const toggleSortKey = (value, reverse = false) => {
    setSort({ sortKey: value, reverse });
    visibleModal();
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedBrands([]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={collectionTitle || t('paymentCard.allCollection')}
        showText
        showIcon
        showSearchIcon
        subText={t('shopPage.numProducts')}
        navigation={navigation}
      />

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.halfBox} onPress={onFilterPress}>
          <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/filter.png?v=1767333261https://cdn.shopify.com/s/files/1/0760/7743/3044/files/filter.png?v=1767333261" }} style={[styles.icon]} />
          <Text style={[styles.label]}>{t("filters.title")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.halfBox, styles.noBorder]} onPress={visibleModal}>
          <Text style={[styles.label]}>{t("sortBy.title")}</Text>
          <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/arrow-down.png?v=1767333261" }} style={[styles.icon]} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: windowHeight(3) }} />

          {!loading && products.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontSize: 16, color: colors.text, textAlign: 'center', fontWeight: "800", marginBottom: 8, textTransform: "uppercase" }}>
                {t('shopPage.emptyCollection')}
              </Text>
              <Text style={{ fontSize: 14, color: colors.text, textAlign: 'center' }}>
                {t('shopPage.emptyCollectionDesc')}
              </Text>
            </View>
          ) : (
            <FlatList
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                marginHorizontal: windowWidth(16),
                marginTop: windowHeight(20),
                gap: 8
              }}
              data={products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Product
                  product={item}
                  t={t}
                  disc
                  width={"50%"}
                  navigation={navigation}
                />
              )}
              onEndReached={loadMoreProducts}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              scrollEventThrottle={16}
            />
          )}
        </View>
      )}

      <Filter
        t={t}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedTypes={selectedTypes}
        selectedBrands={selectedBrands}
        onToggleCheckbox={toggleCheckbox}
        onShowResults={handleShowResults}
        productTypes={productsTypes}
        resetFilters={resetFilters}
      />

      <CommonModal
        modal={
          <SortBy
            onPress={visibleModal}
            navigation={navigation}
            t={t}
            from="shopPageCollection"
            toggleSortKey={toggleSortKey}
            currentSort={sort}
          />
        }
        showModal={showModal}
        visibleModal={visibleModal}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  filterSortContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginTop: windowHeight(3),
  },
  halfBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  label: {
    fontSize: fontSizes.FONT18,
    // fontWeight: '500',
  },
});