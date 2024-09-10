import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useStyles} from './SelectRole.styles';
import {useTheme} from '~Contexts/ThemeContext';
import RoleCard from './components/RoleCard';
import {IconPatient, IconSpecialist} from '~Components/Icons';

export const SelectRoleScreen = () => {
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
        <View style={{flexDirection: 'row'}}>
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
      </View>
    </ImageBackgroundWrapper>
  );
};
