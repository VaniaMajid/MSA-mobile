import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
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
import { Heading } from '~Components/Heading';

type SelectRoleScreenProps = StackScreenProps<PreAuthParamList>;

export const SelectRoleScreen: FC<SelectRoleScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const styles = useStyles();

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
  };
  return (
    <ImageBackgroundWrapper>
      <View style={styles.container}>
        <Heading title="Select your Role" style={theme.fonts.headerMediumBold}/>
        <Text
          style={[theme.fonts.paragraphRegularSmall, styles.text]}>
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
              <Text style={styles.checkboxTextPrimary}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={styles.checkboxTextPrimary}>
                Privacy Policy
              </Text>
            </Text>
          }
          onPress={() => {}}
        />
      </View>
      <Button
        title="Lets Get Started"
        style={{width: '100%'}}
        onPress={() => {
          navigation.navigate('SignupEmail');
        }}
      />
    </ImageBackgroundWrapper>
  );
};
