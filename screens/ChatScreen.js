import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatScreen = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route);
  }, []);
  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
