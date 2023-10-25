import React, { useState, useRef, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { AuthContext } from '../utils/AuthSession';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'helper';
}

const commonQuestions = [
  "Where's good for food around here?",
  "How do I book a stay?",
  "There is a problem with my property.",
];

const ChatTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const scrollRef = useRef<FlatList<Message>>(null);

  const { userDetails } = useContext(AuthContext);

  const sendMessage = (message: string, sender: 'user' | 'helper', questionIndex?: number) => {
    setMessages([...messages, { id: messages.length, text: message, sender }]);
    if (answeredQuestions.length !== commonQuestions.length)
      setAnsweredQuestions(commonQuestions.map((_, index) => index));
  };

  const getMessageStyle = (sender: 'user' | 'helper'): ViewStyle => ({
    backgroundColor: sender === 'user' ? '#e6e6e6' : '#d1e7dd',
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
      {item.sender === 'user' && userDetails && userDetails.picture && (
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
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        ListHeaderComponent={<Text style={styles.header}>How can we help you?</Text>}
      />
      <View style={styles.questionsContainer}>
        {commonQuestions.map((question, index) => (
          !answeredQuestions.includes(index) && (
            <TouchableOpacity key={index} onPress={() => sendMessage(question, 'user', index)}>
              <Text style={styles.question}>{question}</Text>
            </TouchableOpacity>
          )
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => {
          sendMessage(input, 'user');
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
