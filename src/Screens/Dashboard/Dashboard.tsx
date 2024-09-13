import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Path} from '~Navigators/routes';

export const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate(Path.NOTIFICATION_SCREEN);
        }}>
        Dashboard
      </Text>
    </View>
  );
};
