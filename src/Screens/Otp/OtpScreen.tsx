import { View, Text, Alert } from 'react-native';
import React, { FC} from 'react';
import { ImageBackgroundWrapper } from 'src/HOC';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { Button } from '~Components/Button';
import { Heading } from '~Components/Heading';
import { useTheme } from '~Contexts/ThemeContext';
import { IconVerify } from '~Components/Icons';
import { PressableText } from '~Components/PressableText';
import { useStyles } from './OtpScreen.styles';
import { OtpInput } from '~Components/OtpInput';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { otpSchema } from '~Utils/validation';
import { Path } from '~Navigators/routes';

type OtpScreenProps = StackScreenProps<PreAuthParamList>;

const VALID_OTP = '123456'; 

export const OtpScreen: FC<OtpScreenProps> = ({ navigation, route }) => {
  const theme = useTheme();
  const styles = useStyles();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const { role, email, screenType } = route.params as { role: string; email: string, screenType: string };
  if (!email || !screenType) {
    throw new Error('Email and screenType are required');
  }


  const onSubmit = (data: { otp: string }) => {
    if (data.otp !== VALID_OTP) {
      setError('otp', {
        type: 'manual',
        message: 'Invalid OTP.',
      });
      return;
    }
    if (screenType === 'forgotPassword') {
      navigation.navigate(Path.CREATE_NEW_PASSWORD_SCREEN);
    } else if (screenType === 'createPassword') {
      navigation.navigate(Path.PASSWORD_SCREEN, { role }); 
    }
    reset();
  };

  const handleResend = () => {
    Alert.alert('OTP resent', `A new OTP has been sent to ${email}`);
  };
  

  return (
    <ImageBackgroundWrapper>
      <View style={styles.mainContainer}>
        <IconVerify size="xl" />
        <Heading title="Enter a verification code" style={theme.fonts.headerSmallBold} />
        <Text style={[theme.fonts.paragraphRegularSmall, { color: theme.colors.lightGray1 }]}>
          We’ve sent a code to {email}
        </Text>

        <Controller
          name="otp"
          control={control}
          render={({ field: { onChange, value } }) => (
            <OtpInput
              length={6}
              value={value}
              onChange={onChange}
              error={errors.otp?.message} 
            />
          )}
        />

        <View style={styles.container}>
          <Text style={theme.fonts.paragraphRegularSmall}>Didn’t get a code?{' '}</Text>
          <PressableText
            text="Click to resend"
            onPress={handleResend}
            style={[theme.fonts.paragraphSmallSemiBold, { color: theme.colors.primaryColor }]}
          />
        </View>
      </View>

      <View style={[styles.container, styles.buttons]}>
        <Button
          variant="outline"
          title="Cancel"
          onPress={() => navigation.goBack()}
          style={{ width: '40%' }}
        />
        <Button
          variant="filled"
          title="Verify"
          onPress={handleSubmit(onSubmit)}
          style={{ width: '40%' }}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
