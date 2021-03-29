import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  const btnHandler = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <StatusBar style="dark" />
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.cardHeader}>Login</Text>
        <Input
          placeholder="email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" containerStyle={styles.button} onPress={signIn} />
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
        ></Icon.Button>
        <Icon.Button
          name="google"
          backgroundColor="grey"
          onPress={() => {}}
        ></Icon.Button>
      </View>
      <Text style={{ color: "green" }}>Don't have an account?</Text>
      <Text
        style={{ color: "green" }}
        onPress={() => Linking.openURL("http://google.com")}
      >
        Register
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8ac4d0",
  },
  loginCard: {
    backgroundColor: "#f9f3f3",
    width: "70%",
    borderRadius: 30,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    margin: 3,
    fontSize: 29,
  },
  button: {},
});

export default LoginScreen;
