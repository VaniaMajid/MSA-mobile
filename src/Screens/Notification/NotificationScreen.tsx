import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { useStyles } from './NotificationScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { IconPayment, IconUser } from '~Components/Icons';
import { NotificationContainer } from './components';

export const NotificationScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Today</Text>
      <View style={{ gap: theme.spacing.HGap1 }}>
        <NotificationContainer
          title="Message from Ali"
          time="Today at 9:42 AM"
          subtext="Dr Halt, has responded to your query. Click here for revealing the details."
          showBadge={true}
          imageSource={require('../../Assets/images/onboarding1.png')}
          backgroundColor={theme.colors.primaryColor} 
        />
        <NotificationContainer
          title="Order Placed"
          time="Today at 9:42 AM"
          subtext="Your order has been successfully placed with order ID #123456."
          showBadge={true}
          imageSource={require('../../Assets/images/productImg1.png')}
          backgroundColor={theme.colors.primaryColor} 
        />
        <NotificationContainer
          title="Order Cancelled"
          time="Today at 9:42 AM"
          subtext="Your order has been cancelled. The order ID is #123456."
          showBadge={true}
          imageSource={require('../../Assets/images/productImg2.png')}
          backgroundColor={theme.colors.primaryColor} 
        />
        <NotificationContainer
          title="Payment Successful"
          time="Today at 9:42 AM"
          subtext="Your payment through stripe has been successfully proceeded."
          showBadge={true}
          icon={<IconPayment color={theme.colors.white} size="ss" />}
          backgroundColor={theme.colors.primaryColor}
        />

        <NotificationContainer
          title="Feedback Received"
          time="Today at 9:59 AM"
          subtext="Your feedback has been successfully submitted."
          showBadge={false}
          icon={<IconUser color={theme.colors.white} size="ss" />}
          backgroundColor={theme.colors.primaryColor}
        />
      </View>
    </ScrollView>
  );
};
