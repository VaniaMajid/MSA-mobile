import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '~Screens/Login';
import {SplashScreen} from '~Screens/SplashScreen';
import {
  PasswordScreen,
  PreviewFormScreen,
  RegistrationFormScreen,
  SelectRoleScreen,
  SignupEmailScreen,
} from '~Screens/Signup';
import {PreAuthParamList} from './PreAuthParamList';
import {Header} from '~Components/index';
import {useTheme} from '~Contexts/ThemeContext';
import {
  CreateNewPasswordScreen,
  ForgotPasswordEmailScreen,
  PasswordResetSuccessfulScreen,
} from '~Screens/ForgotPassword';
import {OtpScreen} from '~Screens/Otp';

const PreAuthStack = createStackNavigator<PreAuthParamList>();
export const PreAuthNavigator = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <PreAuthStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...theme.fonts.uiLabelSemiBold,
          },
        }}>
        <PreAuthStack.Group screenOptions={{headerShown: false}}>
          <PreAuthStack.Screen name="Login" component={LoginScreen} />
          <PreAuthStack.Screen name="Splash" component={SplashScreen} />
        </PreAuthStack.Group>
        <PreAuthStack.Screen
          name="ForgotPasswordEmail"
          component={ForgotPasswordEmailScreen}
          options={{
            title: 'Account Recovery',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="Otp"
          component={OtpScreen}
          options={{
            title: 'Authentication',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="CreateNewPassword"
          component={CreateNewPasswordScreen}
          options={{
            title: 'Reset Password',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="PasswordResetSuccessful"
          component={PasswordResetSuccessfulScreen}
          options={{
            title: 'Password Reset Successful',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="SelectRole"
          component={SelectRoleScreen}
          options={{
            title: 'Register As',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="SignupEmail"
          component={SignupEmailScreen}
          options={{
            title: 'Create Patient Account',
            headerLeft: ({}) => <Header />,
          }}
        />

        <PreAuthStack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{
            title: 'Set Password',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="RegistrationForm"
          component={RegistrationFormScreen}
          options={{
            title: 'Register',
            headerLeft: ({}) => <Header />,
          }}
        />
        <PreAuthStack.Screen
          name="PreviewForm"
          component={PreviewFormScreen}
          options={{
            title: 'Register',
            headerLeft: ({}) => <Header />,
          }}
        />
      </PreAuthStack.Navigator>
    </NavigationContainer>
  );
};
