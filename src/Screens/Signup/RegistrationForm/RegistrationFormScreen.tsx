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
import { IconUser } from '~Components/Icons';
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
      <StepIndicator currentStep={1} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <InputField title="First Name" placeholder="First name" leftIcon={<IconUser size='ss'/>}/>
          <InputField title="Last Name" placeholder="Last name" leftIcon={<IconUser size='ss'/>}/>
          <DateOfBirthInput />
          <InputField title="Post Code" placeholder="Nw16xe" />
          <InputField title="Mobile Number" placeholder="+44XXXXXX" />
          <DropdownPicker />
          <View
            style={styles.toggle}>
            <Text style = {theme.fonts.inputFieldSmall}>Allergy</Text>
            <View style={styles.allergyToggle}>
              <Text style={[theme.fonts.paragraphRegularSmall, styles.toggleText]}>
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
              <InputField placeholder="e.g. penicillin" />
            </View>
          )}
          <InputField title="Past Medical History" placeholder="e.g. hypertension"/>
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
