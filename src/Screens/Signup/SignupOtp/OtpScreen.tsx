import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {Button} from '~Components/Button';

type OtpScreenProps = StackScreenProps<PreAuthParamList>;

export const OtpScreen: FC<OtpScreenProps> = ({navigation}) => {
  return (
    <ImageBackgroundWrapper>
      <Text>OtpScreen</Text>
      <Button variant="outline" title="cancel" onPress={() => {}} />
      <Button
        variant="filled"
        title="Verify"
        onPress={() => {
          navigation.navigate('PasswordScreen');
        }}
      />
    </ImageBackgroundWrapper>
  );
};
