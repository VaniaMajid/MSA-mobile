import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PreAuthParamList} from '~Navigators/PreAuthParamList';
import {ImageBackgroundWrapperChild} from 'src/HOC/ImageWrapperChild';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {useStyles} from './PreviewFormScreen.styles';
import {StepIndicator} from '../RegistrationForm/Components';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {formatDateOfBirth} from '~Utils/formattedDOB';

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
            <InfoRow label="First Name" value={data.firstName} />
            <InfoRow label="Last name" value={data.lastName} />
            
            <InfoRow label="Email" value={data.email} />
        
            <InfoRow
              label="Phone Number"
              value={data.phoneNumber}
            />
            <InfoRow label="CNIC" value={data.cnic} />
            
            <InfoRow label="Address" value={data.address} />
           
            <InfoRow label="City" value={data.city} />
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
          onPress={() => {}}
          style={{width: '43%'}}
        />
      </View>
    </ImageBackgroundWrapperChild>
  );
};
