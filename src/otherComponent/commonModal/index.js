import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';

export function CommonModal(props) {
  return (
    props.showModal && (
      <View style={styles.mainView}>
        <Modal transparent animationType="slide">
          <TouchableOpacity
            style={styles.subView}
            onPress={props.visibleModal}
            activeOpacity={1}>
            {props.modal}
          </TouchableOpacity>
        </Modal>
      </View>
    )
  );
}
