import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useStyles} from '~Screens/Signup/SelectRole/SelectRole.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {InputField, Button} from '~Components/index';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;
export const SignupEmailScreen: FC<SignupEmailScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Set up your email</Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: theme.spacing.V1,
            color: theme.colors.lightGray1,
          }}>
          Enter your email to create a new patient account. We’ll send you a
          confirmation email with instructions to set up your password.
        </Text>
        <View style={{marginTop: theme.spacing.V2}}>
          <InputField title="Email" placeholder="Enter your email" />
        </View>
        <Button
          title="Verify Email"
          onPress={() => {
            navigation.navigate('SignupOtp');
          }}
          style={{marginTop: theme.spacing.V3}}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
