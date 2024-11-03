import React, {FC} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useStyles} from './ContactsScreen.styles'; // Assuming you're using the styles
import {useTheme} from '~Contexts/ThemeContext'; // Import your theme
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {Path} from '~Navigators/routes';
import {InitialsAvatar} from './Components';

const randomChats = [
    {
      id: 1,
      name: 'Mushtaq Ali',
      messages: [
        { id: 1, text: 'Hello! How are you?', createdAt: '2023-10-22T14:30:00Z', senderId: 1 },
        { id: 2, text: 'I am good, thanks! How about you?', createdAt: '2023-10-22T14:32:00Z', senderId: 2 },
      ],
      lastMessageTime: '2:30 PM',
    },
    {
        id: 2,
        name: 'Talha Hanif',
        lastMessage: 'Why isn’t the app done yet?',
        lastMessageTime: '11:00 AM',
        messages: [
          { id: 1, text: 'Hey, when will the app be ready?', createdAt: '2023-10-22T11:00:00Z', senderId: 2 }, // Talha
          { id: 2, text: 'Jab tak main apni secret potion nahi bana leta! 🍵', createdAt: '2023-10-22T11:01:00Z', senderId: 1 }, // Your response
          { id: 3, text: 'Aap to wizard hain, sirf jadoo kar lo!', createdAt: '2023-10-22T11:02:00Z', senderId: 2 }, // Talha
          { id: 4, text: 'Agar aap sorting hat pehno to sab kuch ho jayega! 🎩', createdAt: '2023-10-22T11:03:00Z', senderId: 1 }, // Your response
          { id: 5, text: 'Seriously, mujhe aaj hi app chahiye!', createdAt: '2023-10-22T11:04:00Z', senderId: 2 }, // Talha
          { id: 6, text: 'Main to owl se bhej doonga! 🦉', createdAt: '2023-10-22T11:05:00Z', senderId: 1 }, // Your response
          { id: 7, text: 'Yeh koi mazak nahi hai! Jaldi karo!', createdAt: '2023-10-22T11:06:00Z', senderId: 2 }, // Talha
          { id: 8, text: 'Mujhe juggler bana do! Par app nahi! 🤹‍♂️', createdAt: '2023-10-22T11:07:00Z', senderId: 1 }, // Your response
          { id: 9, text: 'Juggling se kuch nahi hoga, results chahiye!', createdAt: '2023-10-22T11:08:00Z', senderId: 2 }, // Talha
          { id: 10, text: 'Results to kuch hi jadoo se aayenge! 🪄', createdAt: '2023-10-22T11:09:00Z', senderId: 1 }, // Your response
          { id: 11, text: 'Acha, timeline kya hai?', createdAt: '2023-10-22T11:10:00Z', senderId: 2 }, // Talha
          { id: 12, text: 'Main to crystal ball se pooch raha hoon! 🔮', createdAt: '2023-10-22T11:11:00Z', senderId: 1 }, // Your response
          { id: 13, text: 'Agar app aaj nahi hua to main to ghar chala jaunga!', createdAt: '2023-10-22T11:12:00Z', senderId: 2 }, // Talha
          { id: 14, text: 'Ghar to ja rahe hain, lekin thoda roti le aana! 🍞', createdAt: '2023-10-22T11:13:00Z', senderId: 1 }, // Your response
        ],
      },
      {
        id: 3,
        name: 'Zubair Sindhi',
        lastMessage: 'Mujhe to lag raha tha ke yeh waqt par aayega.',
        lastMessageTime: 'Yesterday',
        messages: [
          { id: 1, text: 'The product arrived late.', createdAt: '2023-10-21T09:00:00Z', senderId: 1 }, // Zubair
          { id: 2, text: 'Sindh ke rehne waly, mehman nawaz hain saray! Lekin aap to aise late aaye jaise mehmaan kahan jate hain! 🎶', createdAt: '2023-10-21T09:01:00Z', senderId: 2 }, // Your response
          { id: 3, text: 'Acha, agar mehman khaas ho, to unhe late to karna hi padega!', createdAt: '2023-10-21T09:02:00Z', senderId: 1 }, // Zubair
          { id: 4, text: 'Wah bhai, aap to mehman ban gaye! Baki to kuch nahi, sirf cheezon ka intezar kar raha tha! 😂', createdAt: '2023-10-21T09:03:00Z', senderId: 2 }, // Your response
          { id: 5, text: 'Mujhe to ab samajh aaya, Sindhi mehman kabhi kabhi late aate hain!', createdAt: '2023-10-21T09:04:00Z', senderId: 1 }, // Zubair
          { id: 6, text: 'Lekin bhai, ab toh aapko time par aana chahiye! Nahi toh khana bhi thanda ho jayega! 🍽️', createdAt: '2023-10-21T09:05:00Z', senderId: 2 }, // Your response
          { id: 7, text: 'Khana toh thanda hona hai, lekin mehfil ka maza nahi chhodna!', createdAt: '2023-10-21T09:06:00Z', senderId: 1 }, // Zubair
          { id: 8, text: 'Agar aap late aayenge toh mehfil bhi khatam ho jayegi! 😄', createdAt: '2023-10-21T09:07:00Z', senderId: 2 }, // Your response
          { id: 9, text: 'Achha, ab se time par aaoonga! Aapki duaon ka asar hai!', createdAt: '2023-10-21T09:08:00Z', senderId: 1 }, // Zubair
          { id: 10, text: 'Duaon se nahi, mehfil mein shamil hone se late nahi aate! 😉', createdAt: '2023-10-21T09:09:00Z', senderId: 2 }, // Your response
        ],
      },
    {
      id: 4,
      name: 'Rizwan Khan',
      messages: [
        { id: 1, text: 'I need more information.', createdAt: '2023-10-20T10:00:00Z', senderId: 1 },
        { id: 2, text: 'What do you need?', createdAt: '2023-10-20T10:05:00Z', senderId: 2 },
      ],
      lastMessageTime: '2 days ago',
    },
  ];
  

type ContactsScreenProps = StackScreenProps<AuthParamList>;

export const ContactsScreen: FC<ContactsScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  // Open chat function
  const openChat = (chat: any) => {
    navigation.navigate(Path.CHAT_SCREEN, {contact: chat});
  };

  // Render each chat item
  const renderChatItem = ({ item }: { item: any }) => {
    const lastMessage = item.messages[item.messages.length - 1]; // Get the last message
    return (
      <TouchableOpacity onPress={() => openChat(item)} style={styles.chatItem}>
        <View style={styles.chatItemContainer}>
          <InitialsAvatar name={item.name} size={40} />
          <View style={styles.chatInfoContainer}>
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatLastMessage}>{item.lastMessageTime}</Text> {/* Show the time of the last message */}
            </View>
            <Text style={styles.chatLastMessage}>{lastMessage.text}</Text> {/* Show the text of the last message */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={randomChats} // Data of random chats
        renderItem={renderChatItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
