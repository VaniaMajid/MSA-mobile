// InitialsAvatar.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './InitialsAvatars.styles';

interface InitialsAvatarProps {
  name: string;
  size?: number; // Optional size prop
}

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  name,
  size = 40,
}) => {
  const styles = useStyles(); // Call the useStyles hook
  const theme = useTheme(); // Access the theme
  const getInitials = (name: string) => {
    const namesArray = name.split(' ');
    if (namesArray.length > 1) {
      return namesArray[0][0] + namesArray[1][0];
    }
    return namesArray[0][0];
  };

  const initials = getInitials(name).toUpperCase();
  const backgroundColor = getRandomColor(); // Generate a random background color

  return (
    <View
      style={[
        styles.avatar,
        {width: size, height: size, borderRadius: size / 2, backgroundColor},
      ]}>
      <Text style={[theme.fonts.subtextSmall,styles.initials]}>{initials}</Text>
    </View>
  );
};
