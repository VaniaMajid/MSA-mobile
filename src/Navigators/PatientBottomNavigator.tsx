import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Path} from './routes';
import {MedicalInfoScreen} from '~Screens/MedicalInfo';
import {HomeStack} from './Stacks/HomeStack';
import {
  IconAppinionsActive,
  IconAppinionsInActive,
  IconHomeActive,
  IconHomeInActive,
  IconMedicalInfoActive,
  IconMedicalInfoInActive,
  IconProfileActive,
  IconProfileInActive,
} from '~Components/Icons';
import {useTheme} from '~Contexts/ThemeContext';
const PatientBottomTabNavigator = createBottomTabNavigator();
export const PatientBottomTabNavigation = () => {
  const theme = useTheme();
  return (
    <PatientBottomTabNavigator.Navigator
      detachInactiveScreens={false}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeStack') {
            return focused ? (
              <IconHomeActive color={theme.colors.primaryColor} size="xxs" />
            ) : (
              <IconHomeInActive color={theme.colors.accentColor} size="xxs" />
            );
          } else if (route.name === 'MedicalInfo') {
            return focused ? (
              <IconMedicalInfoActive
                color={theme.colors.primaryColor}
                size="xxs"
              />
            ) : (
              <IconMedicalInfoInActive
                color={theme.colors.accentColor}
                size="xxs"
              />
            );
          } else if (route.name === 'Appinions') {
            return focused ? (
              <IconAppinionsActive
                color={theme.colors.primaryColor}
                size="xxs"
              />
            ) : (
              <IconAppinionsInActive
                color={theme.colors.accentColor}
                size="xxs"
              />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <IconProfileActive color={theme.colors.primaryColor} size="xxs" />
            ) : (
              <IconProfileInActive
                color={theme.colors.accentColor}
                size="xxs"
              />
            );
          }
        },
      })}>
      <PatientBottomTabNavigator.Screen
        name={Path.HOME_STACK}
        component={HomeStack}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.MEDICAL_INFO_SCREEN}
        component={MedicalInfoScreen}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.APPINIONS_SCREEN}
        component={MedicalInfoScreen}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.PROFILE_SCREEN}
        component={MedicalInfoScreen}
      />
    </PatientBottomTabNavigator.Navigator>
  );
};
