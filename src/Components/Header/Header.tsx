import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';
import {IconChevronleft} from '~Components/Icons';
import {useNavigation} from '@react-navigation/native';

export const Header: FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{marginHorizontal: theme.spacing.H5}}
      onPress={() => navigation.goBack()}>
      <IconChevronleft color={theme.colors.primaryColor} size="xxxs" />
    </TouchableOpacity>
  );
};
