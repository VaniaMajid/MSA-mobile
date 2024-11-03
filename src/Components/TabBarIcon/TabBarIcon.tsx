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
  IconWhislistActive,
  IconWishlistInactive,
  IconCategoriesActive,
  IconCategoriesInactive,
  IconCartActive,
  IconCartInactive,
} from '~Components/Icons'
import { useTheme } from '~Contexts/ThemeContext';
import { TabBarIconProps } from './types';

export const TabBarIcon: FC<TabBarIconProps> = ({routeName, focused}) => {
  const theme = useTheme();
    switch (routeName) {
    case 'HomeStack':
      return focused ? (
        <IconHomeActive color={theme.colors.white} size="xxs" />
      ) : (
        <IconHomeInActive color={theme.colors.accentColor} size="xxs" />
      );

    case 'WishlistStack':
    return focused ? (
      <IconWhislistActive color={theme.colors.white} size="xxs" />
    ) : (
      <IconWishlistInactive color={theme.colors.accentColor} size="xxs" />
    );

    case 'ToolsStack':
      return focused ? (
        <IconCategoriesActive color={theme.colors.primaryColor} size="xs" />
      ) : (
        <IconCategoriesInactive color={theme.colors.accentColor} size="xs" />
      );

    case 'CartStack':
      return focused ? (
        <IconCartActive size="xxs" />
      ) : (
        <IconCartInactive size="xxs" />
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
