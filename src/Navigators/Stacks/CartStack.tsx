import {createStackNavigator} from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import { AddToCartScreen } from '~Screens/AddToCart';
const CartStackScreens = createStackNavigator<AuthParamList>();
export const CartStack = () => {
  return (
    <CartStackScreens.Navigator>
      <CartStackScreens.Screen
        name={Path.ADD_TO_CART_SCREEN}
        component={AddToCartScreen}
        options={{headerShown: false}}
      />
    </CartStackScreens.Navigator>
  );
};
