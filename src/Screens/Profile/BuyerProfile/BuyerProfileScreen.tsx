import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from '~Contexts/ThemeContext';
import {Button} from '~Components/Button';
import {Heading} from '~Components/Heading';
import {InfoRow} from '~Components/InfoRow';
import {useStyles} from './BuyerProfileScreen.styles';
import {AuthParamList} from '~Navigators/AuthParamList';
import {IconArrowDown, IconEdit} from '~Components/Icons';
import useAccountStore from '~Configs/accountStore';
import { BASE_URL } from '~Constants/index';
import axios from 'axios';

type BuyerProfileScreenProps = StackScreenProps<AuthParamList>;

export const BuyerProfileScreen: FC<BuyerProfileScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [buyerProfile, setBuyerProfile] = useState<any | null>(null); // State for Buyer profile
  const { buyer } = useAccountStore(); // Retrieve Buyer data from Zustand store

  const [isExpanded, setIsExpanded] = useState(true);
  const arrowRotation = isExpanded ? '180deg' : '0deg';

  const clearBuyer = useAccountStore((state) => state.clearBuyer);
    
  const handleLogout = () => {
    clearBuyer(); // Clear the account store
    navigation.goBack(); // Navigate back
  };


  useEffect(() => {
    const fetchBuyerProfile = async () => {
      if (!buyer?.token) {
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/buyer/auth/profile`, {
          headers: {
            Authorization: `Bearer ${buyer?.token}`, // Use token from Zustand store
          },
        });

        setBuyerProfile(response.data.data.buyer);
        console.log('Buyer profile:', response.data.data.buyer);
      } catch (error) {
        console.error('Error fetching Buyer profile:', error);
        Alert.alert('Error', 'Failed to fetch Buyer profile. Please try again.');
      }
    };

    fetchBuyerProfile();
  }, [buyer?.token]);

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
            {buyerProfile? (
            <Heading
              title={buyerProfile.fullName}
              style={[
                theme.fonts.largeSubHeaderSemiBold,
                {textAlign: 'center', marginBottom: theme.spacing.V1},
              ]}
            />
            ) : (
              <Heading
              title= "Loading Name..."
              style={[
                theme.fonts.largeSubHeaderSemiBold,
                {textAlign: 'center', marginBottom: theme.spacing.V1},
              ]}
              />
            )
          }
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
              {buyerProfile? (
              <InfoRow
                label="Name"
                value={buyerProfile.fullName}
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
              ):(
              <InfoRow
                label="Name"
                value= "loading..."
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
              )}

              {
                buyerProfile? (
                  <InfoRow
                  label="Email"
                  value={buyerProfile.email}
                  valueStyle={styles.valueStyle}
                  labelStyle={styles.valueStyle}
                />
                ) : 
                (
                  <InfoRow
                label="Email"
                value= "loading..."
                valueStyle={styles.valueStyle}
                labelStyle={styles.valueStyle}
              />
                )
              }
            </View>
          )}
        </View>
        <Button
          variant="pear"
          title="Logout"
          onPress={handleLogout}
          style={styles.paymentButton}
          textStyle={theme.fonts.filterText}
        />
      </View>
    </ScrollView>
  );
};
