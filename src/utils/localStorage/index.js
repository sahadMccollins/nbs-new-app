import AsyncStorage from '@react-native-async-storage/async-storage';

const setValue = async (key, value) => {
  const item = await AsyncStorage.setItem(key, value);
  return item;
};

const getValue = async value => {
  var val = await AsyncStorage.getItem(value);
  return val;
};

const clearValue = async () => {
  await AsyncStorage.clear();
};

export {setValue, getValue, clearValue};
