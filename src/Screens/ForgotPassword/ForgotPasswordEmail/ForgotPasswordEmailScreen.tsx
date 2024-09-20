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

type ForgotPasswordEmailScreenProps = StackScreenProps<PreAuthParamList>;

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
    navigation.navigate(Path.OTP_SCREEN, {
      email: data.email,
      screenType: 'forgotPassword',
    });
    reset();
  };

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Forgot Password?"
            style={theme.fonts.headerMediumBold}
          />
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
          textStyle={theme.fonts.buttonSemiBold}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
