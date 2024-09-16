import React, { FC, useCallback, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '~Components/Button';
import { Heading } from '~Components/Heading';
import { IconEye, IconLock } from '~Components/Icons';
import { InputField } from '~Components/TextInput';
import { useStyles } from './LoginScreen.styles';
import { Checkbox } from '~Components/Checkbox';
import { PressableText } from '~Components/PressableText';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { ImageBackgroundWrapper } from 'src/HOC';
import { useTheme } from '~Contexts/ThemeContext';
import { validateEmail, validatePassword } from '~Utils/validation';
import { useFocusEffect } from '@react-navigation/native';
import { ErrorMessage } from '~Components/Error';

type LoginScreenProps = StackScreenProps<PreAuthParamList>;

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const theme = useTheme();
 
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleCheckboxPress = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleForgotPasswordPress = () => {
    // Logic to be handled
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const emailValidationError = validateEmail(text);
    setEmailError(emailValidationError); 
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const passwordValidationError = validatePassword(text);
    setPasswordError(passwordValidationError); 
  };

  const validateInputs = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (emailValidationError) {
      setEmailError(emailValidationError);
      isValid = false;
    }

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      isValid = false;
    }

    return isValid;
  };

  const handleLoginPress = () => {
    if (validateInputs()) {

    }
  };

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setLoginError('');
      setIsChecked(false);
    }, [])
  );

  return (
    <ImageBackgroundWrapper>
      <Image source={require('../../Assets/images/nameLogo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Heading style={theme.fonts.headerBold} title="Login" />

        <InputField
          title="Email"
          placeholder="yourname@example.com"
          value={email}
          onChangeText={handleEmailChange} 
          errorMessage={emailError}
        />

        <InputField
          title="Password"
          placeholder=""
          isPassword={true}
          leftIcon={<IconLock />}
          rightIcon={<IconEye />}
          value={password}
          onChangeText={handlePasswordChange}
          errorMessage={passwordError}
        />

        <View style={styles.row}>
          <Checkbox
            text={<Text style={[theme.fonts.labelMedium, { marginLeft: 10 }]}>Remember me</Text>}
            isChecked={isChecked}
            onPress={handleCheckboxPress}
            style={{ width: 200 }}
            textStyle={styles.checkboxText}
          />
          <PressableText
            text="Forgot Password?"
            onPress={handleForgotPasswordPress}
            style={[theme.fonts.linkBold, styles.forgotPass]}
          />
        </View>

        {loginError ?  <ErrorMessage message={loginError}/>  : null}
        <Button title="Login" textStyle={theme.fonts.buttonSemiBold} onPress={handleLoginPress} />
      </View>

      <View style={styles.register}>
        <Text style={[styles.text, theme.fonts.paragraph]}>Don't have an account?</Text>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate('SelectRole');
          }}
          textStyle={theme.fonts.buttonSemiBold}
          style={{ width: '100%' }}
          variant="outline"
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
