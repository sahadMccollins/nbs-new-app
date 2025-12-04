import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useValues} from '@App';

export default quantitySection = props => {
  const {t} = props;
  const [numQuantity, setNumQuantity] = useState(1);
  const {viewRTLStyle, textRTLStyle, viewSelfRTLStyle} = useValues();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: props.colors.text, textAlign: textRTLStyle},
        ]}>
        {t('product.quantity')}:
      </Text>
      <View
        style={[
          styles.row,
          {
            backgroundColor: props.colors.styleBackground,
            flexDirection: viewRTLStyle,
            alignSelf: viewSelfRTLStyle,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.mainView, {borderColor: props.colors.text}]}
          onPress={() => {
            numQuantity > 1 && setNumQuantity(numQuantity - 1);
          }}>
          <Icon name={'minus'} size={16} color={props.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.text, {color: props.colors.text}]}>
          {numQuantity}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.mainView, {borderColor: props.colors.text}]}
          onPress={() => {
            setNumQuantity(numQuantity + 1);
          }}>
          <Icon name={'plus'} size={16} color={props.colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
