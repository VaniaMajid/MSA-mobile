import {View, Text, ScrollView} from 'react-native';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import {StepIndicator} from './Components';
import {InputField} from '~Components/TextInput';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './RegistrationForm.styles';
import {DateOfBirthInput} from './Components/DateOfBirth';
import {DropdownPicker} from '~Components/Dropdown';
import {Toggle} from '~Components/Toggle';
import {useSharedValue} from 'react-native-reanimated';
import {Button} from '~Components/Button';
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

  return (
    <ImageBackgroundWrapper>
      <StepIndicator currentStep={2} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <InputField title="First Name" placeholder="Slim Shady" />
          <InputField title="Last Name" placeholder="DeadPool" />
          <DateOfBirthInput />
          <InputField title="Post Code" placeholder="Nw16xe" />
          <InputField title="Mobile Number" placeholder="+44XXXXXX" />
          <DropdownPicker />
          <View
            style={styles.toggle}>
            <Text style = {theme.fonts.inputFieldSmall}>Allergy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: theme.spacing.H2, marginTop: '1%'}}>
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
          {isToggleOn && (
            <View style={{marginTop: theme.spacing.V2}}>
              <InputField placeholder="e,g HyperTension" />
            </View>
          )}
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
