import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    Keyboard.dismiss();
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginCard}>
        <StatusBar style="dark" />
        <Image
          source={require("../assets/images/logo.jpg")}
          style={{ width: 100, height: 100, borderRadius: 80 }}
        />
        <Text style={styles.cardHeader}>Login</Text>
        <Input
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
        <Button
          title="Sign in"
          containerStyle={styles.button}
          onPress={signIn}
        />
        <Text
          style={{ color: "green", paddingBottom: 5, fontWeight: "bold" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Forgot Password?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
            padding: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={() => {}}
            ></Icon.Button>
            <Text style={{ color: "#3e3ef0", fontWeight: "bold" }}>
              Login with facebook
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Icon.Button
              name="google"
              backgroundColor="grey"
              onPress={() => {}}
            ></Icon.Button>
            <Text style={{ color: "#c40c0f", fontWeight: "bold" }}>
              Login with google
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        Don't have an account?
      </Text>
      <Button
        title="Register"
        containerStyle={styles.outerBtn}
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8a1d1",
  },
  loginCard: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: 30,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
  },
  cardHeader: {
    margin: 3,
    fontSize: 29,
    fontWeight: "bold",
    color: "#9112c7",
  },
  button: {
    width: 80,
    marginBottom: 10,
  },
  outerBtn: {
    marginTop: 10,
  },
});

export default LoginScreen;
