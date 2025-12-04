import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {category} from '../screens/dashboard/category';
import {innerCategory} from '../screens/dashboard/category/innerCategory';

const AppStack = createStackNavigator();
export const CategoryStackScreen = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <AppStack.Screen name="Category" component={category} />
    <AppStack.Screen name="InnerCategory" component={innerCategory} />
  </AppStack.Navigator>
);
