import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Path} from './routes';
import {HomeStack} from './Stacks/HomeStack';
import {useTheme} from '~Contexts/ThemeContext';
import { TabBarIcon } from '~Components/TabBarIcon';
import { ToolsStack } from './Stacks/ToolsStack';
import { PatientProfileScreen } from '~Screens/Profile';
import { ProfileStack } from './Stacks/ProfileStack';
import { ChatScreen } from '~Screens/ChatSystem';
const BottomTabNavigator = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  const theme = useTheme();
  return (
    <BottomTabNavigator.Navigator
      detachInactiveScreens={false}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
        },
        tabBarActiveTintColor: theme.colors.primaryColor,
        tabBarInActiveTintColor: theme.colors.accentColor,
        tabBarStyle: {
          height: 80,
          paddingTop: 15,
          paddingBottom: 20,
        },
        tabBarIcon: ({focused}) => (
          <TabBarIcon routeName={route.name} focused={focused} />
        ),
      })}>
      <BottomTabNavigator.Screen
        name={Path.HOME_STACK}
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
      <BottomTabNavigator.Screen
        name={Path.TOOLS_STACK}
        component={ToolsStack}
        options={{tabBarLabel: 'Tools'}}
      />
      <BottomTabNavigator.Screen
        name={Path.CHAT_SCREEN}
        component={ChatScreen}
        options={{tabBarLabel: 'Messages'}}
      />
      <BottomTabNavigator.Screen
        name={Path.PROFILE_STACK}
        component={ProfileStack}
        options={{tabBarLabel: 'Profile'}}
      />
    </BottomTabNavigator.Navigator>
  );
};
