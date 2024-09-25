import {View} from 'react-native';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './PatientHomeScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {
  CustomModal,
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
import {Path} from '~Navigators/routes';

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
  {name: 'Gastroenterology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Gastroenterology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
  {name: 'Cardiology', icon: <IconCardiology size="xs" />},
  {name: 'Respiratory', icon: <IconRespiratory size="xs" />},
  {name: 'Gastroenterology', icon: <IconDermatology size="xs" />},
  {name: 'Neurology', icon: <IconNeurology size="xs" />},
];

type PatientHomeScreenProps = StackScreenProps<AuthParamList>;

export const PatientHomeScreen: FC<PatientHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    '',
  );

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleIconPress = (specialty: string) => {
    setSelectedSpecialty(specialty);
    setModalVisible(true);
  };

  const handleAcknowledgePress = () => {
    setModalVisible(false);
    navigation.navigate(Path.APPINION_REQUEST_SCREEN, { speciality: selectedSpecialty || '' });
  };

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
          <View style={styles.speciality} key={index}>
            <IconContainer
              icon={specialty.icon}
              label={specialty.name}
              onPress={() => handleIconPress(specialty.name)}
            />
          </View>
        ))}
      </ScrollView>

      <CustomModal
        visible={modalVisible}
        header="Attenthtion!"
        description={
          'Please click below to acknowledge that this is not a medical emergency (e.g. chest pain, shortness of breath, heavy bleeding, serious injuries, seizures or signs of stroke).\n' +
          'If so, please call 999 or attend your nearest A&E department.'
        }
        descriptionStyle={{textAlign: 'center'}}
        button1Text="Acknowledge"
        button1Handler={handleAcknowledgePress}
        button2Text="Cancel"
        button2Handler={() => setModalVisible(false)}
      />
    </View>
  );
};
