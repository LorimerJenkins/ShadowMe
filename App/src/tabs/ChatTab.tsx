import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { AuthContext } from '../utils/AuthSession';
import { getChat } from '../utils/getChat';
import { sendMessage } from '../utils/sendMessage';

interface Message {
  id: number;
  text: string;
  sender: string;
}

interface ChatLogData {
  content: string;
  sender: string;
  timestamp: string;
}

const ChatTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<FlatList<Message>>(null);
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    const fetchChats = async () => {
      const chatLog = await getChat({
        recipientId: 'google-oauth2|113378216876216346011',
        senderId: userDetails?.sub!,
        function: 'getChat',
      });

      setMessages(chatLog.data.map((m: ChatLogData) => ({
        id: m.timestamp,
        text: m.content,
        sender: m.sender
      })));
    };

    fetchChats();
  }, []);

  const sendMessageAndFetch = async () => {
    await sendMessage({
      senderId: userDetails?.sub!,
      function: 'sendMessage',
      recipientId: 'google-oauth2|113378216876216346011',
      messageContent: input
    });

    const newMessage: Message = {
      id: messages.length,
      text: input,
      sender: userDetails?.sub!,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInput('');

    setTimeout(() => {
      scrollRef.current?.scrollToEnd();
    }, 100);
  };

  const getMessageStyle = (sender: string): ViewStyle => ({
    backgroundColor: sender === userDetails?.sub ? '#e6e6e6' : '#d1e7dd',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    maxWidth: '80%',
  });

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <View style={getMessageStyle(item.sender)}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      {userDetails && userDetails.picture && (
        <Image source={{ uri: userDetails.picture }} style={styles.profilePic} />
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <FlatList<Message>
        ref={scrollRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.chatContainer}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd()}
      />
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={sendMessageAndFetch}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 15
  },
});

export default ChatTab;
