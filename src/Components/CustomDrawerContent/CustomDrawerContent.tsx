import React from 'react';
import {View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useTheme} from '~Contexts/ThemeContext';
import {IconSignOut} from '~Components/Icons';
import { useStyles } from './CustomDrawerContent.styles';
import { Path } from '~Navigators/routes';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const theme = useTheme();
  const styles = useStyles();

  const handleLogout = () => {
    console.log('Logout pressed');
    // props.navigation.navigate(Path.LOGIN_SCREEN); 
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainer}>
      <DrawerItemList {...props} />
      <View style={{marginTop: 'auto', marginBottom: theme.spacing.V5}}>
        <DrawerItem
          label="Sign Out"
          icon={() => <IconSignOut color={theme.colors.error}/>}
          onPress={handleLogout}
          labelStyle={styles.label}
        />
      </View>
    </DrawerContentScrollView>
  );
};
