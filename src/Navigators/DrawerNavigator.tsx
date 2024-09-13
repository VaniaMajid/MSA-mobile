import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './BottomNavigator';
import {Path} from './routes';
import {FeedbackScreen} from '~Screens/Feedback';
import {AboutScreen} from '~Screens/About';
const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen name={Path.BOTTOM_TABS} component={BottomTabNavigation} />
      <Drawer.Screen name={Path.FEEDBACK_SCREEN} component={FeedbackScreen} />
      <Drawer.Screen name={Path.ABOUT_SCREEN} component={AboutScreen} />
    </Drawer.Navigator>
  );
};
