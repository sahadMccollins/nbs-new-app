import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { map, darkMap } from '@utils/images/images';
import styles from './styles';
import Data from '@utils/json';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '@App';
import { formatDate } from '@utils/constant';

const fulfillmentStatusMap = {
  FULFILLED: "Delivered",
  PARTIALLY_FULFILLED: "Partial",
  UNFULFILLED: "Pending",
  IN_PROGRESS: "Processing",
  ON_HOLD: "On Hold",
  OPEN: "Pending",
  PENDING_FULFILLMENT: "Processing",
  RESTOCKED: "Returned",
  SCHEDULED: "Scheduled",
};

const financialStatusMap = {
  AUTHORIZED: "Authorized",
  PAID: "Paid",
  PARTIALLY_PAID: "Partially Paid",
  PARTIALLY_REFUNDED: "Partially Refunded",
  PENDING: "Pending",
  REFUNDED: "Refunded",
  VOIDED: "Voided",
};



export default OpenOrders = props => {
  const { t, colors, orders } = props;
  const { isDark, viewRTLStyle, textRTLStyle, viewSelfRTLStyle } = useValues();

  const goToScreen = () => {
    props.navigation.navigate('OrderDescription');
  };

  const openOrderStatus = (statusUrl) => {
    const url = statusUrl;

    if (!url) {
      alert("No order status URL found");
      return;
    }

    props.navigation.navigate("OrderStatusWebview", {
      url: url,
    });
  };


  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
    // onPress={goToScreen}
    >
      {/* <Text
        style={[styles.title, { color: colors.text, textAlign: textRTLStyle }]}>
        {t('orderHistory.openOrders')}
      </Text> */}

      {orders?.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: windowHeight(200),
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.text,
              textAlign: 'center',
              fontWeight: '800',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            {t('orderHistory.emptyOrderHistory')}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.text,
              textAlign: 'center',
            }}
          >
            {t('orderHistory.emptyOrderHistoryDesc')}
          </Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          style={styles.mainView}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={[
                styles.orderSeperator,
                { backgroundColor: colors.brandsBg },
              ]}
            />
          )}
          renderItem={({ item }) => {
            const imageUri =
              item?.lineItems?.edges?.[0]?.node?.variant?.image?.src;

            return (
              <View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: 'space-between', flexDirection: viewRTLStyle },
                  ]}
                >
                  <Image
                    source={
                      imageUri
                        ? { uri: imageUri }
                        : { uri: 'https://placehold.co/400' }
                    }
                    style={styles.imageStyle}
                  />

                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.name,
                        { color: colors.text, textAlign: textRTLStyle, fontWeight: '800' },
                      ]}
                    >
                      #{item.orderNumber}
                    </Text>

                    <View
                      style={[
                        styles.row,
                        {
                          marginVertical: windowHeight(3),
                          flexDirection: viewRTLStyle,
                        },
                      ]}
                    >
                      <Text style={[styles.textStyle, { color: colors.subText }]}>
                        {item?.lineItems?.edges?.length} {t('orderSuccess.items')}
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => openOrderStatus(item.statusUrl)}
                    >
                      <Text
                        style={[
                          styles.viewDetails,
                          { textAlign: textRTLStyle },
                        ]}
                      >
                        {t('cart.viewDetails')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={[
                      styles.ongoingView,
                      { backgroundColor: colors.brandsBg },
                    ]}
                  >
                    <Text style={[styles.text, { color: colors.text }]}>
                      {fulfillmentStatusMap[item.fulfillmentStatus]}
                    </Text>
                  </View>
                </View>

                <ImageBackground
                  source={isDark ? darkMap : map}
                  style={[
                    styles.mapStyle,
                    { alignItems: viewSelfRTLStyle },
                  ]}
                >
                  <View style={styles.bottomView}>
                    <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
                      <View style={styles.margin}>
                        <Text
                          style={[
                            styles.order,
                            { color: colors.subText, textAlign: textRTLStyle },
                          ]}
                        >
                          {t('orderHistory.ordered')}
                        </Text>
                        <Text
                          style={[
                            styles.date,
                            { color: colors.text, textAlign: textRTLStyle },
                          ]}
                        >
                          {formatDate(item.processedAt)}
                        </Text>
                      </View>

                      <View>
                        <Text
                          style={[
                            styles.order,
                            { color: colors.subText, textAlign: textRTLStyle },
                          ]}
                        >
                          {t('orderHistory.paymentStatus')}
                        </Text>
                        <Text
                          style={[
                            styles.date,
                            { color: colors.text, textAlign: textRTLStyle },
                          ]}
                        >
                          {financialStatusMap[item.financialStatus]}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            );
          }}
        />
      )}



      {/* <FlatList
        data={orders}
        style={styles.mainView}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.orderSeperator, { backgroundColor: colors.brandsBg }]}
          />
        )}
        renderItem={({ item, index }) => (
          <View>
            <View
              style={[
                styles.row,
                { justifyContent: 'space-between', flexDirection: viewRTLStyle },
              ]}>
              <Image source={{ uri: item?.lineItems?.edges[0]?.node?.variant?.image?.src }} style={styles.imageStyle} />
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.name,
                    { color: colors.text, textAlign: textRTLStyle, fontWeight: 800 },
                  ]}>
                  #{t(item.orderNumber)}
                </Text>
                <View
                  style={[
                    styles.row,
                    {
                      marginVertical: windowHeight(3),
                      flexDirection: viewRTLStyle,
                    },
                  ]}>
                  <Text style={[styles.textStyle, { color: colors.subText }]}>
                    {item?.lineItems.edges?.length} {t('orderSuccess.items')}
                  </Text>
                  <Text style={[styles.textStyle, { color: colors.subText }]}>
                    {t('orderSuccess.qty')}: {t(item.quantity)}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={[styles.viewDetails, { textAlign: textRTLStyle }]}>
                    {t('cart.viewDetails')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openOrderStatus(item.statusUrl)}>
                  <Text style={[styles.viewDetails, { textAlign: textRTLStyle }]}>
                    {t('cart.viewDetails')}
                  </Text>
                </TouchableOpacity>

              </View>
              <View
                style={[
                  styles.ongoingView,
                  { backgroundColor: colors.brandsBg },
                ]}>
                <Text style={[styles.text, { color: colors.text }]}>
                  {fulfillmentStatusMap[item.fulfillmentStatus]}
                </Text>
              </View>
            </View>
            <ImageBackground
              source={isDark ? darkMap : map}
              style={[styles.mapStyle, { alignItems: viewSelfRTLStyle }]}>
              <View style={styles.bottomView}>
                <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
                  <View style={styles.margin}>
                    <Text
                      style={[
                        styles.order,
                        { color: colors.subText, textAlign: textRTLStyle },
                      ]}>
                      {t('orderHistory.ordered')}
                    </Text>
                    <Text
                      style={[
                        styles.date,
                        { color: colors.text, textAlign: textRTLStyle },
                      ]}>
                      {formatDate(item.processedAt)}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.order,
                        { color: colors.subText, textAlign: textRTLStyle },
                      ]}>
                      {t('orderHistory.paymentStatus')}{' '}
                    </Text>
                    <Text
                      style={[
                        styles.date,
                        { color: colors.text, textAlign: textRTLStyle },
                      ]}>
                      {financialStatusMap[item.financialStatus]}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      /> */}
    </TouchableOpacity>
  );
};
