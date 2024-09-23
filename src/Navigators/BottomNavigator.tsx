import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Path} from './routes';
import {MedicalInfoScreen} from '~Screens/MedicalInfo';
import {HomeStack} from './Stacks/HomeStack';
import {
  IconHomeActive,
  IconHomeInActive,
  IconMedicalInfoActive,
  IconMedicalInfoInActive,
} from '~Components/Icons';
import {useTheme} from '~Contexts/ThemeContext';
const BottomTabNavigator = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  const theme = useTheme();
  return (
    <BottomTabNavigator.Navigator
      detachInactiveScreens={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <IconHomeActive color={theme.colors.primaryColor} size="xxs" />
            ) : (
              <IconHomeInActive color={theme.colors.accentColor} size="xxs" />
            );
          } else if (route.name === 'MedicalInfo') {
            console.log(focused)
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
          }
          // You can return any component that you like here!
        },
      })}>
      <BottomTabNavigator.Screen
        name={Path.HOME_SCREEN}
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name={Path.MEDICAL_INFO_SCREEN}
        component={MedicalInfoScreen}
      />
    </BottomTabNavigator.Navigator>
  );
};
