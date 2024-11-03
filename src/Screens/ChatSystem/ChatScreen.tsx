import React, { FC, useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GiftedChat, IMessage, InputToolbar, Send, Bubble } from 'react-native-gifted-chat';
import { useStyles } from './ChatScreen.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthParamList } from '~Navigators/AuthParamList';

type ChatScreenProps = StackScreenProps<AuthParamList>;

export const ChatScreen: FC<ChatScreenProps> = ({ route }) => {
  const styles = useStyles();
  const theme = useTheme();

  const { contact } = route.params;

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    // Set initial messages based on the selected contact's message history
    // const contactMessages = contact.messages.reverse()
    setMessages(contact.messages.reverse().map(msg => ({
      _id: msg.id,
      text: msg.text,
      createdAt: new Date(msg.createdAt),
      user: {
        _id: msg.senderId, // Use the sender ID from the message
        name: msg.senderId === 1 ? 'User 1' : contact.name, // Set user name based on sender ID
      },
    })));
  }, [contact]);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    console.log('Sent message:', newMessages[0]);
  }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            ...theme.fonts.paragraphRegularSmall,
            color: theme.colors.white,
          },
          left: {
            ...theme.fonts.paragraphRegularSmall,
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: theme.colors.primaryOrange,
          },
          left: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </View>
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1, // Current user ID
          name: 'User 1',
        }}
        renderAvatarOnTop={true}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderInputToolbar={props => (
          <View style={styles.inputToolbar}>
            <InputToolbar {...props} containerStyle={styles.input} />
          </View>
        )}
      />
    </View>
  );
};
