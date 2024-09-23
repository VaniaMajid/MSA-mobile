import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Path} from './routes';
import {FeedbackScreen} from '~Screens/Feedback';
import {CustomHeader} from '~Components/CustomHeader';
import {PatientBottomTabNavigation} from './PatientBottomNavigator';
import { Header } from '~Components/Header';
import { useTheme } from '~Contexts/ThemeContext';

const PatientDrawer = createDrawerNavigator();

export const PatientDrawerNavigator = () => {
  const theme = useTheme();
  return (
    <PatientDrawer.Navigator
      initialRouteName={Path.BOTTOM_TABS}
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...theme.fonts.uiLabelSemiBold,
        },
      })}>
      <PatientDrawer.Screen
        name={Path.BOTTOM_TABS}
        component={PatientBottomTabNavigation}
        options={({navigation}) => ({
          drawerItemStyle: { display: 'none' },
          header: () => <CustomHeader navigation={navigation} title="" />,
        })}
      />
      <PatientDrawer.Screen
        name={Path.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
          headerLeft: ({}) => <Header />,
        }}
      />
    </PatientDrawer.Navigator>
  );
};
