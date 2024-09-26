import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';
import {useStyles} from './StepIndicator.styles';
import {PressableText} from '~Components/PressableText';
import {IconChevronleft} from '~Components/Icons';

interface StepIndicatorProps {
  currentStep: number;
  onPreviousStep: () => void;
}

export const StepIndicator: FC<StepIndicatorProps> = ({
  currentStep,
  onPreviousStep,
}) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.line,
            {
              backgroundColor:
                currentStep > 0
                  ? theme.colors.primaryColor
                  : theme.colors.grayBg,
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              backgroundColor:
                currentStep > 1
                  ? theme.colors.primaryColor
                  : theme.colors.grayBg,
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              backgroundColor:
                currentStep > 2
                  ? theme.colors.primaryColor
                  : theme.colors.grayBg,
            },
          ]}
        />
      </View>
      <View style={styles.stepTextContainer}>
        <PressableText
          text="Previous"
          onPress={onPreviousStep}
          style={[theme.fonts.filterText, {color: currentStep === 1? theme.colors.darkGray : theme.colors.primaryColor}]}
          icon={
            <IconChevronleft size="xxxxs" color={currentStep === 1? theme.colors.darkGray : theme.colors.primaryColor } />
          }
          containerStyle={styles.pressableText}
          disabled={currentStep === 1}
        />
        <Text style={styles.text}>
          Question {currentStep} of 3
        </Text>
      </View>
    </View>
  );
};
