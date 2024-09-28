import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { PatientProfileScreen } from '~Screens/Profile';
const ProfileStackScreens = createStackNavigator<AuthParamList>();
export const ProfileStack = () => {
  return (
    <ProfileStackScreens.Navigator>
      <ProfileStackScreens.Screen
        name={Path.PROFILE_SCREEN}
        component={PatientProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileStackScreens.Navigator>
  );
};
