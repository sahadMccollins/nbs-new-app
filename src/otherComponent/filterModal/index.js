import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {CloseSquare} from '@assets/icons/closeSquare';
import {useValues} from '@App';

export function FilterModal({
  modalVisible,
  setModalVisible,
  title,
  content,
  colors,
}) {
  const {viewRTLStyle} = useValues();
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[styles.centeredView, {backgroundColor: colors.background}]}>
          <View style={styles.modalView}>
            <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
              <Text style={[styles.heading, {color: colors.text}]}>
                {title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <CloseSquare />
              </TouchableOpacity>
            </View>
            {content}
          </View>
        </View>
      </Modal>
    </View>
  );
}
