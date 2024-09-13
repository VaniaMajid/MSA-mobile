import React, { FC } from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';
import { useStyles } from './StepIndicator.styles';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: FC<StepIndicatorProps> = ({currentStep}) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.circle,
            currentStep >= 1 ? styles.activeCircle : styles.inactiveCircle,
          ]}>
          <Text
            style={[
              currentStep >= 1 ? styles.activeText : styles.inactiveText,
            ]}>
            1
          </Text>
        </View>
        <Text
          style={[
            theme.fonts.allCapsSubtext,
            currentStep >= 1 ? styles.activeLabel : styles.inactiveLabel,
          ]}>
          PERSONAL INFO
        </Text>
      </View>
      <View
        style={[styles.line,{
          borderColor: currentStep > 1 ? theme.colors.primaryColor : theme.colors.grayBg
        }]}
      />
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.circle,
            currentStep > 1 ? styles.activeCircle : styles.inactiveCircle,
          ]}>
          <Text
            style={[
              theme.fonts.allCapsSubtext,
              currentStep > 1 ? styles.activeText : styles.inactiveText,
            ]}>
            2
          </Text>
        </View>
        <Text
          style={[
            theme.fonts.allCapsSubtext,
            currentStep > 1 ? styles.activeLabel : styles.inactiveLabel,
          ]}>
          REVIEW & CONFIRM
        </Text>
      </View>
    </View>
  );
};

