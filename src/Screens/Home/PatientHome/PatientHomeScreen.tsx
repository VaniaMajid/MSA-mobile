import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Path} from '~Navigators/routes';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './PatientHomeScreen.styles';
import {Heading} from '~Components/Heading';
import {useTheme} from '~Contexts/ThemeContext';
import {
  IconCardiology,
  IconDermatology,
  IconEmail,
  IconNeurology,
  IconRespiratory,
} from '~Components/Icons';
import IconContainer from '~Components/IconContainer/IconContainer';

type PatientHomeScreenProps = StackScreenProps<AuthParamList>;

export const PatientHomeScreen: FC<PatientHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Heading
        title="Select your Speciality"
        style={theme.fonts.headerSmallBold}
      />
      <View style={styles.specialityContainer}>
        <IconContainer icon={<IconCardiology size="xs" />} label="Cardiology" />
        <IconContainer
          icon={<IconRespiratory size="xs" />}
          label="Respiratory"
        />
        <IconContainer
          icon={<IconDermatology size="xs" />}
          label="Dermatology"
        />
      </View>
      <View style={styles.specialityContainer}>
        <IconContainer icon={<IconNeurology size="xs" />} label="Neurology" />
        <IconContainer icon={<IconCardiology size="xs" />} label="Cardiology" />
        <IconContainer
          icon={<IconRespiratory size="xs" />}
          label="Respiratory"
        />
      </View>
      <View style={styles.specialityContainer}>
        <IconContainer
          icon={<IconDermatology size="xs" />}
          label="Dermatology"
        />
        <IconContainer icon={<IconNeurology size="xs" />} label="Neurology" />
        <IconContainer icon={<IconCardiology size="xs" />} label="Cardiology" />
      </View>
    </View>
  );
};
