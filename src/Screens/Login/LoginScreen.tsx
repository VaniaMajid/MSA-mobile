import React, {FC, useCallback, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {IconEye, IconLock, IconGoogle, IconRightArrow} from '~Components/Icons';
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
import { Path } from '~Navigators/routes';
import Colors from '~Style/Colors';

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
    navigation.navigate(Path.FORGOT_PASSWORD_EMAIL_SCREEN)
  };

  const onSubmit = (data: LoginFormType) => {
    const {email, password} = data;

    if (loginError) {
      setLoginError('Invalid email or password');
      return;
    }
    // navigation.replace('AuthNavigator', { userRole: 'patient' });
  };

  useFocusEffect(
    useCallback(() => {
      reset();
      setLoginError('');
    }, [reset]),
  );

  return (
    <ImageBackgroundWrapper>
      <View style= {styles.bg}>
        <View>
          <Text style={[styles.text, theme.fonts.headerBold, {color: Colors.black}]}>Welcome to WholeSalers App!</Text>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <InputField
                placeholder="Username or Email"
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
          <Button
            title="LOGIN"
            textStyle={theme.fonts.buttonSemiBold}
            onPress={handleSubmit(onSubmit)}
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
            title="Login with Google"
            textStyle={theme.fonts.buttonSemiBold}
            onPress={handleSubmit(onSubmit)}
            variant="outline"
            leftIcon={<IconGoogle />}
            rightIcon={<IconRightArrow/>}
          />
        </View>

        <View style={styles.register}>
          <Text style={[styles.text, theme.fonts.paragraph]}>
            Not a member?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Path.SIGNUP_SCREEN);
            }}
          >
            <Text style={[theme.fonts.buttonBold, styles.registerButton]}>
              Create an Account
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
  );
};
