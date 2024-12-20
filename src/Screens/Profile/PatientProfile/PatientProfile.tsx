import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {useStyles} from './PatientProfile.styles';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StyledText} from '~Components/StyledText';
import {IconArrowDown, IconEdit} from '~Components/Icons';

type PatientProfileScreenProps = StackScreenProps<AuthParamList>;

export const PatientProfileScreen: FC<PatientProfileScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [isExpanded, setIsExpanded] = useState(true);
  const arrowRotation = isExpanded ? '180deg' : '0deg';

  const patientData = {
    name: 'Nadeem Nani Wala',
    id: 'E002',
    postalCode: 'SW1A 1AA',
    mobileNumber: '+44 32 23 12321',
    email: 'example@gmail.com',
    address: '10 Downing Street, London, UK',
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.editButton}>
          <IconEdit size="40" color={theme.colors.primaryColor} />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.details}>
            <Image
              source={require('../../../Assets/images/onboarding1.png')}
              style={styles.image}
            />
            <Heading
              title={patientData.name}
              style={[
                theme.fonts.largeSubHeaderSemiBold,
                {textAlign: 'center', marginBottom: theme.spacing.V1},
              ]}
            />
            <StyledText
              text= {patientData.id}
              textColor={theme.colors.white}
              backgroundColor={theme.colors.primaryOrange}
              style={[
                theme.fonts.filterText,
                {width: '38%', alignSelf: 'center'},
              ]}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Heading title="User Info" style={theme.fonts.headerSmallBold} />
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => setIsExpanded(prev => !prev)}>
              <Animated.View
                style={{
                  transform: [{rotate: arrowRotation}],
                }}>
                <IconArrowDown color={theme.colors.primaryColor} />
              </Animated.View>
            </TouchableOpacity>
          </View>
          {isExpanded && (
            <View style={{gap: theme.spacing.HGap1}}>
              <InfoRow
                label="Name"
                value={patientData.name}
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
             
              <InfoRow
                label="Postal Code"
                value={patientData.postalCode}
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
              <InfoRow
                label="Mobile Number"
                value={patientData.mobileNumber}
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
              <InfoRow
                label="Email"
                value={patientData.email}
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
            </View>
          )}
        </View>
        <Button
          variant="primary"
          title="Logout"
          onPress={() => navigation.goBack()}
          style={styles.paymentButton}
          textStyle={theme.fonts.filterText}
        />
      </View>
    </ScrollView>
  );
};
