import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Path} from './routes';
import {FeedbackScreen} from '~Screens/Feedback';
import {CustomHeader} from '~Components/CustomHeader';
import {PatientBottomTabNavigation} from './PatientBottomNavigator';
import {Header} from '~Components/Header';
import {useTheme} from '~Contexts/ThemeContext';
import {AboutScreen} from '~Screens/About';
import {
  IconAbout,
  IconFaqs,
  IconFeedback,
  IconPricing,
  IconPrivacyPolicy,
  IconTerms,
} from '~Components/Icons';
import { CustomDrawerContent } from '~Components/index';

const PatientDrawer = createDrawerNavigator();

export const PatientDrawerNavigator = () => {
  const theme = useTheme();
  return (
    <PatientDrawer.Navigator
      detachInactiveScreens={false}
      initialRouteName={Path.BOTTOM_TABS}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={() => ({
        headerLeft: ({}) => <Header />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...theme.fonts.uiLabelSemiBold,
        },
        headerStyle: {
          shadowColor: theme.colors.darkGray,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        drawerStyle: {
          paddingTop: theme.spacing.V2,
          paddingLeft: theme.spacing.H3,
        },
        drawerItemStyle: {
          paddingBottom: 5
        },
        drawerLabelStyle: {
          ...theme.fonts.linkSemiBold,
          marginLeft: -15,  
        },
        overlayColor: 'rgba(0, 0, 0, 0.3)',
      })}>
      <PatientDrawer.Screen
        name={Path.BOTTOM_TABS}
        component={PatientBottomTabNavigation}
        options={({navigation}) => ({
          drawerItemStyle: {display: 'none'},
          header: () => <CustomHeader navigation={navigation} title="" />,
        })}
      />
      <PatientDrawer.Screen
        name={Path.ABOUT_SCREEN}
        component={AboutScreen}
        options={{
          title: 'About MSA',
          drawerIcon: ({}) => <IconAbout color={theme.colors.primaryColor}/>,
        }}
      />
      <PatientDrawer.Screen
        name={Path.TERMS_SCREEN}
        component={AboutScreen}
        options={{
          title: 'Terms & Conditions',
          drawerIcon: ({}) => <IconTerms color={theme.colors.primaryColor}/>,
        }}
      />
      <PatientDrawer.Screen
        name={Path.PRIVACY_POLICY_SCREEN}
        component={AboutScreen}
        options={{
          title: 'Privacy Policy',
          drawerIcon: ({}) => <IconPrivacyPolicy color={theme.colors.primaryColor}/>,
        }}
      />
      <PatientDrawer.Screen
        name={Path.FAQS_SCREEN}
        component={AboutScreen}
        options={{
          title: 'General FAQs',
          drawerIcon: ({}) => <IconFaqs color={theme.colors.primaryColor}/>,
        }}
      />
      <PatientDrawer.Screen
        name={Path.PRICING_SCREEN}
        component={AboutScreen}
        options={{
          title: 'Pricing',
          drawerIcon: ({}) => <IconPricing color={theme.colors.primaryColor}/>,
        }}
      />
      <PatientDrawer.Screen
        name={Path.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={{
          title: 'Feedback',
          drawerIcon: ({}) => <IconFeedback color={theme.colors.primaryColor}/>,
        }}
      />
    </PatientDrawer.Navigator>
  );
};
