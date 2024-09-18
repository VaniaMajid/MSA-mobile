import React, {FC, useCallback, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {IconEye, IconLock} from '~Components/Icons';
import {InputField} from '~Components/TextInput';
import {useStyles} from './LoginScreen.styles';
import {Checkbox} from '~Components/Checkbox';
import {PressableText} from '~Components/PressableText';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {useForm, Controller} from 'react-hook-form';
import {useFocusEffect} from '@react-navigation/native';
import {ErrorMessage} from '~Components/Error';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '~Utils/validation';
import { LoginFormType } from './types';

type LoginScreenProps = StackScreenProps<PreAuthParamList>;

export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginFormType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const [loginError, setLoginError] = useState('');

  const handleForgotPasswordPress = () => {
    // Logic to be handled
  };

  const onSubmit = (data: LoginFormType) => {
    const {email, password} = data;

    console.log('Login Data:', data);

    if (loginError) {
      setLoginError('Invalid email or password');
      return;
    }
  };

  useFocusEffect(
    useCallback(() => {
      reset();
      setLoginError('');
    }, [reset]),
  );

  return (
    <ImageBackgroundWrapper>
      <Image
        source={require('../../Assets/images/nameLogo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Heading style={theme.fonts.headerBold} title="Login" />

        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <InputField
              title="Email"
              placeholder="yourname@example.com"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <InputField
              title="Password"
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

        <View style={styles.row}>
          <Controller
            control={control}
            name="rememberMe"
            render={({field: {onChange, value}}) => (
              <Checkbox
                text={
                  <Text style={[theme.fonts.labelMedium, {marginLeft: 10}]}>
                    Remember me
                  </Text>
                }
                isChecked={value}
                onPress={checked => onChange(checked)}
                style={{width: 200}}
                textStyle={styles.checkboxText}
              />
            )}
          />
          <PressableText
            text="Forgot Password?"
            onPress={handleForgotPasswordPress}
            style={[theme.fonts.linkBold, styles.forgotPass]}
          />
        </View>

        {loginError ? <ErrorMessage message={loginError} /> : null}

        <Button
          title="Login"
          textStyle={theme.fonts.buttonSemiBold}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={styles.register}>
        <Text style={[styles.text, theme.fonts.paragraph]}>
          Don't have an account?
        </Text>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate('SelectRole');
          }}
          textStyle={theme.fonts.buttonSemiBold}
          style={{width: '100%'}}
          variant="outline"
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
