import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({currentStep}) => {
  const theme = useTheme();
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
              styles.stepText,
              currentStep >= 1 ? styles.activeText : styles.inactiveText,
            ]}>
            1
          </Text>
        </View>
        <Text
          style={[
            styles.label,
            currentStep >= 1 ? styles.activeLabel : styles.inactiveLabel,
          ]}>
          PERSONAL INFO
        </Text>
      </View>
      <View
        style={{
          borderRadius: 6,
          borderWidth: 3,
          borderColor: currentStep > 1 ? '#5C4DFF' : '#EFF0F6',
          width: '50%',
          marginTop: -theme.spacing.V2,
        }}
      />
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.circle,
            currentStep > 1 ? styles.activeCircle : styles.inactiveCircle,
          ]}>
          <Text
            style={[
              styles.stepText,
              currentStep > 1 ? styles.activeText : styles.inactiveText,
            ]}>
            2
          </Text>
        </View>
        <Text
          style={[
            styles.label,
            currentStep > 1 ? styles.activeLabel : styles.inactiveLabel,
          ]}>
          REVIEW & CONFIRM
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between the steps
    paddingVertical: 20,
    paddingHorizontal: 40, // Ensure space from the sides of the screen
  },
  stepContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeCircle: {
    backgroundColor: '#5C4DFF', // Purple for active step
  },
  inactiveCircle: {
    borderWidth: 2,
    borderColor: '#D3D3D3', // Grey for inactive step
    backgroundColor: '#FFF',
  },
  stepText: {
    fontWeight: 'bold',
  },
  activeText: {
    color: '#FFF', // White text for active step
  },
  inactiveText: {
    color: '#D3D3D3', // Grey text for inactive step
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#000', // Darker text for active step
  },
  inactiveLabel: {
    color: '#D3D3D3', // Lighter grey text for inactive step
  },
  lineContainer: {
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    backgroundColor: '#E8E8E8',
  },
});
