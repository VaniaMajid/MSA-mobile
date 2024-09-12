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
      <StepIndicator currentStep={1} />
      <ScrollView
        style={{flex: 1, paddingBottom: '-20%'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <InputField title="First Name" placeholder="Slim Shady" />
          </View>
          <View style={{marginTop: theme.spacing.V2}}>
            <InputField title="Last Name" placeholder="DeadPool" />
          </View>
          <View style={{marginTop: theme.spacing.V2}}>
            <DateOfBirthInput />
          </View>
          <View style={{marginTop: theme.spacing.V2}}>
            <InputField title="Post Code" placeholder="Nw16xe" />
          </View>
          <View style={{marginTop: theme.spacing.V2}}>
            <InputField title="Mobile Number" placeholder="+44XXXXXX" />
          </View>
          <View style={{marginTop: theme.spacing.V2}}>
            <DropdownPicker />
          </View>
          <View
            style={{
              marginTop: theme.spacing.V2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{marginTop: '0.5%'}}>Allergy</Text>
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
