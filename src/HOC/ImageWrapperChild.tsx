import React, {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export const ImageBackgroundWrapperChild: FC<any> = ({children}) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
      source={require('../Assets/images/authBackground2.png')}>
      {children}
    </ImageBackground>
  );
};
