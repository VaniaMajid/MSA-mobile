import React, { useState, useCallback, useEffect } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { GiftedChat, IMessage, InputToolbar, Bubble } from 'react-native-gifted-chat';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { useStyles } from './ChatScreen.styles'; // Assuming useStyles is from your styles file
import { useTheme } from '~Contexts/ThemeContext'; // Import your theme
import { PermissionsAndroid } from 'react-native';
import { IconMicActive, IconMicInactive } from '~Components/Icons';

export const ChatScreen = () => {
  const styles = useStyles();
  const theme = useTheme();

  // Explicitly type the messages state as IMessage[]
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isRecording, setIsRecording] = useState(false); // Handle recording state

  const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());
  const [recordingPath, setRecordingPath] = useState<string | null>(null);


  useEffect(() => {
    // Set up initial messages
    setMessages([
      {
        _id: 1,
        text: 'Hello! This is a test message.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  // Function to handle sending new messages
  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    console.log('Sent message:', newMessages[0]);
  }, []);

   // Request recording permission (Android)
  //  const requestPermissions = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.requestMultiple([
  //       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //     ]);
  //     return (
  //       granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
  //       granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
  //       granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
  //     );
  //   } catch (err) {
  //     console.warn(err);
  //     return false;
  //   }
  // };

  // Start recording audio
  // const startRecording = async () => {
  //   const permissionGranted = await requestPermissions();
  //   if (!permissionGranted) return;

  //   setIsRecording(true);
  //   const result = await audioRecorderPlayer.startRecorder();
  //   setRecordingPath(result);
  //   console.log('Recording started: ', result);
  // };

  // Stop recording audio and send it as a message
  const stopRecording = async () => {
    setIsRecording(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordingPath(result);
    console.log('Recording stopped and saved at: ', result);

    // Send the voice message in GiftedChat
    const newMessage: IMessage = {
      _id: Math.random().toString(),
      text: '',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'User 1',
      },
      audio: result, // Custom 'audio' prop to hold the audio path
    };
    onSend([newMessage]);
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages} // Messages to display
        onSend={newMessages => onSend(newMessages)} // Handle sending new messages
        user={{
          _id: 1, // Current user ID
          name: 'User 1', // Current user name
        }}
        renderAvatarOnTop={true} 
        renderInputToolbar={props => (
          <View style={styles.inputToolbar}>
            <InputToolbar {...props} containerStyle={styles.input} /> {/* Use InputToolbar directly */}
            {/* Mic Icon for voice message */}
            <TouchableOpacity
              // onPressIn={startRecording}  // Start recording on press
              // onPressOut={startRecording} // Stop recording when released
              style={styles.micButton}
            >
              {isRecording ? (
                <IconMicActive size="xxs"/>
              ) : (
                <IconMicInactive size="xxs" />
              )}
              {isRecording && <Text style={styles.recordingText}>Recording...</Text>}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};