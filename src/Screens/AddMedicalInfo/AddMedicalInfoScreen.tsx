import {View, Text, ScrollView} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useStyles} from './AddMedicalInfoScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AddMedicalInfoFormType} from './types';
import {AddMedicalInfoSchema} from '~Utils/validation';
import {InputField} from '~Components/TextInput';
import {DropdownPicker} from '~Components/Dropdown';
import {Button} from '~Components/Button';
import {Path} from '~Navigators/routes';
import {CustomDatePicker} from '~Components/DatePicker';

type AddMedicalInfoScreenProps = StackScreenProps<AuthParamList>;

export const AddMedicalInfoScreen: FC<AddMedicalInfoScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    clearErrors,
    reset,
    trigger,
  } = useForm<AddMedicalInfoFormType>({
    resolver: yupResolver(AddMedicalInfoSchema),
    defaultValues: {
      medicalInfoType: '',

      medicationName: '',
      dosage: '',
      frequency: '',
      notesMedication: '',

      conditionName: '',
      diagnosisDate: '',
      notesCondition: '',

      procedureName: '',
      surgeryDate: '',
      surgeon: '',
      reason: '',

      allergy: '',
      reaction: '',
      severity: '',
      notesAllergy: '',
    },
  });

  const onSubmit = (data: AddMedicalInfoFormType) => {
    console.log(data);
    navigation.navigate(Path.MEDICAL_INFO_SCREEN);
  };

  const medicalInfoType = watch('medicalInfoType');

  useEffect(() => {
    reset({
      medicalInfoType,
      medicationName: '',
      dosage: '',
      frequency: '',
      notesMedication: '',
      conditionName: '',
      diagnosisDate: '',
      notesCondition: '',
      procedureName: '',
      surgeryDate: '',
      surgeon: '',
      reason: '',
      allergy: '',
      reaction: '',
      severity: '',
      notesAllergy: '',
    });
  }, [medicalInfoType, reset]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          theme.fonts.paragraphRegularSmall,
          {color: theme.colors.accentColor},
        ]}>
        Please select your medical info type from the drop down lists below.
      </Text>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Controller
          name="medicalInfoType"
          control={control}
          render={({field: {onChange, value}}) => (
            <DropdownPicker
              title="Medical Info Type"
              placeholder="Select Medical Info Type"
              items={[
                {label: 'Medications', value: 'Medications'},
                {label: 'Medical Conditions', value: 'Medical Conditions'},
                {label: 'Surgical Procedures', value: 'Surgical Procedures'},
                {label: 'Allergies', value: 'Allergies'},
              ]}
              value={value}
              onValueChange={val => {
                onChange(val);
              }}
              errorMessage={errors.medicalInfoType?.message}
            />
          )}
        />

        {medicalInfoType === 'Medications' && (
          <>
            <Controller
              name="medicationName"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Medication Name"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('medicationName');
                  }}
                  errorMessage={errors.medicationName?.message}
                />
              )}
            />
            <View style={styles.row}>
              <View style={{flex: 1}}>
                <Controller
                  name="dosage"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <InputField
                      title="Dosage"
                      value={value}
                      onChangeText={val => {
                        onChange(val);
                        trigger('dosage');
                      }}
                      errorMessage={errors.dosage?.message}
                    />
                  )}
                />
              </View>
              <View style={{flex: 1}}>
                <Controller
                  name="frequency"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <DropdownPicker
                      title="Frequency"
                      placeholder="Frequency Type"
                      items={[
                        {label: 'Daily', value: 'Daily'},
                        {label: 'Twice a Day', value: 'Twice a Day'},
                        {
                          label: 'Thrice a Day',
                          value: 'Thrice a Day',
                        },
                        {label: 'Weekly', value: 'Weekly'},
                      ]}
                      value={value}
                      onValueChange={val => {
                        onChange(val);
                      }}
                      errorMessage={errors.frequency?.message}
                    />
                  )}
                />
              </View>
            </View>
            <Controller
              name="notesMedication"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Notes"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('notesMedication');
                  }}
                  errorMessage={errors.notesMedication?.message}
                />
              )}
            />
          </>
        )}

        {medicalInfoType === 'Medical Conditions' && (
          <>
            <Controller
              name="conditionName"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Condition Name"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('conditionName');
                  }}
                  errorMessage={errors.conditionName?.message}
                />
              )}
            />
            <Controller
              name="notesCondition"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Notes"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('notesCondition');
                  }}
                  errorMessage={errors.notesCondition?.message}
                />
              )}
            />
            <View style={{width: '50%'}}>
              <Controller
                name="diagnosisDate"
                control={control}
                render={({field: {onChange, value}}) => (
                  <CustomDatePicker
                    title="Diagnosis Date"
                    value={value}
                    onChange={selectedDate => {
                      onChange(selectedDate.toISOString());
                      trigger('diagnosisDate');
                    }}
                    errorMessage={errors.diagnosisDate?.message}
                  />
                )}
              />
            </View>
          </>
        )}

        {medicalInfoType === 'Surgical Procedures' && (
          <>
            <Controller
              name="procedureName"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Procedure Name"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('procedureName');
                  }}
                  errorMessage={errors.procedureName?.message}
                />
              )}
            />
            <View style={styles.row}>
              <View style={{flex: 1}}>
                <Controller
                  name="surgeryDate"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <CustomDatePicker
                      title="Surgery Date"
                      value={value}
                      onChange={selectedDate => {
                        onChange(selectedDate.toISOString());
                        trigger('surgeryDate');
                      }}
                      errorMessage={errors.surgeryDate?.message}
                    />
                  )}
                />
              </View>
              <View style={{flex: 1}}>
                <Controller
                  name="surgeon"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <InputField
                      title="Surgeon"
                      value={value}
                      onChangeText={val => {
                        onChange(val);
                        trigger('surgeon');
                      }}
                      errorMessage={errors.surgeon?.message}
                    />
                  )}
                />
              </View>
            </View>

            <Controller
              name="reason"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Reason for Surgery"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('reason');
                  }}
                  errorMessage={errors.reason?.message}
                />
              )}
            />
          </>
        )}

        {medicalInfoType === 'Allergies' && (
          <>
            <Controller
              name="allergy"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Allergy (e.g. Penicillin)"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('allergy');
                  }}
                  errorMessage={errors.allergy?.message}
                />
              )}
            />
            <View style={styles.row}>
              <View style={{flex: 1}}>
                <Controller
                  name="reaction"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <DropdownPicker
                      title="Reaction"
                      placeholder="Reaction Type"
                      items={[
                        {label: 'Rash', value: 'Rash'},
                        {label: 'Anaphylaxis', value: 'Anaphylaxis'},
                        {label: 'Other', value: 'Other'},
                      ]}
                      value={value}
                      onValueChange={val => {
                        onChange(val);
                      }}
                      errorMessage={errors.reaction?.message}
                    />
                  )}
                />
              </View>
              <View style={{flex: 1}}>
                <Controller
                  name="severity"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <DropdownPicker
                      title="Severity"
                      placeholder="Severity Level"
                      items={[
                        {label: 'Mild', value: 'Mild'},
                        {label: 'Moderate', value: 'Moderate'},
                        {label: 'Severe', value: 'Severe'},
                      ]}
                      value={value}
                      onValueChange={val => {
                        onChange(val);
                      }}
                      errorMessage={errors.severity?.message}
                    />
                  )}
                />
              </View>
            </View>
            <Controller
              name="notesAllergy"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  title="Notes"
                  value={value}
                  onChangeText={val => {
                    onChange(val);
                    trigger('notesAllergy');
                  }}
                  errorMessage={errors.notesAllergy?.message}
                />
              )}
            />
          </>
        )}

        {medicalInfoType && (
          <Button
            variant="filled"
            title="Add"
            onPress={handleSubmit(onSubmit)}
            style={{width: '30%', alignSelf: 'flex-end'}}
          />
        )}
      </ScrollView>
    </View>
  );
};
