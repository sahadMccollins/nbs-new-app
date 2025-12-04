import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '@App';
export default function addressDetails(props) {
  const {viewRTLStyle,textRTLStyle} = useValues()
  const address = props.address;
  const {colors} = props;
  const [selectedAddress,setSelectedAddress] = useState('')
  const t = props.t;
  const onSelect = val => {
    address.map(item => {
      if (val == item.id) {
        setSelectedAddress(val);
      }
    });
  };
  return (
    <View style={styles.mainView}>
      <FlatList
        data={address}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.rowContainer,
              {
                borderColor: item.id == selectedAddress ? appColors.primary : '',
                borderWidth: item.id == selectedAddress ? 1 : 0,
                backgroundColor:
                  item.id == selectedAddress
                    ? appColors.bgHighlight
                    : colors.cuponsbg,
                    flexDirection:viewRTLStyle
              },
            ]}>
            <View>
              <View style={[styles.row,{flexDirection:viewRTLStyle}]}>
                <TouchableOpacity
                  onPress={() => onSelect(index)}
                  style={[
                    styles.radioButton,
                    {backgroundColor: colors.styleBackground},
                  ]}>
                  {item.id == selectedAddress && (
                    <View style={styles.radioButtonIcon}></View>
                  )}
                </TouchableOpacity>
                <Text style={[styles.area, {color: colors.text,textAlign:'left'}]}>
                  {t(item.area)}
                </Text>
              </View>
              <View style={styles.addressView}>
                <Text style={[styles.address, {color: colors.subText,textAlign:textRTLStyle}]}>
                  {t(item.address)}
                </Text>
                <View style={{flexDirection:viewRTLStyle}}>
                <Text style={[styles.phone, {color: colors.text}]}>
                {t('ShippingDetails.phoneNo')}
                                 </Text>
           
                <Text>  : </Text>
                <Text style={{color:colors.text}}>903-239-1284</Text>
                </View>
                              
                <View
                  style={[
                    styles.row,
                    {
                      marginTop: windowHeight(8),
                      flexDirection:viewRTLStyle,
                      
                    },
                  ]}>
                  <Text
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
                  <Text
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
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.serViceView}>
              <Text style={styles.service}>{t(item.deliveryService)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
