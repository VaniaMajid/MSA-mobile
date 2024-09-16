import {View, Text} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {useStyles} from './PasswordScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {
  InputField,
  Button,
  Heading,
  IconLock,
  IconEye,
} from '~Components/index';
import {validateConfirmPassword, validateNewPassword} from '~Utils/validation';
import { useFocusEffect } from '@react-navigation/native';

type PasswordScreenProps = StackScreenProps<PreAuthParamList>;

export const PasswordScreen: FC<PasswordScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const passwordValidationError = validateNewPassword(text);
    setPasswordError(passwordValidationError);
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    const confirmPasswordValidationError = validateConfirmPassword(
      text,
      password,
    );
    setConfirmPasswordError(confirmPasswordValidationError);
  };

  const handleSetPasswordPress = () => {
    setPasswordError('');
    setConfirmPasswordError('');

    const passwordValidationError = validateNewPassword(password);
    const confirmPasswordValidationError = validateConfirmPassword(
      confirmPassword,
      password,
    );

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
    }

    if (confirmPasswordValidationError) {
      setConfirmPasswordError(confirmPasswordValidationError);
    }

    if (!passwordValidationError && !confirmPasswordValidationError) {
      navigation.navigate('RegistrationForm');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setPassword('');
      setPasswordError('');
      setConfirmPassword('');
      setConfirmPasswordError('');
    }, [])
  );


  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Set up your password"
            style={theme.fonts.headerMediumBold}
          />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Create a secure password for your account. This will be used to
            access your patient profile and services.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <InputField
              title="Password"
              placeholder="Enter your password"
              isPassword={true}
              leftIcon={<IconLock />}
              rightIcon={<IconEye />}
              value={password}
              onChangeText={handlePasswordChange}
              errorMessage={passwordError}
            />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Passwords must be at least 8 characters long and include a special
              character.
            </Text>
          </View>
          <View>
            <InputField
              title="Confirm password"
              placeholder="Confrim your password"
              isPassword={true}
              leftIcon={<IconLock />}
              rightIcon={<IconEye />}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              errorMessage={confirmPasswordError}
            />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Both passwords should match.
            </Text>
          </View>
        </View>

        <Button
          title="Set Password"
          onPress={handleSetPasswordPress}
          textStyle={theme.fonts.buttonSemiBold}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
