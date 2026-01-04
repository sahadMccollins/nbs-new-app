import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from '../../style';
import { useValues } from '@App';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

const sortOptions = [
  { label: 'option1', sortKey: 'RELEVANCE', reverse: false },
  { label: 'option2', sortKey: 'BEST_SELLING', reverse: false },
  { label: 'option3', sortKey: 'TITLE', reverse: false },
  { label: 'option4', sortKey: 'TITLE', reverse: true },
  { label: 'option5', sortKey: 'PRICE', reverse: false },
  { label: 'option6', sortKey: 'PRICE', reverse: true },
  { label: 'option7', sortKey: 'CREATED_AT', reverse: false },
  { label: 'option8', sortKey: 'CREATED_AT', reverse: true },
];

export function SortBy(props) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { isRTL, textRTLStyle } = useValues();

  const handleSortPress = useCallback((sortKey, reverse) => {
    props.toggleSortKey(sortKey, reverse);
    // setSortVisible(false);
  }, [props.toggleSortKey]);

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background, }]}>

      {/* HEADER */}
      <View style={styles.header}>
        {/* Empty view to balance center title */}
        <View style={{ width: 24 }} />

        <Text
          style={[
            styles.title,
            { color: colors.text, textAlign: 'center' },
          ]}
        >
          {t('sortBy.title')}
        </Text>

        <TouchableOpacity onPress={props.onPress}>
          <Icon
            name="x"
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* DIVIDER */}
      <View
        style={[
          styles.divider,
          { backgroundColor: "grey", marginTop: 7 },
        ]}
      />

      {/* LIST */}
      <FlatList
        data={sortOptions}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionRow}
            // onPress={() => props.onSelect(item)}
            onPress={() => handleSortPress(item.sortKey, item.reverse)}
          >
            <Text
              style={[
                styles.optionText,
                {
                  color: colors.text,
                  textAlign: 'center',
                },
              ]}
            >
              {t(`sortBy.${item.label}`)}
            </Text>
            {props?.currentSort?.sortKey === item.sortKey && props?.currentSort?.reverse === item.reverse && (
              <Icon
                name="check"
                size={18}
                color={colors.text}
              />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
