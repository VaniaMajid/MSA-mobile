import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from '~Features/Auth/slice/authSlice';
import {deliveryReducer} from '~Features/Delivery/slice';
import {foodListingReducer} from '~Features/FoodListing/slice';
import {storeDetailReducer} from '~Features/Location/slice';
import {loyaltyReducer} from '~Features/Loyalty';
import {orderReducer, tryToComboReducer} from '~Features/Ordering/slice';
import {cartReducer} from '~Features/Cart/slice';
import {paymentReducer} from '~Features/Payment/slice';
import {placeOrderReducer} from '~Features/PlaceOrder';
import {vehicleReducer} from '~Features/Vehicle/slice';
import {utilsReducer} from '~Utils/UtilsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  utils: utilsReducer,
  storeDetail: storeDetailReducer,
  delivery: deliveryReducer,
  payment: paymentReducer,
  vehicle: vehicleReducer,
  loyalty: loyaltyReducer,
  placeOrder: placeOrderReducer,
  foodListing: foodListingReducer,
  cart: cartReducer,
  tryToCombo: tryToComboReducer,
});

export default rootReducer;
