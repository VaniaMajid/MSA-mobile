import {View, Text, ScrollView, Alert } from 'react-native';
import {useEffect} from 'react';
import React, {FC} from 'react';
import axios from 'axios';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapperChild} from 'src/HOC/ImageWrapperChild';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {useStyles} from './PreviewFormScreen.styles';
import {StepIndicator} from '../RegistrationForm/Components';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {Path} from '~Navigators/routes';
import {formatDateOfBirth} from '~Utils/formattedDOB';
import { BASE_URL } from '~Constants/index';
type SignupEmailScreenProps = StackScreenProps<PreAuthParamList>;

export const PreviewFormScreen: FC<SignupEmailScreenProps> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const {data} = route.params as {data: any};
  if (!data) {
    throw new Error('Role and data are required');
  }
  
  const handleConfirmAndRegister = async () => {
    try {
      console.log(data);
      const response = await axios.post(
        `${BASE_URL}/buyer/auth/register`,
        data,
      );

      if (response.status === 201) {
        Alert.alert(
          'Success',
          'Your account has been successfully created!',
          [
            {
              text: 'OK',
              onPress: () => navigation.replace(Path.LOGIN_SCREEN),
            },
          ],
        );
      }
    } catch (error: any) {

      if (error.response?.status === 409) {
        Alert.alert('Error', 'The email is already registered.');
      } else {
        console.error(error);
        Alert.alert('Error', 'There was an error registering your account.');
      }
    }
  };

  return (
    <ImageBackgroundWrapperChild>
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
            <InfoRow label="Full Name" value={data.fullName} />
      
            
            <InfoRow label="Email" value={data.email} />
            <InfoRow
              label="Phone Number"
              value={data.phone}
            />
           
            
            <InfoRow label="Address" value={data.address} />
           

          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          variant="outline"
          title="Back"
          onPress={() => navigation.goBack()}
          style={{width: '43%'}}
        />
        <Button
          variant="filled"
          title="Get Started"
          onPress={() => handleConfirmAndRegister()}
          style={{width: '43%'}}
        />
      </View>
    </ImageBackgroundWrapperChild>
  );
};
