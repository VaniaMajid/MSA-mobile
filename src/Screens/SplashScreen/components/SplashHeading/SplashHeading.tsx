import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './SplashHeading.styles';

interface SplashHeadingProps {
  superHeading?: string;
  heading?: string;
  subHeading?: string;
}

const SplashHeading: FC<SplashHeadingProps> = ({ superHeading, heading, subHeading }) => {
  const styles = useStyles(); 

  return (
    <View style={styles.container}>
      {superHeading && <Text style={styles.superSubHeading}>{superHeading}</Text>}
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {subHeading && <Text style={styles.superSubHeading}>{subHeading}</Text>}
    </View>
  );
};

export default SplashHeading;
