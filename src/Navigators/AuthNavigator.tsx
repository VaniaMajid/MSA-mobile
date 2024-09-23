import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './AuthParamList';
import {FC} from 'react';
import {PatientDrawerNavigator} from './PatientNavigator';
import {SpecialistDrawerNavigator} from './SpecialistNavigator';
import {Path} from './routes';
import {NotificationScreen} from '~Screens/Notification';
import {Header} from '~Components/Header';
import {useTheme} from '~Contexts/ThemeContext';
const AuthStackNavigation = createStackNavigator<AuthParamList>();

interface AuthNavProps {
  userRole: string;
}
export const AuthNavigator: FC<AuthNavProps> = ({userRole}) => {
  const theme = useTheme();
  return (
    <AuthStackNavigation.Navigator
      screenOptions={{
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
      }}>
      {userRole === 'patient' ? (
        <AuthStackNavigation.Screen
          name="PatientDrawer"
          component={PatientDrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AuthStackNavigation.Screen
          name="SpecialistDrawer"
          component={SpecialistDrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
      <AuthStackNavigation.Screen
        name={Path.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerLeft: ({}) => <Header />,
        }}
      />
    </AuthStackNavigation.Navigator>
  );
};
