import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import onBoarding from '../screens/onBoardingScreen';
import resetPassword from '../screens/auth/resetpassword/resetPassword';
import login from '../screens/auth/login/login';
import registration from '../screens/auth/registration/registration';
import forgotPassword from '../screens/auth/forgotPassword/forgotPassword';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="onBoarding" component={onBoarding} />
    <AuthStack.Screen name="Login" component={login} />
    <AuthStack.Screen name="introslider" component={registration} />
    <AuthStack.Screen name="forgotPassword" component={forgotPassword} />
    <AuthStack.Screen name="resetPassword" component={resetPassword} />
  </AuthStack.Navigator>
);
