import React, {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export const ImageBackgroundWrapper: FC<any> = ({children}) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
      }}
      source={require('../Assets/images/authBackground.png')}>
      {children}
    </ImageBackground>
  );
};
