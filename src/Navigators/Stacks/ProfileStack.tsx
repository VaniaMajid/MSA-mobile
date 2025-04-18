import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { BuyerProfileScreen } from '~Screens/Profile/BuyerProfile';
const ProfileStackScreens = createStackNavigator<AuthParamList>();
export const ProfileStack = () => {
  return (
    <ProfileStackScreens.Navigator>
      <ProfileStackScreens.Screen
        name={Path.PROFILE_SCREEN}
        component={BuyerProfileScreen}
        options={{headerShown: true}}
      />
    </ProfileStackScreens.Navigator>
  );
};
