import React, { FC } from 'react';
import {View} from 'react-native';
import {
  IconHomeActive,
  IconHomeInActive,
  IconProfileActive,
  IconProfileInActive,
  IconToolsInactive,
  IconToolsActive,
  IconMessageActive,
  IconMessageInactive,
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

    case 'ToolsStack':
      return focused ? (
        <IconToolsActive color={theme.colors.primaryColor} size="xxxs" />
      ) : (
        <IconToolsInactive color={theme.colors.accentColor} size="xxxs" />
      );

    case 'Chat':
      return focused ? (
        <IconMessageActive size="xxs" />
      ) : (
        <IconMessageInactive size="xxs" />
      );

    case 'ProfileStack':
      return focused ? (
        <IconProfileActive color={theme.colors.primaryColor} size="xxs" />
      ) : (
        <IconProfileInActive color={theme.colors.accentColor} size="xxs" />
      );

    default:
      return <View />;
  }
};
