import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { CategoriesScreen } from '~Screens/CategoriesScreen';
const CategoriesStackScreens = createStackNavigator<AuthParamList>();
export const CategoriesStack = () => {
  return (
    <CategoriesStackScreens.Navigator>
      <CategoriesStackScreens.Screen
        name={Path.CATEGORIES_SCREEN}
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
    </CategoriesStackScreens.Navigator>
  );
};
