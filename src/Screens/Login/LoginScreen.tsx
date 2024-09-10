import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {IconEmail, IconLock} from '~Components/Icons';

export const LoginScreen: FC = () => {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <IconEmail color="#aeae" />
    </View>
  );
};
