import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigation} from './DrawerNavigator';
import {Path} from './routes';
import {NotificationScreen} from '~Screens/Notification';
import { AuthParamList } from './AuthParamList';
const AuthStackNavigation = createStackNavigator<AuthParamList>();
export const AuthStack = () => (
  <NavigationContainer>
    <AuthStackNavigation.Navigator initialRouteName="Drawer">
      <AuthStackNavigation.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <AuthStackNavigation.Screen
        name={Path.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
    </AuthStackNavigation.Navigator>
  </NavigationContainer>
);
