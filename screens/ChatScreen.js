import React, { useLayoutEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar, Input } from "react-native-elements";
import { Header } from "@react-navigation/stack";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import firebase from "firebase";
import { auth, db } from "../firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      // headerTitleAlign: "center",
      // headerBackTitleVisible:true,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg",
            }}
          />
          <Text>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    Keyboard.dismiss(); // This one hides the keyboard

    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });
    setInput("");
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  }, [route]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "android" ? "height" : "padding"}

        style={styles.container}

        // style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            contentContainerStyle={{ paddingTop: 15 }}
          >
            {/*chat is displayed here*/}
            {messages.map(({ id, data }) =>
              data.email === auth.currentUser.email ? (
                <View key={id} style={styles.receiver}>
                  {/* This is receiver side */}
                  <Avatar
                    rounded
                    position="absolute"
                    //For Web
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      right: -5,
                    }}
                    bottom={-15}
                    right={-5}
                    size={30}
                    source={{ uri: data.photoURL }}
                  />
                  <Text style={styles.receiverText}>{data.message}</Text>
                </View>
              ) : (
                <View key={id} style={styles.sender}>
                  {/* This is sender side */}
                  <Avatar
                    rounded
                    position="absolute"
                    //For Web
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      left: -5,
                    }}
                    bottom={-15}
                    left={-5}
                    size={30}
                    source={{ uri: data.photoURL }}
                  />
                  <Text style={styles.senderText}>{data.message}</Text>
                  <Text style={styles.senderName}>{data.displayName}</Text>
                </View>
              )
            )}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              placeholder="Your message..."
              value={input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={sendMessage}
              style={styles.send}
            >
              <Ionicons name="send" size={30} color="#b34180" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "relative",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    justifyContent: "space-around",
  },
  textInput: {
    flex: 1,
    bottom: 0,
    height: 40,
    marginRight: 15,
    borderColor: "transparent",
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#ECECEC",
    color: "grey",
    borderRadius: 30,
  },
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  receiver: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  receiverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 5,
  },
  senderText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 5,
  },
});
