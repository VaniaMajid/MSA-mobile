import React, { FC } from 'react';
import {View} from 'react-native';
import {
  IconHomeActive,
  IconHomeInActive,
  IconMedicalInfoActive,
  IconMedicalInfoInActive,
  IconAppinionsActive,
  IconAppinionsInActive,
  IconProfileActive,
  IconProfileInActive,
} from '~Components/Icons'
import { useTheme } from '~Contexts/ThemeContext';
import { TabBarIconProps } from './types';

export const TabBarIcon: FC<TabBarIconProps> = ({routeName, focused}) => {
  const theme = useTheme();
    switch (routeName) {
    case 'HomeStack':
      return focused ? (
        <IconHomeActive color={theme.colors.primaryColor} size="xxs" />
      ) : (
        <IconHomeInActive color={theme.colors.accentColor} size="xxs" />
      );

    case 'MedicalInfoStack':
      return focused ? (
        <IconMedicalInfoActive color={theme.colors.primaryColor} size="xxs" />
      ) : (
        <IconMedicalInfoInActive color={theme.colors.accentColor} size="xxs" />
      );

    case 'Appinions':
      return focused ? (
        <IconAppinionsActive color={theme.colors.primaryColor} size="xxs" />
      ) : (
        <IconAppinionsInActive color={theme.colors.accentColor} size="xxs" />
      );

    case 'Profile':
      return focused ? (
        <IconProfileActive color={theme.colors.primaryColor} size="xxs" />
      ) : (
        <IconProfileInActive color={theme.colors.accentColor} size="xxs" />
      );

    default:
      return <View />;
  }
};
