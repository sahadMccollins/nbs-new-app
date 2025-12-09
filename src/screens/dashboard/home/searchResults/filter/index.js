import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {FilterModal} from '@otherComponent';
import styles from './styles';
import DropDown from '@commonComponents/dropdown';
import Data from '@utils/json';
import Brands from './brands';
import {windowHeight} from '@theme/appConstant';
import Sizes from './sizes';
import ButtonContainer from '@commonComponents/buttonContainer';
import FilterOptions from './filterOptions';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@App';

export default function filter({modalVisible, setModalVisible, t}) {
  const sortBy = Data.sortBy;
  const [selectedItem, setSelectedItem] = useState();
  const brands = Data.brands;
  const {colors} = useTheme();
  const {textRTLStyle} = useValues();

  const SelectedItem = val => {
    setSelectedItem(val);
  };
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
              <View
                style={[
                  styles.seperator,
                  {backgroundColor: colors.brandsBg},
                ]}></View>
              <Text
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
              />
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: windowHeight(20),
                    color: colors.text,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('shopPage.brand')}
              </Text>
              <Brands t={t} brands={brands} colors={colors} />
              <View style={styles.blankView}></View>
              <Sizes
                title={t('orderSuccess.size')}
                sizes={Data.size}
                t={t}
                colors={colors}
              />
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: windowHeight(20),
                    color: colors.text,
                    textAlign: textRTLStyle,
                  },
                ]}>
                {t('shopPage.price')}
              </Text>
              <FilterOptions t={t} colors={colors} />
            </ScrollView>
            <ButtonContainer
              t={t}
              colors={colors}
              btnTitle={t('shopPage.applyFilters')}
              text={t('addNewAddress.reset')}
              btnClick={() => {
                setModalVisible(false);
              }}
            />
          </View>
        }
      />
    </View>
  );
}
