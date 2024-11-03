import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { ContactsScreen } from '~Screens/Contacts';
const MessagesStackScreens = createStackNavigator<AuthParamList>();
export const MessagesStack = () => {
  return (
    <MessagesStackScreens.Navigator>
      <MessagesStackScreens.Screen
        name={Path.CONTACTS_SCREEN}
        component={ContactsScreen}
        options={{headerShown: false}}
      />
    </MessagesStackScreens.Navigator>
  );
};
