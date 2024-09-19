import {View, Text, ScrollView} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
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
import {PatientRegistrationFormType} from './types';
import {patientRegistrationSchema} from '~Utils/validation';
import {ErrorMessage} from '~Components/Error';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const RegistrationFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
    clearErrors,
    trigger,
  } = useForm<PatientRegistrationFormType>({
    resolver: yupResolver(patientRegistrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      postCode: '',
      mobileNumber: '',
      gender: '',
      allergy: '',
      medicalHistory: '',
      dateOfBirth: undefined,
      bmi: 0,
      isToggleOn: false,
    },
  });

  const isToggleOn = watch('isToggleOn');
  const [heightValue, setHeightValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightUnit, setHeightUnit] = useState<string>('cm');

  const [bmi, setBmi] = useState<number>(0);

  useEffect(() => {
    const newBmi = calculateBMI(heightValue, weightValue, heightUnit);
    setBmi(newBmi ?? 0);
    setValue('bmi', newBmi ?? 0);
    if (newBmi && newBmi >= 0) {
      clearErrors('bmi');
    }
  }, [heightValue, weightValue, heightUnit]);

  const onSubmit = (data: PatientRegistrationFormType) => {
    console.log('Form Data: ', data);
  };

  const handleWeightChange = (text: string) => {
    const weight = parseFloat(text);
    setWeightValue(isNaN(weight) ? 0 : weight);
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
          <Controller
            name="firstName"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="First Name"
                placeholder="First name"
                value={value}
                onChangeText={onChange}
                leftIcon={<IconUser size="ss" />}
                errorMessage={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="Last Name"
                placeholder="Last name"
                value={value}
                onChangeText={onChange}
                leftIcon={<IconUser size="ss" />}
                errorMessage={errors.lastName?.message}
              />
            )}
          />

          <Controller
            name="dateOfBirth"
            control={control}
            render={({field: {onChange, value}}) => (
              <DateOfBirthInput
                onChange={(day, month, year) => {
                  const dayNumber = parseInt(day, 10);
                  const monthNumber = parseInt(month, 10) - 1;
                  const yearNumber = parseInt(year, 10);
                  const date = new Date(
                    Date.UTC(yearNumber, monthNumber, dayNumber),
                  );
                  if (
                    date.getFullYear() === yearNumber &&
                    date.getMonth() === monthNumber &&
                    date.getDate() === dayNumber
                  ) {
                    onChange(date);
                    trigger('dateOfBirth');
                  } else {
                    onChange(null);
                    trigger('dateOfBirth');
                  }
                }}
                errorMessage={errors.dateOfBirth?.message}
              />
            )}
          />

          <Controller
            name="postCode"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="Post Code"
                placeholder="Nw16xe"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.postCode?.message}
              />
            )}
          />

          <Controller
            name="mobileNumber"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="Mobile Number"
                placeholder="+44XXXXXX"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.mobileNumber?.message}
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({field: {onChange, value}}) => (
              <DropdownPicker
                title="Gender"
                placeholder="Select Gender"
                items={[
                  {label: 'Male', value: 'Male'},
                  {label: 'Female', value: 'Female'},
                  {label: 'Non Binary', value: 'Non Binary'},
                  {label: 'Other', value: 'Other'},
                ]}
                onValueChange={onChange}
                errorMessage={errors.gender?.message}
              />
            )}
          />

          <Controller
            name="isToggleOn"
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.toggle}>
                <View style={styles.label}>
                  <Text
                    style={[
                      theme.fonts.inputFieldSmall,
                      {
                        color: value
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
                    style={[
                      theme.fonts.paragraphRegularSmall,
                      styles.toggleText,
                    ]}>
                    No known allergies
                  </Text>
                  <Toggle
                    value={value}
                    onPress={() => onChange(!value)}
                    duration={400}
                    style={{
                      width: 46,
                      height: 21,
                      padding: 10,
                    }}
                  />
                </View>
              </View>
            )}
          />

          <Controller
            name="allergy"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                placeholder="e.g. penicillin"
                value={!isToggleOn ? value : ''}
                onChangeText={onChange}
                errorMessage={
                  !isToggleOn && errors.allergy?.message
                    ? errors.allergy.message
                    : ''
                }
              />
            )}
          />

          <Controller
            name="medicalHistory"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="Past Medical History"
                placeholder="e.g. hypertension"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.medicalHistory?.message}
              />
            )}
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
              />
            </View>
            <View style={{marginTop: 35}}>
              <IconConvert size="sss" />
            </View>

            <Controller
              name="bmi"
              control={control}
              render={() => (
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
              )}
            />
          </View>
          {errors.bmi ? (
            <ErrorMessage message={errors.bmi.message || ''} />
          ) : null}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            variant="filled"
            title="Next"
            onPress={() => {navigation.navigate('PreviewForm')}}
            style={{marginTop: theme.spacing.V2, width: '100%'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
