import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '@App';
export default function addressDetails(props) {
  const { viewRTLStyle, textRTLStyle } = useValues()
  // const address = props.address;
  const { colors, address, deleteAddress } = props;
  const [selectedAddress, setSelectedAddress] = useState(null);
  const t = props.t;

  useEffect(() => {
    if (address && address.length > 0) {
      setSelectedAddress(address[0]);
    }
  }, [address]);


  return (
    <View style={styles.mainView}>
      <FlatList
        data={address}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.rowContainer,
              {
                borderColor: selectedAddress && item.id === selectedAddress.id ? appColors.primary : '',
                borderWidth: selectedAddress && item.id === selectedAddress.id ? 1 : 0,
                backgroundColor: selectedAddress && item.id === selectedAddress.id
                  ? appColors.bgHighlight
                  : colors.cuponsbg,

                flexDirection: viewRTLStyle
              },
            ]}>
            <View>
              <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
                <TouchableOpacity
                  onPress={() => setSelectedAddress(item)}
                  style={[
                    styles.radioButton,
                    { backgroundColor: colors.styleBackground },
                  ]}
                >
                  {selectedAddress && item.id === selectedAddress.id && (
                    <View style={styles.radioButtonIcon} />
                  )}
                </TouchableOpacity>

                <Text style={[styles.area, { color: colors.text, textAlign: 'left' }]}>
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
                        backgroundColor: item.id == selectedAddress ? colors.card : colors.product
                        ,
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
          </View>
        )}
      />
    </View>
  );
}
