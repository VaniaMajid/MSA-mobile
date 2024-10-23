import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { SellerHomeScreen } from '~Screens/Home';
import { ToolsScreen } from '~Screens/ToolsScreen';
const ToolsStackScreens = createStackNavigator<AuthParamList>();
export const ToolsStack = () => {
  return (
    <ToolsStackScreens.Navigator>
      <ToolsStackScreens.Screen
        name={Path.TOOLS_SCREEN}
        component={ToolsScreen}
        options={{headerShown: false}}
      />
    </ToolsStackScreens.Navigator>
  );
};
