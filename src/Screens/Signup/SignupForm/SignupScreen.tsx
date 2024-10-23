import React, { FC, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '~Components/Button';
import { Heading } from '~Components/Heading';
import { IconEye, IconLock, IconGoogle, IconRightArrow } from '~Components/Icons';
import { InputField } from '~Components/TextInput';
import { useStyles } from './SignupScreen.styles';
import { Checkbox } from '~Components/Checkbox';
import { PressableText } from '~Components/PressableText';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { ImageBackgroundWrapper } from 'src/HOC';
import { useTheme } from '~Contexts/ThemeContext';
import { useForm, Controller } from 'react-hook-form';
import { useFocusEffect } from '@react-navigation/native';
import { ErrorMessage } from '~Components/Error';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '~Utils/validation';
import { SignupFormType } from './types';
import { Path } from '~Navigators/routes';
import Colors from '~Style/Colors';

type SignupScreenProps = StackScreenProps<PreAuthParamList>;

export const SignupScreen: FC<SignupScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      cnic: '',
      address: '',
      city: '',
    },
  });

  const [signupError, setsignupError] = useState('');

  const handleForgotPasswordPress = () => {
    navigation.navigate(Path.FORGOT_PASSWORD_EMAIL_SCREEN);
  };

  const onSubmit = (data: SignupFormType) => {
    const { email, password } = data;

    if (signupError) {
      setsignupError('Invalid email or password');
      return;
    }
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      cnic: data.cnic,
      address: data.address,
      city: data.city,
    };
    navigation.navigate(Path.PREVIEW_FORM_SCREEN, {
      data: formData,
    });
    // navigation.replace('AuthNavigator', { userRole: 'patient' });
  };

  useFocusEffect(
    useCallback(() => {
      reset();
      setsignupError('');
    }, [reset]),
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
    >
      <ImageBackgroundWrapper>
        <View style={styles.bg}>
          <View>
            <Text style={[styles.text, theme.fonts.headerBold, { color: Colors.black }]}>
              Create an Account
            </Text>
          </View>
          <View style={styles.form}>
            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
              <Controller
                
                control={control}
                name="firstName"
                render={({ field: { onChange, value } }) => (
                  <InputField
                    style={{width: 140}}
                    placeholder="First Name"
                    value={value}
                    onChangeText={onChange}
                    errorMessage= {errors.firstName?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value } }) => (
                  <InputField
                    style={{width: 140}}
                    placeholder="Last Name"
                    value={value}
                    onChangeText={onChange}
                    errorMessage= {errors.lastName?.message}
                  />
                )}
              />
            </View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Enter your Email"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder=""
                  isPassword={true}
                  leftIcon={<IconLock />}
                  rightIcon={<IconEye />}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Phone Number"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.phoneNumber?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="cnic"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="CNIC"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.cnic?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Address"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.address?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="City"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.city?.message}
                />
              )}
            />
            <Button
              title="SIGNUP"
              textStyle={theme.fonts.paragraphRegular}
              onPress={handleSubmit(onSubmit)}
            />
            {signupError ? <ErrorMessage message={signupError} /> : null}

            <Button
              title="Signup with Google"
              textStyle={theme.fonts.buttonSemiBold}
              onPress={handleSubmit(onSubmit)}
              variant="outline"
              leftIcon={<IconGoogle />}
              rightIcon={<IconRightArrow />}
            />
          </View>

          <View style={styles.register}>
            <Text style={[styles.text, theme.fonts.paragraph]}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Path.LOGIN_SCREEN);
              }}
            >
              <Text style={[theme.fonts.buttonBold, styles.registerButton]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.bottomText, theme.fonts.subtextSmall]}>
              Deliver All Over Pakistan in 10-15 days 🛻
            </Text>
          </View>
        </View>
      </ImageBackgroundWrapper>
    </KeyboardAvoidingView>
  );
};
