import {View, ScrollView} from 'react-native';
import React, {FC, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputField} from '~Components/TextInput';
import {useTheme} from '~Contexts/ThemeContext';
import {DropdownPicker} from '~Components/Dropdown';
import {Button} from '~Components/Button';
import {IconUser} from '~Components/Icons';
import {specialistRegistrationSchema} from '~Utils/validation';
import {DateOfBirthInput} from '../DateOfBirth';
import {SpecialistRegistrationFormType} from './types';
import {useStyles} from './SpecialistRegistrationForm.styles';
import { Path } from '~Navigators/routes';

interface SpecialistRegistrationFormProps {
  navigation: any;
}

export const SpecialistRegistrationForm: FC<
  SpecialistRegistrationFormProps
> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [specialities] = useState<{ label: string; value: string }[]>([
    { label: 'Cardiology', value: 'Cardiology' },
    { label: 'Neurology', value: 'Neurology' },
    { label: 'Orthopedics', value: 'Orthopedics' },
  ]);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
    clearErrors,
    trigger,
  } = useForm<SpecialistRegistrationFormType>({
    resolver: yupResolver(specialistRegistrationSchema),
    defaultValues: {
      inviteCode: '',
      firstName: '',
      lastName: '',
      gmcNumber: '',
      postCode: '',
      mobileNumber: '',
      gender: '',
      dateOfBirth: undefined,
      speciality: '',
    },
  });

  const onSubmit = (data: SpecialistRegistrationFormType) => {
    const formData = {
      ...data,
      dateOfBirth: data.dateOfBirth.toISOString(),
    };
    navigation.navigate(Path.PREVIEW_FORM_SCREEN, {role: 'Specialist', data: formData});
  };

  return (
    <>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Controller
            name="inviteCode"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="Invite Code"
                placeholder=""
                value={value}
                onChangeText={onChange}
                errorMessage={errors.inviteCode?.message}
              />
            )}
          />

          <Controller
            name="firstName"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="First Name"
                placeholder="First name"
                value={value}
                onChangeText={val => {
                  onChange(val);
                  trigger('firstName');
                }}
                leftIcon={<IconUser size="ss" color={theme.colors.accentColor}/>}
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
                leftIcon={<IconUser size="ss" color={theme.colors.accentColor}/>}
                errorMessage={errors.lastName?.message}
              />
            )}
          />

          <Controller
            name="gmcNumber"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                title="GMC Number"
                placeholder="123456"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.gmcNumber?.message}
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
                value={value}
                onValueChange={val => {
                  onChange(val);
                }}
                errorMessage={errors.gender?.message}
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
                onChangeText={val => {
                  onChange(val);
                  trigger('mobileNumber');
                }}
                errorMessage={errors.mobileNumber?.message}
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
            name="speciality"
            control={control}
            render={({field: {onChange, value}}) => (
              <DropdownPicker
                searchEnabled
                title="Speciality"
                placeholder="Select your Speciality"
                items={specialities}
                value={value}
                onValueChange={val => {
                  onChange(val);
                  trigger('speciality');
                }}
                errorMessage={errors.speciality?.message}
              />
            )}
          />
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Button
          variant="filled"
          title="Next"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: theme.spacing.V2, width: '100%'}}
        />
      </View>
    </>
  );
};
