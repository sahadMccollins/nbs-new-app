import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from './tabStackNavigator';
import {windowWidth} from '@theme/appConstant';
import DrawerContent from '@otherComponent/drawerComponents';
import {useValues} from '@App';

const Drawer = createDrawerNavigator();
export default DrawerNavigator = props => {
  const t = props.route.params.t;
  const {isRTL} = useValues();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          borderTopRightRadius: windowWidth(20),
          borderBottomRightRadius: windowWidth(20),
          width: windowWidth(370),
        },
        drawerPosition: isRTL ? 'right' : 'left',
        drawerType: 'back',
        swipeEnabled: true,
      }}
      useLegacyImplementation
      drawerContent={props => (
        <DrawerContent {...props} t={t} navigation={props.navigation} />
      )}>
      <Drawer.Screen
        name="Tab"
        component={Tab}
        options={{headerShown: false}}
        initialParams={{t}}
      />
    </Drawer.Navigator>
  );
};
