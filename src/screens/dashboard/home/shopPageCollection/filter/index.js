import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FilterModal } from '@otherComponent';
import styles from './styles';
import DropDown from '@commonComponents/dropdown';
import Data from '@utils/json';
import Brands from './brands';
import ProductTypes from './productTypes';
import { windowHeight } from '@theme/appConstant';
import Sizes from './sizes';
import ButtonContainer from '@commonComponents/buttonContainer';
import FilterOptions from './filterOptions';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';

export default function filter({ modalVisible, setModalVisible, t, productTypes, selectedTypes, selectedBrands, onToggleCheckbox, resetFilters, onShowResults }) {
  const { colors } = useTheme();
  const { textRTLStyle } = useValues();

  return (
    <View>
      <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={t('shopPage.filters')}
        colors={colors}
        content={
          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollView}>
              {/* <View
                style={[
                  styles.seperator,
                  {backgroundColor: colors.brandsBg},
                ]}></View> */}
              {/* <Text
                style={[
                  styles.title,
                  {color: colors.text, textAlign: textRTLStyle},
                ]}>
                {t('shopPage.sortBy')}
              </Text>
              <DropDown
                data={sortBy}
                SelectedItem={SelectedItem}
                selectedItem={selectedItem}
                height={windowHeight(45)}
                top={windowHeight(-2)}
              /> */}
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: windowHeight(20),
                    color: colors.text,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('filters.byBrands')}
              </Text>
              <Brands t={t} colors={colors} selectedBrands={selectedBrands} onToggleCheckbox={onToggleCheckbox} />
              <View style={styles.blankView}></View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: windowHeight(20),
                    color: colors.text,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('filters.byProductType')}
              </Text>
              <ProductTypes t={t} colors={colors} productsTypes={productTypes} selectedTypes={selectedTypes} onToggleCheckbox={onToggleCheckbox} />
              {/* <View style={styles.blankView}></View> */}

            </ScrollView>
            <ButtonContainer
              t={t}
              colors={colors}
              btnTitle={t('shopPage.applyFilters')}
              text={t('addNewAddress.reset')}
              secondaryClick={() => {
                console.log("Reset Filters Clicked");
                resetFilters()
              }}
              btnClick={() => {
                onShowResults();
              }}
              bottom={30}
            />
          </View>
        }
      />
    </View>
  );
}
