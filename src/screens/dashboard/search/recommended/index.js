import React , {useState} from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import styles from './style';
import appColors from "@theme/appColors";
import {useValues} from '@App';

export default recommended = props => {
  const colors = props.colors;
  const recommended = props.recommended;
  const t = props.t;
  const [selected, setSelected] = useState(0);
  const {textRTLStyle} = useValues()

  const onPress = val => {
    recommended.map(item => {
      if (val == item.id) {
        setSelected(val);
      }
    });
  };

  return (
    <View>
      <Text style={[styles.title, {color: colors.text,textAlign:textRTLStyle}]}>
        {t('search.recommendedForYou')}
      </Text>
      <FlatList
        data={recommended}
        style={styles.recommendedList}
        numColumns={3}
        ItemSeparatorComponent={() => (
          <View style={styles.recommendedSeparator} />
        )}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => onPress(index)
          }
            style={[
              styles.recommended,
              {backgroundColor: selected == item.id ?  appColors.primary :     colors.cuponsbg},
            ]}>
            <Text style={[styles.name, {color: selected == item.id ? appColors.white : colors.text}]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
