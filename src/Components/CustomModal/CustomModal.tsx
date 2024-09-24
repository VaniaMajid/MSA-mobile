import React, {FC} from 'react';
import {Modal, View, Text} from 'react-native';
import {useStyles} from './CustomModal.styles';
import {CustomModalProps} from './types';
import {Heading} from '~Components/Heading';
import {PressableText} from '~Components/PressableText';

export const CustomModal: FC<CustomModalProps> = ({
  visible,
  header,
  description,
  button1Text,
  button1Handler,
  button2Text,
  button2Handler,
  descriptionStyle
}) => {
  const styles = useStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalText}>
            {header && <Heading title={header} style={styles.header} />}
            <Text style={[styles.description, descriptionStyle]}>{description}</Text>
          </View>

          <View style={styles.buttonContainer}>
            {button2Text && button2Handler && (
              <>
                <PressableText
                  text={button2Text}
                  onPress={button2Handler}
                  style={styles.buttonText}
                />
                <View style={styles.divider} />
              </>
            )}
            <PressableText
              text={button1Text}
              onPress={button1Handler}
              style={styles.buttonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
