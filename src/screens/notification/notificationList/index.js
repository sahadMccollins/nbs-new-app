import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import {useValues} from '@App';

export default notificationList = props => {
  const {t, notificationList, colors} = props;
  const {viewRTLStyle, viewSelfRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        data={notificationList}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.seperator, {backgroundColor: colors.brandsBg}]}
          />
        )}
        contentContainerStyle={styles.scrollView}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.mainView,
              {
                backgroundColor:
                  item.newNotification == true ? colors.cuponsbg : '',
              },
            ]}>
            <View>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <Image source={item.image} style={styles.image} />
                <View
                  style={[
                    styles.textContainer,
                    {alignItems: viewSelfRTLStyle},
                  ]}>
                  <Text
                    style={[
                      styles.title,
                      {color: colors.text, textAlign: textRTLStyle},
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.date,
                      {color: colors.subText, textAlign: textRTLStyle},
                    ]}>
                    {item.date}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
