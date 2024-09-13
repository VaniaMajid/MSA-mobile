import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {InputField, Button, Heading} from '~Components/index';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {useStyles} from './SignupEmailScreen.styles';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;
export const SignupEmailScreen: FC<SignupEmailScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <View>
          <Heading
            title="Set up your email"
            style={theme.fonts.headerMediumBold}
          />
          <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
            Enter your email to create a new patient account. We’ll send you a
            confirmation email with instructions to set up your password.
          </Text>
        </View>

        <InputField title="Email" placeholder="Enter your email" />

        <Button
          title="Verify Email"
          onPress={() => {
            navigation.navigate('SignupOtp');
          }}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
