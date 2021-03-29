import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "./Input";
const LoginCard = () => {
  const btnHandler = () => {};
  return (
    <>
      <View style={styles.cardLogin}>
        <Text>Login</Text>
        <Input placeholder="username" />
        <Input placeholder="password" type="numeric" />
        <Button title="Press me" onPress={() => btnHandler()} />
        <Text
          style={{ color: "green" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Forgot Password?
        </Text>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => {}}
        >
          Login with Facebook
        </Icon.Button>
        <Icon.Button name="google" backgroundColor="grey" onPress={() => {}}>
          Login with Google
        </Icon.Button>
        <Text style={{ color: "green" }}>Don't have an account?</Text>
        <Text
          style={{ color: "green" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Register
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  cardLogin: {
    backgroundColor: "#f9f3f3",
    alignItems: "center",
    width: "70%",
    borderRadius: 30,
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default LoginCard;
