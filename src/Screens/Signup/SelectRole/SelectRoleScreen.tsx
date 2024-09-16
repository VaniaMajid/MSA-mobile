import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useStyles} from './SelectRole.styles';
import {useTheme} from '~Contexts/ThemeContext';
import RoleCard from './components/RoleCard/RoleCard';
import {IconPatient, IconSpecialist} from '~Components/Icons';
import {Checkbox} from '~Components/Checkbox';
import {Button} from '~Components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {Heading} from '~Components/Heading';
import {validateTermsAgreement} from '~Utils/validation';
import { ErrorMessage } from '~Components/Error';

type SelectRoleScreenProps = StackScreenProps<PreAuthParamList>;

export const SelectRoleScreen: FC<SelectRoleScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [roleError, setRoleError] = useState('');
  const [termsError, setTermsError] = useState('');
  const styles = useStyles();

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
    if (roleError) setRoleError(''); 
  };

  const handleAgreeTermsPress = () => {
    const newIsTermsChecked = !isTermsChecked;
    setIsTermsChecked(newIsTermsChecked);

    if (newIsTermsChecked) {
      setTermsError(''); 
    }
  };

  const handleGetStartedPress = () => {
    let hasError = false;
 
    if (!selectedRole) {
      setRoleError('Please select a role to proceed.');
      hasError = true;
    }

    const termsAgreementError = validateTermsAgreement(isTermsChecked);
    if (termsAgreementError) {
      setTermsError(termsAgreementError);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setRoleError('');
    setTermsError('');
    navigation.navigate('SignupEmail');
  };

  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <Heading
          title="Select your Role"
          style={theme.fonts.headerMediumBold}
        />
        <Text style={[theme.fonts.paragraphRegularSmall, styles.text]}>
          Select your role to proceed: choose 'Patient' for medical advice or
          'Specialist' to offer consultations.
        </Text>
        <View style={styles.roleCardContainer}>
          <RoleCard
            onPress={() => handleSelectRole('Patient')}
            role="Patient"
            roleIcon={
              <IconPatient
                color={
                  selectedRole === 'Patient'
                    ? theme.colors.white
                    : theme.colors.primaryColor
                }
                size="l"
              />
            }
            selectedIcon={selectedRole === 'Patient'}
          />
          <RoleCard
            onPress={() => handleSelectRole('Specialist')}
            role="Specialist"
            roleIcon={
              <IconSpecialist
                color={
                  selectedRole === 'Specialist'
                    ? theme.colors.white
                    : theme.colors.primaryColor
                }
                size="l"
              />
            }
            selectedIcon={selectedRole === 'Specialist'}
          />
        </View>

        <Checkbox
          text={
            <Text style={[theme.fonts.subtextSmall, styles.checkboxText]}>
              I agree to the{' '}
              <Text style={styles.checkboxTextPrimary}>Terms of Service</Text>{' '}
              and <Text style={styles.checkboxTextPrimary}>Privacy Policy</Text>
            </Text>
          }
          isChecked={isTermsChecked}
          onPress={handleAgreeTermsPress}
        />
        {roleError ? (
           <ErrorMessage message={roleError}/> 
        ) : null}

        {termsError ? (
           <ErrorMessage message={termsError}/> 
        ) : null}
      </View>
      <Button
        title="Let's Get Started"
        style={{width: '100%'}}
        onPress={handleGetStartedPress}
      />
    </ImageBackgroundWrapper>
  );
};
