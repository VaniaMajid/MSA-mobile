import {View, Text, ScrollView} from 'react-native';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapper} from 'src/HOC';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {useStyles} from './PreviewFormScreen.styles';
import {StepIndicator} from '../RegistrationForm/Components';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';

type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const PreviewFormScreen: FC<SignupEmailScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles();

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
            <InfoRow label="First name" value="Aaron" />
            <InfoRow label="Last name" value="Nace" />
            <InfoRow label="Date of Birth" value="12 June 2023" />
            <InfoRow label="Post Code" value="SW1A 1AA" />
            <InfoRow label="Mobile Number" value="+44 32 23 12321" />
            <InfoRow label="Gender" value="Female" />
            <InfoRow label="Allergy" value="Pollen, Penicillin" />
            <InfoRow label="Past Medical History" value="Hypertension" />
            <InfoRow label="Height, Weight, BMI" value="5ft, 70KG, 22.8" />
            <InfoRow label="Email" value="example@gmail.com" />
          </View>
        </View>
        
      </ScrollView>
      <View style={[styles.buttons]}>
          <Button
            variant="outline"
            title="Back"
            onPress={() => {navigation.goBack()}}
            style={{width: '43%'}}
          />
          <Button
            variant="filled"
            title="Get Started"
            onPress={() => {
              navigation.navigate('PasswordScreen');
            }}
            style={{width: '43%'}}
          />
        </View>
    </ImageBackgroundWrapper>
  );
};
