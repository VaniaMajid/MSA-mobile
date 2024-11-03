import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { BuyerHomeScreen } from '~Screens/Home';
const HomeStackScreens = createStackNavigator<AuthParamList>();
export const HomeStack = () => {
  return (
    <HomeStackScreens.Navigator>
      <HomeStackScreens.Screen
        name={Path.HOME_SCREEN}
        component={BuyerHomeScreen}
        options={{headerShown: false}}
      />
    </HomeStackScreens.Navigator>
  );
};
