import { View, Text } from 'react-native';
import React, { FC, useCallback } from 'react';
import { ImageBackgroundWrapper } from 'src/HOC';
import { StackScreenProps } from '@react-navigation/stack';
import { PreAuthParamList } from '~Navigators/PreAuthParamList';
import { useStyles } from './PasswordScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { InputField, Button, Heading, IconLock, IconEye } from '~Components/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useFocusEffect } from '@react-navigation/native';
import { PasswordFormType } from './types';
import { passwordSchema } from '~Utils/validation';


type PasswordScreenProps = StackScreenProps<PreAuthParamList>;

export const PasswordScreen: FC<PasswordScreenProps> = ({ navigation, route }) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormType>({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const role = route?.params?.role;
  if (!role) {
    throw new Error('Role is required');
  }


  const onSubmit = (data: PasswordFormType) => {
    navigation.navigate('RegistrationForm', { role: role });
  };

  useFocusEffect(
    useCallback(() => {
      reset();
    }, [reset]),
  );

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading title="Set up your password" style={theme.fonts.headerMediumBold} />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Create a secure password for your account. This will be used to access your {role.toLowerCase()} profile and services.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputField
                  title="Password"
                  placeholder="Enter your password"
                  isPassword={true}
                  leftIcon={<IconLock />}
                  rightIcon={<IconEye />}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Passwords must be at least 8 characters long and include a special character, an uppercase letter, and a lowercase letter.
            </Text>
          </View>

          <View>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputField
                  title="Confirm password"
                  placeholder="Confirm your password"
                  isPassword={true}
                  leftIcon={<IconLock />}
                  rightIcon={<IconEye />}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
            <Text style={[theme.fonts.subtextSmall, styles.text]}>
              Both passwords should match.
            </Text>
          </View>
        </View>

        <Button
          title="Set Password"
          onPress={handleSubmit(onSubmit)}
          textStyle={theme.fonts.buttonSemiBold}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
