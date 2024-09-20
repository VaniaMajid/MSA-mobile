import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import {Dashboard} from '~Screens/Dashboard';
const HomeStackScreens = createStackNavigator<AuthParamList>();
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
