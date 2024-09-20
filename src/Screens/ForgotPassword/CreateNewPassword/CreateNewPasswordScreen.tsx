import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {useTheme} from '~Contexts/ThemeContext';
import {
  InputField,
  Button,
  Heading,
  IconLock,
  IconEye,
} from '~Components/index';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {CreateNewPasswordFormType} from './types';
import {passwordSchema} from '~Utils/validation';
import {useStyles} from './CreateNewPasswordScreen.styles';
import { Path } from '~Navigators/routes';

type CreateNewPasswordScreenProps = StackScreenProps<PreAuthParamList>;

export const CreateNewPasswordScreen: FC<CreateNewPasswordScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<CreateNewPasswordFormType>({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: CreateNewPasswordFormType) => {
    navigation.navigate(Path.PASSWORD_RESET_SUCCESSFUL_SCREEN);
    reset();
  };
  

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Create a new password"
            style={theme.fonts.headerMediumBold}
          />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Your new password must be different from previously used passwords.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Controller
              name="password"
              control={control}
              render={({field: {onChange, value}}) => (
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
              Passwords must be at least 8 characters long and include a special
              character, an uppercase letter, and a lowercase letter.
            </Text>
          </View>

          <View>
            <Controller
              name="confirmPassword"
              control={control}
              render={({field: {onChange, value}}) => (
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
