import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '~Screens/Login';
import {SplashScreen} from '~Screens/SplashScreen';
import {
  OtpScreen,
  RegistrationFormScreen,
  SelectRoleScreen,
  SignupEmailScreen,
} from '~Screens/Signup';
import {PreAuthParamList} from './PreAuthParamList';
import {Header} from '~Components/index';

const PreAuthStack = createStackNavigator<PreAuthParamList>();
export const PreAuthNavigator = () => {
  return (
    <NavigationContainer>
      <PreAuthStack.Navigator initialRouteName="Splash">
        <PreAuthStack.Group screenOptions={{headerShown: false}}>
          <PreAuthStack.Screen name="Login" component={LoginScreen} />
          <PreAuthStack.Screen name="Splash" component={SplashScreen} />
        </PreAuthStack.Group>
        <PreAuthStack.Screen
          name="SelectRole"
          component={SelectRoleScreen}
          options={{
            title: 'Create Patient Account',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen name="SignupEmail" component={SignupEmailScreen} />
        <PreAuthStack.Screen name="SignupOtp" component={OtpScreen} />
        <PreAuthStack.Screen
          name="RegistrationForm"
          component={RegistrationFormScreen}
        />
      </PreAuthStack.Navigator>
    </NavigationContainer>
  );
};
