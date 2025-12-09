import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList, Text } from 'react-native';
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
    console.log("res", res);
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


/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
export default function ShopPageCollection({ navigation, route }) {
  const colors = useTheme();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  // Get collectionId and sort params from route
  const collectionId = route?.params?.collectionId;
  const routeSortKey = route?.params?.sortKey || 'TITLE';
  const routeReverse = route?.params?.reverse ?? false;

  // Collection title state
  const [collectionTitle, setCollectionTitle] = useState(null);

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

  // Sort state - initialize from route params
  const [sort, setSort] = useState({
    sortKey: routeSortKey,
    reverse: routeReverse,
  });

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

  // Load more products for pagination
  const loadMoreProducts = useCallback(async () => {
    if (!hasNextPage || loading || !collectionId) return;
    setLoading(true);
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
    setLoading(false);
  }, [collectionId, hasNextPage, loading, endCursor, sort.sortKey, sort.reverse, appliedTypes, appliedBrands]);

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
        text={collectionTitle || t('paymentCard.allCollection')}
        showText
        showIcon
        showSearchIcon
        subText={t('shopPage.numProducts')}
        navigation={navigation}
      />

      <View style={{ flex: 1 }}>
        <View style={{ marginTop: windowHeight(3) }} />
        {/* <SearchBar
          t={t}
          colors={colors}
          onFilterPress={onFilterPress}
        /> */}

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
          <Categorys products={products} t={t} navigation={navigation} />
        )}

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