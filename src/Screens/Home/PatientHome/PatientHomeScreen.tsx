import {View} from 'react-native';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './PatientHomeScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {
  Heading,
  IconCardiology,
  IconContainer,
  IconDermatology,
  IconNeurology,
  IconRespiratory,
  IconSearch,
  InputField,
} from '~Components/index';
import {ScrollView} from 'react-native-gesture-handler';

type Specialty = {
  name: string;
  icon: JSX.Element;
};

const specialties: Specialty[] = [
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Gastroenterology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Dermatology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Dermatology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Gastroenterology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Dermatology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
];

type PatientHomeScreenProps = StackScreenProps<AuthParamList>;

export const PatientHomeScreen: FC<PatientHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <InputField
        leftIcon={<IconSearch />}
        placeholder="Search Specialty"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Heading
        title="Select your Specialist"
        style={theme.fonts.paragraphBold}
      />

      <ScrollView
        contentContainerStyle={styles.specialityContainer}
        showsVerticalScrollIndicator={false}>
        {filteredSpecialties.map((specialty, index) => (
          <View style={styles.speciality}>
            <IconContainer
              key={index}
              icon={specialty.icon}
              label={specialty.name}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
