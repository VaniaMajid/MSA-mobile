import {createStackNavigator} from '@react-navigation/stack';
import {Path} from '~Navigators/routes';
import {Dashboard} from '~Screens/Dashboard';
import {NotificationScreen} from '~Screens/Notification';
const HomeStackScreens = createStackNavigator();
export const HomeStack = () => {
  return (
    <HomeStackScreens.Navigator>
      <HomeStackScreens.Screen
        name={Path.DASHBOARD_SCREEN}
        component={Dashboard}
        options={{headerShown: false}}
      />
    </HomeStackScreens.Navigator>
  );
};
