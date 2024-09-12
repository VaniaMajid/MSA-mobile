import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './SplashHeading.styles';
import { useTheme } from '~Contexts/ThemeContext';

interface SplashHeadingProps {
  superHeading?: string;
  heading?: string;
  subHeading?: string;
}

const SplashHeading: FC<SplashHeadingProps> = ({ superHeading, heading, subHeading }) => {
  const styles = useStyles(); 
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {superHeading && <Text style={[theme.fonts.subtextBlack, styles.superSubHeading]}>{superHeading}</Text>}
      {heading && <Text style={[theme.fonts.largeHeaderBlack, styles.heading]}>{heading}</Text>}
      {subHeading && <Text style={[theme.fonts.subtextBlack, styles.superSubHeading]}>{subHeading}</Text>}
    </View>
  );
};

export default SplashHeading;
