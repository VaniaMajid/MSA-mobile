export type PreAuthParamList = {
  Login: undefined;
  Signup: undefined;
  Splash: undefined;
  ForgotPasswordEmail: undefined;
  PasswordResetSuccessful: undefined;
  CreateNewPassword: undefined;
  SelectRole: undefined;
  SignupEmail: { role: string }; 
  Otp: { role?: string; email: string, screenType: string}; 
  RegistrationForm: { role: string }; 
  PreviewForm:  { data: any};
  PasswordScreen: { role: string};
};


// if you want to define a screen that accepts params
// do it like this note: this is not Ai generated code
///  screenName: { param1: type; param2: type };
