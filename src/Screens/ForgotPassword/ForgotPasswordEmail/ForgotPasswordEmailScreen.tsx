import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {InputField, Button, Heading, ErrorMessage} from '~Components/index';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {signupEmailSchema} from '~Utils/validation';
import {useStyles} from './ForgotPasswordEmailScreen.styles';
import {ForgotPasswordEmailFormType} from './types';
import { Path } from '~Navigators/routes';
import Colors from '~Style/Colors';
type ForgotPasswordEmailScreenProps = StackScreenProps<PreAuthParamList>;
import axios from 'axios';
import { BASE_URL } from '~Constants/index';

export const ForgotPasswordEmailScreen: FC<ForgotPasswordEmailScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ForgotPasswordEmailFormType>({
    resolver: yupResolver(signupEmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgotPasswordEmailFormType) => {
    axios.post(`${BASE_URL}/auth/request-otp`, {
      email: data.email,
      role: 'buyer',
    })
    .then(response => {
      console.log('OTP request successful', response.data);
      navigation.navigate(Path.OTP_SCREEN, {
        email: data.email,
        role: 'buyer',
        screenType: 'forgotPassword',
      });
    })
    .catch(error => {
      console.error('Error requesting OTP', error.message);
    });

    reset();
  };

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={[styles.text, theme.fonts.headerBold, {color: Colors.black}]}>Forgot Password?</Text>
          </View>
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Enter the email associated with your account. We will send you an
            OTP for verification.
          </Text>
        </View>

        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              title="Email"
              placeholder="Enter your email"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Button
          title="Verify Email"
          onPress={handleSubmit(onSubmit)}
          textStyle={[theme.fonts.buttonSemiBold]}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
