import {View, Text} from 'react-native';
import React, { FC } from 'react';
import {useStyles} from './MedicalInfoScreen.styles';
import { Button } from '~Components/Button';
import { IconAdd } from '~Components/Icons';
import { useTheme } from '~Contexts/ThemeContext';
import { AuthParamList } from '~Navigators/AuthParamList';
import { StackScreenProps } from '@react-navigation/stack';
import { Path } from '~Navigators/routes';

type MedicalInfoScreenProps = StackScreenProps<AuthParamList>;

export const MedicalInfoScreen: FC<MedicalInfoScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text>MedicalInfoScreen</Text>
      <Button
        onPress={() => {navigation.navigate(Path.ADD_MEDICAL_INFO_SCREEN)}}
        variant="filled"
        icon={<IconAdd color={theme.colors.white} size="xxs" />}
        style={styles.addButton}
      />
    </View>
  );
};
