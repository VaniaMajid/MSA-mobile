import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
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

type OtpScreenProps = StackScreenProps<PreAuthParamList>;

export const OtpScreen: FC<OtpScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [otp, setOtp] = useState('');

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };
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
        <OtpInput length={6} onChange={handleOtpChange} />
        <View style={styles.container}>
          <Text style={theme.fonts.paragraphRegularSmall}>
            Didn’t get a code?{' '}
          </Text>
          <PressableText
            text="Click to resend"
            onPress={() => {}}
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
          onPress={() => {}}
          style={{width: '40%'}}
        />
        <Button
          variant="filled"
          title="Verify"
          onPress={() => {
            navigation.navigate('PasswordScreen');
          }}
          style={{width: '40%'}}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
