import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '@App';
export default function addressDetails(props) {
  const { viewRTLStyle, textRTLStyle } = useValues()
  // const address = props.address;
  const { colors, address, deleteAddress, selectedAddress, setSelectedAddress, hideSelect = false } = props;
  // const [selectedAddress, setSelectedAddress] = useState(null);
  const t = props.t;

  // useEffect(() => {
  //   if (address && address.length > 0) {
  //     setSelectedAddress(address[0]);
  //   }
  // }, [address]);


  return (
    <View style={styles.mainView}>
      <FlatList
        data={address}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginTop: windowHeight(200),
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              {t('addNewAddress.emptyAddress')}
            </Text>
            <Text style={{ marginTop: 6, textAlign: 'center' }}>
              {t('addNewAddress.emptyAddressDesc')}
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setSelectedAddress(item)}
            style={[
              styles.rowContainer,
              {
                borderColor: selectedAddress && item.id === selectedAddress.id ? "#28A745" : '',
                borderWidth: selectedAddress && item.id === selectedAddress.id ? 1 : 0,
                backgroundColor: selectedAddress && item.id === selectedAddress.id
                  ? appColors.bgHighlightGreen
                  : colors.cuponsbg,

                flexDirection: viewRTLStyle
              },
            ]}>
            <View>
              <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
                {!hideSelect && (
                  <TouchableOpacity
                    onPress={() => setSelectedAddress(item)}
                    style={[
                      styles.radioButton,
                      { backgroundColor: colors.styleBackground },
                      // { backgroundColor: '#28A745' },
                    ]}
                  >
                    {selectedAddress && item.id === selectedAddress.id && (
                      <View style={[styles.radioButtonIcon,
                      { backgroundColor: '#28A745' }
                      ]} />
                    )}
                  </TouchableOpacity>
                )}

                <Text style={[styles.area, { color: colors.text, textAlign: 'left', marginLeft: hideSelect ? 0 : windowWidth(20) }]}>
                  {item.firstName + " " + item.lastName}
                </Text>
              </View>
              <View style={styles.addressView}>
                {(() => {
                  const line1 = [item.address1, item.address2].filter(Boolean).join(', ');
                  const line2 = [item.city, item.province].filter(Boolean).join(', ');
                  const line3 = item.country || '';
                  return (
                    <Text
                      style={[
                        styles.address,
                        { color: colors.subText, textAlign: textRTLStyle }
                      ]}
                    >
                      {line1}{'\n'}
                      {line2}{'\n'}
                      {line3}
                    </Text>

                  );
                })()}

                <View style={{ flexDirection: viewRTLStyle }}>
                  <Text style={[styles.phone, { color: colors.text }]}>
                    {t('ShippingDetails.phoneNo')}
                  </Text>

                  <Text>  : </Text>
                  <Text style={{ color: colors.text }}>{item.phone}</Text>
                </View>

                <View
                  style={[
                    styles.row,
                    {
                      marginTop: windowHeight(8),
                      flexDirection: viewRTLStyle,
                    },
                  ]}>
                  <Text
                    onPress={() => deleteAddress(item.id)}
                    style={[
                      styles.textStyle,
                      {
                        backgroundColor: item.id == selectedAddress ? colors.card : colors.product,
                        borderWidth: 0.5,
                        borderColor: colors.subText,
                        color: colors.subText,
                      },
                    ]}>
                    {t('cart.remove')}
                  </Text>
                  {/* <Text
                    style={[
                      styles.textStyle,
                      {
                        left: windowWidth(17),
                        color: colors.subText,
                        backgroundColor: item.id == selectedAddress ? colors.card : colors.product
                        ,
                      },
                    ]}>
                    {t('profile.edit')}
                  </Text> */}
                </View>
              </View>
            </View>
            {/* <View style={styles.serViceView}>
              <Text style={styles.service}>{t(item.deliveryService)}</Text>
            </View> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
