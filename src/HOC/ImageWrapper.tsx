import React, {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export const ImageBackgroundWrapper: FC<any> = ({children}) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
      source={require('../Assets/images/authBackground.png')}>
      {children}
    </ImageBackground>
  );
};
