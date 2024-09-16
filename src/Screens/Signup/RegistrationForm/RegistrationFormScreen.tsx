import {View, Text, ScrollView} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StepIndicator} from './Components';
import {InputField} from '~Components/TextInput';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './RegistrationForm.styles';
import {DateOfBirthInput} from './Components/DateOfBirth/DateOfBirth';
import {DropdownPicker} from '~Components/Dropdown';
import {Toggle} from '~Components/Toggle';
import {Button} from '~Components/Button';
import {IconConvert, IconInfoCircle, IconUser} from '~Components/Icons';
import {HeightPicker} from '~Components/HeightPicker';
import {calculateBMI} from '~Utils/bmiUtils';
import {ErrorMessage} from '~Components/Error';
import {
  validateAllergy,
  validateBMI,
  validateDateOfBirth,
  validateFirstName,
  validateGender,
  validateLastName,
  validateMedicalHistory,
  validateMobileNumber,
  validatePostCode,
} from '~Utils/validation';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const RegistrationFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [isToggleOn, setIsToggle] = useState(false);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [weightValue, setWeightValue] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [allergy, setAllergy] = useState<string>('');
  const [medicalHistory, setMedicalHistory] = useState<string>('');

  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const setToggleValue = () => {
    setIsToggle(prev => !prev);
  };

  useEffect(() => {
    const newBmi = calculateBMI(heightValue, weightValue, heightUnit);
    setBmi(newBmi);

    if (newBmi && newBmi > 0) {
      setErrors(prevErrors => ({...prevErrors, bmi: ''}));
    }
  }, [heightValue, weightValue, heightUnit]);

  const handleSubmit = () => {
    const validationErrors: {[key: string]: string} = {};

    validationErrors.firstName = validateFirstName(firstName);
    validationErrors.lastName = validateLastName(lastName);
    validationErrors.postCode = validatePostCode(postCode);
    validationErrors.mobileNumber = validateMobileNumber(mobileNumber);
    validationErrors.gender = validateGender(gender);
    validationErrors.allergy = validateAllergy(allergy, isToggleOn);
    validationErrors.medicalHistory = validateMedicalHistory(medicalHistory);
    validationErrors.bmi = validateBMI(bmi);
    const dobErrors = validateDateOfBirth(day, month, year);
    if (dobErrors.dateOfBirth)
      validationErrors.dateOfBirth = dobErrors.dateOfBirth;

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      error => error !== '',
    );

    if (!hasErrors) {
      console.log('Form is valid.');
    } else {
      console.log('Form has errors:', validationErrors);
    }
  };

  const handleDateOfBirthChange = (
    day: string,
    month: string,
    year: string,
  ) => {
    setDay(day);
    setMonth(month);
    setYear(year);
    const dobErrors = validateDateOfBirth(day, month, year);
    setErrors(prevErrors => ({
      ...prevErrors,
      dateOfBirth: dobErrors.dateOfBirth ?? '',
    }));
  };

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      firstName: validateFirstName(text),
    }));
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      lastName: validateLastName(text),
    }));
  };

  const handlePostCodeChange = (text: string) => {
    setPostCode(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      postCode: validatePostCode(text),
    }));
  };

  const handleMobileNumberChange = (text: string) => {
    setMobileNumber(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      mobileNumber: validateMobileNumber(text),
    }));
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      gender: validateGender(value),
    }));
  };

  const handleAllergyChange = (text: string) => {
    setAllergy(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      allergy: validateAllergy(text, isToggleOn),
    }));
  };

  const handleMedicalHistoryChange = (text: string) => {
    setMedicalHistory(text);
    setErrors(prevErrors => ({
      ...prevErrors,
      medicalHistory: validateMedicalHistory(text),
    }));
  };

  const handleWeightChange = (text: string) => {
    const weight = parseFloat(text);
    setWeightValue(isNaN(weight) ? 0 : weight);
    setErrors(prevErrors => ({...prevErrors, weight: ''}));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: theme.colors.white,
      }}>
      <StepIndicator currentStep={1} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <InputField
            title="First Name"
            placeholder="First name"
            value={firstName}
            onChangeText={handleFirstNameChange}
            leftIcon={<IconUser size="ss" />}
            errorMessage={errors.firstName}
          />
          <InputField
            title="Last Name"
            placeholder="Last name"
            value={lastName}
            onChangeText={handleLastNameChange}
            leftIcon={<IconUser size="ss" />}
            errorMessage={errors.lastName}
          />
          <DateOfBirthInput
            onChange={handleDateOfBirthChange}
            errorMessage={errors.dateOfBirth}
          />
          <InputField
            title="Post Code"
            placeholder="Nw16xe"
            value={postCode}
            onChangeText={handlePostCodeChange}
            errorMessage={errors.postCode}
          />
          <InputField
            title="Mobile Number"
            placeholder="+44XXXXXX"
            value={mobileNumber}
            onChangeText={handleMobileNumberChange}
            errorMessage={errors.mobileNumber}
          />
          <DropdownPicker
            title="Gender"
            placeholder="Select Gender"
            items={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
              {label: 'Non Binary', value: 'Non Binary'},
              {label: 'Other', value: 'Other'},
            ]}
            onValueChange={handleGenderChange}
            errorMessage={errors.gender}
          />
          <View style={styles.toggle}>
            <View style={styles.label}>
              <Text
                style={[
                  theme.fonts.inputFieldSmall,
                  {
                    color: isToggleOn
                      ? theme.colors.disabled
                      : theme.colors.darkGray,
                  },
                ]}>
                Allergy
              </Text>
              <IconInfoCircle size="xxxs" />
            </View>
            <View style={styles.allergyToggle}>
              <Text
                style={[theme.fonts.paragraphRegularSmall, styles.toggleText]}>
                No known allergies
              </Text>
              <Toggle
                value={isToggleOn}
                onPress={setToggleValue}
                duration={400}
                style={{
                  width: 46,
                  height: 21,
                  padding: 10,
                }}
              />
            </View>
          </View>
          <InputField
            placeholder="e.g. penicillin"
            value={!isToggleOn ? allergy : ''}
            onChangeText={handleAllergyChange}
            disabled={isToggleOn}
            errorMessage={!isToggleOn ? errors.allergy : ''}
          />
          <InputField
            title="Past Medical History"
            placeholder="e.g. hypertension"
            value={medicalHistory}
            onChangeText={handleMedicalHistoryChange}
            errorMessage={errors.medicalHistory}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: 10,
            }}>
            <View style={{flex: 1}}>
              <HeightPicker
                title="Height"
                placeholder="5"
                units={[
                  {label: 'cm', value: 'cm'},
                  {label: 'feet', value: 'ft.'},
                  {label: 'inches', value: 'in.'},
                ]}
                onUnitChange={setHeightUnit}
                onValueChange={setHeightValue}
                defaultValue={heightValue}
                defaultUnit={heightUnit}
              />
            </View>
            <View style={{flex: 1}}>
              <InputField
                title="Weight"
                placeholder="e.g. 70"
                value={weightValue.toString()}
                onChangeText={handleWeightChange}
                keyboardType="numeric"
                errorMessage={errors.weight}
              />
            </View>
            <View style={styles.bmiContainer}>
              <Text
                style={[
                  theme.fonts.inputFieldSmall,
                  {marginBottom: theme.spacing.V1},
                ]}>
                BMI
              </Text>
              <View style={[styles.bmi, errors.bmi ? styles.errorBmi : {}]}>
                <Text style={[theme.fonts.paragraphRegularSmall]}>
                  {bmi ? bmi.toFixed(2) : '0.00'}
                </Text>
              </View>
            </View>
          </View>
          <Button
            title="Submit"
            onPress={handleSubmit}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};
