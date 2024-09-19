import {View} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {
  PatientRegistrationForm,
  SpecialistRegistrationForm,
  StepIndicator,
} from './Components';
import {useStyles} from './RegistrationForm.styles';
type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const RegistrationFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const styles = useStyles();

  const role = route?.params?.role;
  if (!role) {
    throw new Error('Role is required');
  }

  return (
    <View style={styles.container}>
      <StepIndicator currentStep={1} />
      {role === 'Patient' && (
        <PatientRegistrationForm navigation={navigation} />
      )}
      {role === 'Specialist' && (
        <SpecialistRegistrationForm navigation={navigation} />
      )}
    </View>
  );
};
