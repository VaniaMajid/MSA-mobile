import {View, Text, Alert} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {useTheme} from '~Contexts/ThemeContext';
import {IconVerify} from '~Components/Icons';
import {PressableText} from '~Components/PressableText';
import {useStyles} from './OtpScreen.styles';
import {OtpInput} from '~Components/OtpInput';
import {useFocusEffect} from '@react-navigation/native';
import {ErrorMessage} from '~Components/Error';

type OtpScreenProps = StackScreenProps<PreAuthParamList>;

const VALID_OTP = '123456'; 

export const OtpScreen: FC<OtpScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleOtpChange = (value: string) => {
    setOtp(value);
    setError(null);
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    if (otp !== VALID_OTP) {
      setError('Invalid OTP. Please try again.');
      return;
    }
    navigation.navigate('PasswordScreen');
  };

  const handleResend = () => {
    //temporary logic
    Alert.alert('OTP resent', 'A new OTP has been sent to example@gmail.com.');
  };

  useFocusEffect(
    useCallback(() => {
      setOtp('');
      setError(null);
    }, []),
  );

  return (
    <ImageBackgroundWrapper>
      <View style={styles.mainContainer}>
        <IconVerify size="xl" />
        <Heading
          title="Enter a verification code"
          style={theme.fonts.headerSmallBold}
        />
        <Text
          style={[
            theme.fonts.paragraphRegularSmall,
            {color: theme.colors.lightGray1},
          ]}>
          We’ve sent a code to example@gmail.com
        </Text>
        <OtpInput length={6} value={otp} onChange={handleOtpChange} error={error}/>
        <View style={styles.container}>
          <Text style={theme.fonts.paragraphRegularSmall}>
            Didn’t get a code?{' '}
          </Text>
          <PressableText
            text="Click to resend"
            onPress={handleResend}
            style={[
              theme.fonts.paragraphSmallSemiBold,
              {color: theme.colors.primaryColor},
            ]}
          />
        </View>
      </View>
      <View style={[styles.container, styles.buttons]}>
        <Button
          variant="outline"
          title="Cancel"
          onPress={() => {
            navigation.goBack();
          }}
          style={{width: '40%'}}
        />
        <Button
          variant="filled"
          title="Verify"
          onPress={handleVerify}
          style={{width: '40%'}}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
