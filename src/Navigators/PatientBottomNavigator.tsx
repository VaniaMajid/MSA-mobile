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
        tabBarLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: theme.colors.primaryColor,
        tabBarInActiveTintColor: theme.colors.accentColor,
        tabBarStyle: {
          height: 80,
          paddingTop: 15,
          paddingBottom: 20,
        },
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
        options={{tabBarLabel: 'Home'}}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.MEDICAL_INFO_SCREEN}
        component={MedicalInfoScreen}
        options={{tabBarLabel: 'Medical Info'}}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.APPINIONS_SCREEN}
        component={MedicalInfoScreen}
        options={{tabBarLabel: 'Appinions'}}
      />
      <PatientBottomTabNavigator.Screen
        name={Path.PROFILE_SCREEN}
        component={MedicalInfoScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </PatientBottomTabNavigator.Navigator>
  );
};
