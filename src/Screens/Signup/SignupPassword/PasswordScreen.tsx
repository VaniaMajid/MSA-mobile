import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {useStyles} from './PasswordScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {InputField, Button} from '~Components/index';

type PasswordScreenProps = StackScreenProps<PreAuthParamList>;
export const PasswordScreen: FC<PasswordScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Set up your password</Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: theme.spacing.V1,
            color: theme.colors.lightGray1,
          }}>
          Enter your email to create a new patient account. We’ll send you a
          confirmation email with instructions to set up your password.
        </Text>
        <View style={{marginTop: theme.spacing.V3}}>
          <InputField title="Password" placeholder="Enter your password" />
          <Text
            style={{
              color: theme.colors.lightGray1,
              marginVertical: theme.spacing.V2,
            }}>
            Passwords must be at least 8 characters long and include a special
            character.
          </Text>
          <InputField
            title="Confirm Password"
            placeholder="Enter your password"
          />
          <Text
            style={{
              color: theme.colors.lightGray1,
              marginVertical: theme.spacing.V1,
            }}>
            Both Password should match
          </Text>

          <Button
            title="Set Password"
            style={{marginTop: theme.spacing.V3}}
            onPress={() => {
              navigation.navigate('RegistrationForm');
            }}
          />
        </View>
      </View>
    </ImageBackgroundWrapper>
  );
};
