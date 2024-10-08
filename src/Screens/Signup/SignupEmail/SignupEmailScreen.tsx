import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { ImageBackgroundWrapper } from 'src/HOC';
import { useTheme } from '~Contexts/ThemeContext';
import { InputField, Button, Heading} from '~Components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { useStyles } from './SignupEmailScreen.styles';
import { SignupEmailFormType } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { signupEmailSchema } from '~Utils/validation';
import { Path } from '~Navigators/routes';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const SignupEmailScreen: FC<SignupEmailScreenProps> = ({ navigation, route }) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupEmailFormType>({
    resolver: yupResolver(signupEmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const role = route?.params?.role;
  
  const onSubmit = (data: SignupEmailFormType) => {
    navigation.navigate(Path.OTP_SCREEN, { email: data.email, role, screenType: 'createPassword'});
    reset();
  };

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading title="Set up your email" style={theme.fonts.headerMediumBold} />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Enter your email to create a new patient account. We’ll send you a
            confirmation email with instructions to set up your password.
          </Text>
        </View>
       
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
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
