import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

export function BottomDialogModal(props) {
  return (
    props.showModal && (
      <TouchableOpacity
        style={styles.mainView}
        onPress={props.visibleModal}
        activeOpacity={1}>
        <TouchableOpacity activeOpacity={1}>{props.modal}</TouchableOpacity>
      </TouchableOpacity>
    )
  );
}
