import React, {useState, useEffect} from 'react';
import { ScrollView} from 'react-native';
import {Header} from '@commonComponents';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import Data from '@utils/json';
import Filter from './filter';
import NotificationList from './notificationList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [select, setSelect] = useState(0);
  const [notificationList, setNotificationList] = useState([]);

  const notification = Data.notification;
  useEffect(() => {
    selectValue(0);
  }, []);

  const selectValue = id => {
    setSelect(id);
    var notifications = Data.notificationList;
    var arr = [];
    notifications.map(item => {
      if (item.id == id) {
        arr.push(item);
      }
    });
    setNotificationList(arr);
  };

  return (
    <SafeAreaView>
      <Header text={t('drawerArr.notification')} navigation={navigation} />
      <ScrollView>
        <Filter
          selectValue={selectValue}
          select={select}
          notification={notification}
          t={t}
          colors={colors}
        />
        <NotificationList notificationList={notificationList} colors={colors} />
      </ScrollView>
    </SafeAreaView>
  );
}
