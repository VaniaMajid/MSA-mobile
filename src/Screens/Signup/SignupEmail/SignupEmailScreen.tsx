import React, { FC, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ImageBackgroundWrapper } from 'src/HOC';
import { useTheme } from '~Contexts/ThemeContext';
import { InputField, Button, Heading, ErrorMessage } from '~Components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { useStyles } from './SignupEmailScreen.styles';
import { validateEmail } from '~Utils/validation';
import { useFocusEffect } from '@react-navigation/native';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const SignupEmailScreen: FC<SignupEmailScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const emailValidationError = validateEmail(text);
    setEmailError(emailValidationError); 
  };

  const handleVerifyEmailPress = () => {
    setEmailError('');
    setSubmissionError('');

    const emailValidationError = validateEmail(email);

    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }
    navigation.navigate('SignupOtp');
  };

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setEmailError('');
    }, [])
  );



  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Set up your email"
            style={theme.fonts.headerMediumBold}
          />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Enter your email to create a new patient account. We’ll send you a
            confirmation email with instructions to set up your password.
          </Text>
        </View>

        <InputField
          title="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange} 
          errorMessage={emailError} 
        />

        {submissionError ? (
           <ErrorMessage message={submissionError}/> 
        ) : null}

        <Button
          title="Verify Email"
          onPress={handleVerifyEmailPress}
          textStyle={theme.fonts.buttonSemiBold}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
