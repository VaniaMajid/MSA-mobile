import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';
import { useStyles } from './InfoRow.styles';
import { InfoRowProps } from './types';

export const InfoRow: FC<InfoRowProps> = ({
  label,
  value,
  labelStyle,
  valueStyle,
  containerStyle,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const renderValue = () => {
    if (label === 'Allergy') {
      const allergyList = value.split(',').map((item, index) => (
        <Text
          key={index}
          style={[theme.fonts.inputFieldSmall, styles.value, valueStyle]}
        >
          {item.trim()}
        </Text>
      ));
      return <View style={styles.list}>{allergyList}</View>;
    }

    return (
      <Text
        style={[
          theme.fonts.inputFieldSmall,
          { color: theme.colors.darkBlue },
          valueStyle,
        ]}
      >
        {value}
      </Text>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[
          theme.fonts.linkSemiBold,
          { color: theme.colors.darkBlue },
          labelStyle,
        ]}
      >
        {label}
      </Text>
      {renderValue()}
    </View>
  );
};
