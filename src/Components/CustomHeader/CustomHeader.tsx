import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Path} from '~Navigators/routes';
import {IconHamburger, IconNotification} from '~Components/Icons';
import {useStyles} from './CustomHeader.styles';
import {CustomHeaderProps} from './types';

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  navigation,
  title,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IconHamburger size='xxs'/>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Path.NOTIFICATION_SCREEN);
        }}
        style={styles.notificationIcon}>
        <IconNotification size='xxs'/>
      </TouchableOpacity>
    </View>
  );
};
