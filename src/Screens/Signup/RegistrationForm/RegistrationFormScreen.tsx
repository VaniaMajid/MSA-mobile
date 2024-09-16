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
import {validateDateOfBirth, validateRegistrationForm} from '~Utils/validation';
import {ErrorMessage} from '~Components/Error';

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
  }, [heightValue, weightValue, heightUnit]);

  const handleSubmit = () => {
    const validationErrors = validateRegistrationForm(
      firstName,
      lastName,
      postCode,
      mobileNumber,
      gender,
      allergy,
      medicalHistory,
      isToggleOn,
      bmi,
    );

    const dobErrors = validateDateOfBirth(day, month, year);
    const allErrors = { ...validationErrors, ...dobErrors };

    setErrors(allErrors);

    if (Object.keys(allErrors).length === 0) {
      console.log('Form is valid.');
    } else {
      console.log('Form has errors.');
    }
  };


  const handleDateOfBirthChange = (day: string, month: string, year: string) => {
    setDay(day);
    setMonth(month);
    setYear(year);
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
            onChangeText={setFirstName}
            leftIcon={<IconUser size="ss" />}
            errorMessage={errors.firstName}
          />
          <InputField
            title="Last Name"
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            leftIcon={<IconUser size="ss" />}
            errorMessage={errors.lastName}
          />
          <DateOfBirthInput
            onChange={handleDateOfBirthChange}
            errors={errors}
          />
          <InputField
            title="Post Code"
            placeholder="Nw16xe"
            value={postCode}
            onChangeText={setPostCode}
            errorMessage={errors.postCode}
          />
          <InputField
            title="Mobile Number"
            placeholder="+44XXXXXX"
            value={mobileNumber}
            onChangeText={setMobileNumber}
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
            onValueChange={value => setGender(value)}
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
            value={allergy}
            onChangeText={setAllergy}
            disabled={isToggleOn}
            errorMessage={errors.allergy}
          />
          <InputField
            title="Past Medical History"
            placeholder="e.g. hypertension"
            value={medicalHistory}
            onChangeText={setMedicalHistory}
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
                placeholder="70KG"
                keyboardType="numeric"
                onChangeText={text => setWeightValue(parseFloat(text) || 0)}
              />
            </View>
            <View style={{marginTop: 35}}>
              <IconConvert size="sss" />
            </View>
            <View style={styles.bmiContainer}>
              <Text
                style={[
                  theme.fonts.inputFieldSmall,
                  {marginBottom: theme.spacing.V1},
                ]}>
                BMI
              </Text>
              <View style={styles.bmi}>
                <Text>{bmi ? bmi.toFixed(2) : '0'}</Text>
              </View>
            </View>
          </View>
          {errors.bmi && <ErrorMessage message={errors.bmi} />}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            variant="filled"
            title="Next"
            onPress={handleSubmit}
            style={{marginTop: theme.spacing.V2, width: '100%'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
