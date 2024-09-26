import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {useStyles} from './CustomModal.styles';
import {CustomModalProps} from './types';
import {Heading} from '~Components/Heading';
import {PressableText} from '~Components/PressableText';

export const CustomModal: FC<CustomModalProps> = ({
  visible,
  header,
  description,
  primaryButtonText,
  primaryButtonHandler,
  secondaryButtonText,
  secondaryButtonHandler,
  descriptionStyle,
}) => {
  const styles = useStyles();

  return (
    <Modal
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.4}
      onBackdropPress={secondaryButtonHandler}
      useNativeDriver={true}>
      <View style={styles.modalContent}>
        <View style={styles.modalText}>
          {header && <Heading title={header} style={styles.header} />}
          <Text style={[styles.description, descriptionStyle]}>
            {description}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {secondaryButtonText && secondaryButtonHandler && (
            <>
              <PressableText
                text={secondaryButtonText}
                onPress={secondaryButtonHandler}
                style={styles.buttonText}
              />
              <View style={styles.divider} />
            </>
          )}
          <PressableText
            text={primaryButtonText}
            onPress={primaryButtonHandler}
            style={styles.buttonText}
          />
        </View>
      </View>
    </Modal>
  );
};
