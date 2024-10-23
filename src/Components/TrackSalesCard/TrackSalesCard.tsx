import React, { FC } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useStyles } from './TrackSalesCard.styles';
import { useTheme } from '~Contexts/ThemeContext';

type TrackSalesCardProps = {
  mainHeading?: string; // The main heading to show total orders or sales in Rs.
  subHeading?: string; // The subheading like "Today's revenue" or "Total Orders"
  icon?: React.ReactNode; // Icon on the top right corner
  backgroundColor?: string; // Background color for the card
  mainHeadingColor?: string; // Color for the main heading text
  subHeadingColor?: string; // Color for the subheading text
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const TrackSalesCard: FC<TrackSalesCardProps> = ({
  mainHeading,
  subHeading,
  icon,
  backgroundColor,
  mainHeadingColor,
  subHeadingColor,
  style,
  textStyle,
}) => {
  const styles = useStyles(backgroundColor, mainHeadingColor, subHeadingColor);
  const theme = useTheme();

  return (
    <View style={[styles.cardContainer, style]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.content}>
        {mainHeading && (
          <Text style={[theme.fonts.paragraphSemiBold, styles.mainHeading]}>
            {mainHeading}
          </Text>
        )}
        {subHeading && (
          <Text style={[theme.fonts.paragraphRegularSmall, textStyle, styles.subHeading]}>
            {subHeading}
          </Text>
        )}
      </View>
    </View>
  );
};
