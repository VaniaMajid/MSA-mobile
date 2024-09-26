import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { PatientHomeScreen } from '~Screens/Home';
import { MedicalInfoScreen } from '~Screens/MedicalInfo';
const MedicalInfoScreens = createStackNavigator<AuthParamList>();
export const MedicalInfoStack = () => {
  return (
    <MedicalInfoScreens.Navigator>
      <MedicalInfoScreens.Screen
        name={Path.MEDICAL_INFO_SCREEN}
        component={MedicalInfoScreen}
        options={{headerShown: false}}
      />
    </MedicalInfoScreens.Navigator>
  );
};
