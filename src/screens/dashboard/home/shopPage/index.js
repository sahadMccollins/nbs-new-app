// import React, {useState} from 'react';
// import { ScrollView, View} from 'react-native';
// import {useTheme} from '@react-navigation/native';
// import {Header} from '@commonComponents';
// import Data from '@utils/json';
// import {useTranslation} from 'react-i18next';
// import {windowHeight} from '@theme/appConstant';
// import SearchBar from '@commonComponents/searchBar';
// import Categorys from './categorys';
// import Filter from './filter';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function shopPage({navigation}) {
//   const colors = useTheme();
//   const {t} = useTranslation();
//   const [modalVisible, setModalVisible] = useState(false);

//   const onFilterPress = () => {
//     setModalVisible(!modalVisible);
//   };
//   const categorys = Data.categorys;

//   return (
//     <SafeAreaView>
//       <Header
//         text={t('paymentCard.allCollection')}
//         showText
//         showIcon
//         notificationIcon
//         showWishListIcon
//         subText={t('shopPage.numProducts')}
//         navigation={navigation}
//       />
//       <ScrollView style={{marginBottom: windowHeight(70)}}>
//         <View style={{marginTop: windowHeight(3)}}></View>
//         <SearchBar
//           t={t}
//           colors={colors}
//           cameraIcon
//           onFilterPress={onFilterPress}
//         />

//         <Categorys categorys={categorys} t={t} navigation={navigation} />
//         <Filter
//           t={t}
//           modalVisible={modalVisible}
//           setModalVisible={setModalVisible}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }




import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { windowHeight } from '@theme/appConstant';
import SearchBar from '@commonComponents/searchBar';
import Categorys from './categorys';
import Filter from './filter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchGraphQL } from '../../../../utils/fetchGraphql';

/** ------------------------------------------------------------------
 * NETWORK – GraphQL helper
 * ------------------------------------------------------------------*/
const fetchProductsFromShopify = async (
  cursor,
  sortKey = 'RELEVANCE',
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
  }`;

  try {
    const res = await fetchGraphQL(query);
    const edges = res.data.products.edges;
    const hasNextPage = res.data.products.pageInfo.hasNextPage;

    const products = edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.title,
      description: edge.node.description,
      tags: edge.node.tags,
      productType: edge.node.productType,
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


/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
export default function ShopPage({ navigation }) {
  const colors = useTheme();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  // Product fetching state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  // Filter state
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [appliedTypes, setAppliedTypes] = useState([]);
  const [appliedBrands, setAppliedBrands] = useState([]);

  // Sort state
  const [sort, setSort] = useState({
    sortKey: 'RELEVANCE',
    reverse: false,
  });

  // Fetch products on filter/sort change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const res = await fetchProductsFromShopify(
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
  }, [sort, appliedTypes, appliedBrands]);

  // Load more products for pagination
  const loadMoreProducts = useCallback(async () => {
    if (!hasNextPage || loading) return;
    setLoading(true);
    const res = await fetchProductsFromShopify(
      endCursor,
      sort.sortKey,
      sort.reverse,
      appliedTypes,
      appliedBrands
    );
    setProducts(prev => [...prev, ...res.products]);
    setHasNextPage(res.hasNextPage);
    setEndCursor(res.endCursor);
    setLoading(false);
  }, [hasNextPage, loading, endCursor, sort.sortKey, sort.reverse, appliedTypes, appliedBrands]);

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
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={t('paymentCard.allCollection')}
        showText
        showIcon
        // notificationIcon
        showWishListIcon
        subText={t('shopPage.numProducts')}
        navigation={navigation}
      />

      <View style={{ flex: 1 }}>
        <View style={{ marginTop: windowHeight(3) }} />
        <SearchBar
          t={t}
          colors={colors}
          // cameraIcon
          onFilterPress={onFilterPress}
        />
        <Categorys products={products} t={t} navigation={navigation} />
      </View>

      {loading && (
        <View style={{ paddingVertical: 24 }}>
          <ActivityIndicator size="large" color={colors.primary} />
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
        onSortChange={toggleSortKey}
        currentSort={sort}
      />
    </SafeAreaView>
  );
}