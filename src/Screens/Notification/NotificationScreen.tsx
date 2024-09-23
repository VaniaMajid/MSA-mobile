import {View, Text} from 'react-native';
import React from 'react';
import { useStyles } from './NotificationScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';

export const NotificationScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};
