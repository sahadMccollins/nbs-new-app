import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './homeStackNavigator';
import { cart } from '../screens/dashboard/cart/index';
import { wishList } from '../screens/dashboard/wishList/index';
import { profile } from '../screens/dashboard/profile/index';
import { CategoryStackScreen } from './categoryStackScreen';
import TabComponents from '@otherComponent/tabComponents';
import { Home, Category, Cart, Profile, Wishlist } from '@utils/icons';

import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default TabStackScreen = props => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      backBehavior="history"
      tabBar={props => <TabComponents {...props} />}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: t('tabBar.home'),
          tabBarIcon: ({ tintColor }) => <Home color={tintColor} />,
          headerShown: false,
        }}
        initialParams={{ t }}
      />
      <Tab.Screen
        name="CategoryStackScreen"
        component={CategoryStackScreen}
        options={{
          tabBarLabel: t('tabBar.category'),
          tabBarIcon: ({ tintColor }) => <Category color={tintColor} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="cart"
        component={cart}
        options={{
          tabBarLabel: t('tabBar.cart'),
          tabBarIcon: ({ tintColor }) => <Cart height={26} width={20} color={tintColor} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="wishList"
        component={wishList}
        options={{
          tabBarLabel: t('tabBar.wishList'),
          tabBarIcon: ({ tintColor }) => (
            <Wishlist color={tintColor} height={25} width={20} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarLabel: t('tabBar.profile'),
          tabBarIcon: ({ tintColor }) => (
            <Profile height={22} width={20} color={tintColor} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
