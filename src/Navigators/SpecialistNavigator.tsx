import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Path } from './routes';
import { AboutScreen } from '~Screens/About';
import { PatientBottomTabNavigation } from './PatientBottomNavigator';

const SpecialistDrawer = createDrawerNavigator();

export const SpecialistDrawerNavigator = () => {
  return (
    <SpecialistDrawer.Navigator initialRouteName="SpecialistHomeTabs">
      <SpecialistDrawer.Screen name={Path.BOTTOM_TABS} component={PatientBottomTabNavigation} />
      <SpecialistDrawer.Screen name={Path.ABOUT_SCREEN} component={AboutScreen} />
      
    </SpecialistDrawer.Navigator>
  );
};
