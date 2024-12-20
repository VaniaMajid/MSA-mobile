import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Path } from './routes';
import { FeedbackScreen } from '~Screens/Feedback';
import { CustomHeader } from '~Components/CustomHeader';
import { BottomTabNavigation } from './BottomNavigator';
import { useTheme } from '~Contexts/ThemeContext';
import { AboutScreen } from '~Screens/About';
import {
  IconAbout,
  IconFeedback,
} from '~Components/Icons';
import { CustomDrawerContent } from '~Components/index';
import { SearchBar } from '~Components/SearchBar'; // Import the SearchBar component

const PatientDrawer = createDrawerNavigator();

export const PatientDrawerNavigator = () => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <PatientDrawer.Navigator
      detachInactiveScreens={false}
      initialRouteName={Path.BOTTOM_TABS}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...theme.fonts.uiLabelSemiBold,
        },
        headerStyle: {
          shadowColor: theme.colors.darkGray,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        drawerStyle: {
          paddingTop: theme.spacing.V2,
          paddingLeft: theme.spacing.H3,
        },
        drawerItemStyle: {
          paddingBottom: 5,
        },
        drawerLabelStyle: {
          ...theme.fonts.linkSemiBold,
          marginLeft: -15,
        },
        overlayColor: 'rgba(0, 0, 0, 0.3)',
      })}
    >
      <PatientDrawer.Screen
        name={Path.BOTTOM_TABS}
        component={BottomTabNavigation}
        options={({ navigation }) => ({
          drawerItemStyle: { display: 'none' },
          header: () => (
            <CustomHeader navigation={navigation}>
            </CustomHeader>
          ),
        })}
      />
      <PatientDrawer.Screen
        name={Path.ABOUT_SCREEN}
        component={AboutScreen}
        options={{
          title: 'About MSA',
          drawerIcon: ({}) => <IconAbout color={theme.colors.primaryColor} />,
        }}
      />
      <PatientDrawer.Screen
        name={Path.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
          drawerIcon: ({}) => <IconFeedback color={theme.colors.primaryColor} />,
        }}
      />
      {/* Add more screens as needed */}
    </PatientDrawer.Navigator>
  );
};
