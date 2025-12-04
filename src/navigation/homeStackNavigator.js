import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { home } from "../screens";

const AppStack = createStackNavigator();
export const HomeStackScreen = (props) => {

    const t = props.route.params.t

    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}>
            <AppStack.Screen name="Home" component={home} initialParams={{ t }} />
        </AppStack.Navigator>
    )
};
