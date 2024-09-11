import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useStyles} from './SelectRole.styles';
import {useTheme} from '~Contexts/ThemeContext';
import RoleCard from './components/RoleCard';
import {IconPatient, IconSpecialist} from '~Components/Icons';
import {Checkbox} from '~Components/Checkbox';
import {Button} from '~Components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';

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
        <Text style={{fontSize: 20}}>Select your Role</Text>
        <Text
          style={{color: theme.colors.lightGray1, marginTop: theme.spacing.V1}}>
          Select your role to proceed: choose 'Patient' for medical advice or
          'Specialist' to offer consultations.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: -theme.spacing.H3}}>
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
            <Text style={{marginLeft: theme.spacing.H2}}>
              I agree to the{' '}
              <Text style={{color: theme.colors.primaryColor}}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={{color: theme.colors.primaryColor}}>
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
