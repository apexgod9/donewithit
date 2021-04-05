import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Input } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");

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
  }, []);

  const sendMessage = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>{/*chat is displayed here*/}</ScrollView>
          <View style={styles.footer}>
            <Input
              style={styles.textInput}
              placeholder="Your message..."
              value={input}
              onChangeText={(text) => setInput(text)}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#b34180" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
