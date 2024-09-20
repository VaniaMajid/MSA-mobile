import {View, Text} from 'react-native';
import React, { FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Path } from '~Navigators/routes';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';

type DashboardScreenProps = StackScreenProps<AuthParamList>;

export const Dashboard: FC<DashboardScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate(Path.NOTIFICATION_SCREEN)
        }}>
        Dashboard
      </Text>
    </View>
  );
};
