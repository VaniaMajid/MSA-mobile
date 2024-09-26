import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {formatDateOfBirth} from '~Utils/formattedDOB';
import {useStyles} from './PatientProfile.styles';
import {AuthParamList} from '~Navigators/AuthParamList';

type PatientProfileScreenProps = StackScreenProps<AuthParamList>;

export const PatientProfileScreen: FC<PatientProfileScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  const patientData = {
    name: 'Aaron Nace',
    birthdate: '12 June 2023',
    gender: 'Female',
    allergies: 'Pollen , Penicillin',
    postalCode: 'SW1A 1AA',
    mobileNumber: '+44 32 23 12321',
    pastMedicalHistory: 'Hypertension',
    height: '5ft',
    weight: '70KG',
    bmi: '22.8',
    email: 'example@gmail.com',
    address: '10 Downing Street, London, UK',
  };

  return (
    <ImageBackgroundWrapper>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Heading
            title="Form Preview Details"
            style={[theme.fonts.paragraphBold, {textAlign: 'center'}]}
          />
          <Text
            style={[
              theme.fonts.subtextSmall,
              {color: theme.colors.lightGray1},
            ]}>
            Take a moment to review the details. If any adjustments are needed,
            please simply go back and edit.
          </Text>
          <View style={styles.infoContainer}>
            <InfoRow label="Name" value={patientData.name} />
            <InfoRow label="Birthdate" value={patientData.birthdate} />
            <InfoRow label="Gender" value={patientData.gender} />
            <InfoRow label="Allergy" value={patientData.allergies || 'None'} />
            <InfoRow label="Postal Code" value={patientData.postalCode} />
            <InfoRow label="Mobile Number" value={patientData.mobileNumber} />
            <InfoRow
              label="Past Medical History"
              value={patientData.pastMedicalHistory}
            />
            <InfoRow
              label="Height, Weight, BMI"
              value={`${patientData.height}, ${patientData.weight} KG, ${patientData.bmi}`}
            />
            <InfoRow
              label="Email"
              value={patientData.email}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          variant="outline"
          title="Back"
          onPress={() => navigation.goBack()}
          style={{width: '43%'}}
        />
        <Button
          variant="filled"
          title="Get Started"
          onPress={() => {}}
          style={{width: '43%'}}
        />
      </View>
    </ImageBackgroundWrapper>
  );
};
