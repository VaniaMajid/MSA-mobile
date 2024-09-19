import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {useStyles} from './PreviewFormScreen.styles';
import {StepIndicator} from '../RegistrationForm/Components';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {formatDateOfBirth} from '~Utils/formattedDOB';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const PreviewFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const {role, data} = route.params as {role: string; data: any};
  if (!role || !data) {
    throw new Error('Role and data are required');
  }

  return (
    <ImageBackgroundWrapper>
      <StepIndicator currentStep={2} />
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
            <InfoRow label="First name" value={data.firstName} />
            <InfoRow label="Last name" value={data.lastName} />
            {role === 'Specialist' && (
              <InfoRow label="GMC Number" value={data.gmcNumber} />
            )}
            <InfoRow
              label="Date of Birth"
              value={formatDateOfBirth(data.dateOfBirth)}
            />
            <InfoRow label="Post Code" value={data.postCode} />
            {role === 'Specialist' && (
              <InfoRow label="Speciality" value={data.speciality} />
            )}
            <InfoRow label="Mobile Number" value={data.mobileNumber} />
            <InfoRow label="Gender" value={data.gender} />
            {role === 'Patient' && (
              <>
                <InfoRow label="Allergy" value={data.allergy || 'None'} />
                <InfoRow
                  label="Past Medical History"
                  value={data.medicalHistory}
                />
                <InfoRow
                  label="Height, Weight, BMI"
                  value={`${data.height}, ${data.weight} KG, ${data.bmi.toFixed(1)}`}
                />
              </>
            )}
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
