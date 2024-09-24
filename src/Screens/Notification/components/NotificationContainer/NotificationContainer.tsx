import React from 'react';
import { View, Text } from 'react-native';
import { IconContainer } from '~Components/IconContainer';
import { Heading } from '~Components/Heading';
import { useTheme } from '~Contexts/ThemeContext';
import { useStyles } from './NotificationContainer.styles';
import { NotificationContainerProps } from './types';
import { CustomNotificationImage } from '../CustomNotificationImage';

export const NotificationContainer: React.FC<NotificationContainerProps> = ({
  title,
  time,
  subtext,
  showBadge,
  icon,
  imageSource,
  backgroundColor,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.notificationContainer}>
      {imageSource ? (
        <CustomNotificationImage
          source={imageSource}
          showBadge={showBadge}
        />
      ) : (
        <IconContainer
          icon={icon}
          width={40}
          height={40}
          backgroundColor={backgroundColor}
          isInteractive={false}
          showBadge={showBadge}
        />
      )}

      <View style={styles.notificationTextContainer}>
        <View style={styles.headerContainer}>
          <Heading title={title} style={theme.fonts.notificationHeader} />
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.notificationSubtext}>{subtext}</Text>
      </View>
    </View>
  );
};
