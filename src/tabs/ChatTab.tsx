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
import { getChats } from '../utils/getChats'


interface Message {
  id: number;
  text: string;
  sender: string;
}


const ChatTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<FlatList<Message>>(null);
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    const fetchChats = async () => {
      const chatLog = await getChats();
      setMessages(chatLog.messages.map((m, index) => ({
        id: index,
        text: m.content,
        sender: m.sender
      })));
    };

    fetchChats();
  }, []);

  const sendMessage = (message: string, sender: 'sender' | 'receiver', questionIndex?: number) => {
    setMessages([...messages, { id: messages.length, text: message, sender }]);
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
      <View style={getMessageStyle(item.sender === userDetails?.sub ? 'sender' : 'receiver')}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      {item.sender === userDetails?.sub && userDetails && userDetails.picture && (
        <Image source={{ uri: userDetails.picture }} style={styles.profilePic} />
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={10}
    >
      <FlatList<Message>
        ref={scrollRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.chatContainer}
      />
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => {
          sendMessage(input, 'sender');
          setInput('');
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
  questionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  question: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
    backgroundColor: '#e6e6e6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
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
