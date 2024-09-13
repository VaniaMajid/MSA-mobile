import {View, Text, ScrollView} from 'react-native';
import React, {FC, useState} from 'react';
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
import {useSharedValue} from 'react-native-reanimated';
import {Button} from '~Components/Button';
import {IconConvert, IconUser} from '~Components/Icons';
import { HeightPicker } from '~Components/HeightPicker';
type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;
export const RegistrationFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const [isToggleOn, setIsToggle] = useState(false);

  const styles = useStyles();

  const setToggleValue = () => {
    setIsToggle(!isToggleOn);
  };

  const [heightValue, setHeightValue] = useState<string>('');
  const [heightUnit, setHeightUnit] = useState<string>('cm');

  const handleUnitChange = (unit: string) => {
    setHeightUnit(unit);
  };

  const handleValueChange = (value: any) => {
    setHeightValue(value);
  };

  return (
    <ImageBackgroundWrapper>
      <StepIndicator currentStep={1} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <InputField
            title="First Name"
            placeholder="First name"
            leftIcon={<IconUser size="ss" />}
          />
          <InputField
            title="Last Name"
            placeholder="Last name"
            leftIcon={<IconUser size="ss" />}
          />
          <DateOfBirthInput />
          <InputField title="Post Code" placeholder="Nw16xe" />
          <InputField title="Mobile Number" placeholder="+44XXXXXX" />
          <DropdownPicker
            title="Gender"
            placeholder="Select Gender"
            items={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
              {label: 'Non Binary', value: 'Non Binary'},
              {label: 'Other', value: 'Other'},
            ]}
            onValueChange={value => console.log('Selected value:', value)}
          />

          <View style={styles.toggle}>
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
            disabled={isToggleOn ?? true}
          />
          <InputField
            title="Past Medical History"
            placeholder="e.g. hypertension"
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
                onUnitChange={handleUnitChange}
                onValueChange={handleValueChange}
                defaultValue={heightValue}
                defaultUnit={heightUnit}
              />
            </View>
            <View style={{flex: 1}}>
              <InputField title="Weight" placeholder="70KG" />
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
                <Text>22.86</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            variant="filled"
            title="Next"
            onPress={() => {}}
            style={{marginTop: theme.spacing.V2, width: '100%'}}
          />
        </View>
      </ScrollView>
    </ImageBackgroundWrapper>
  );
};
