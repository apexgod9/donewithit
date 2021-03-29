import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back",
    });
  }, [navigation]);

  const register = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginCard}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.cardHeader}>Register</Text>
        <Input
          placeholder="Full Name"
          type="text"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Pic URL (optional)"
          secureTextEntry
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
        <Button
          title="Register"
          raised
          containerStyle={styles.button}
          onPress={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8a1d1",
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
  button: {
    width: 80,
    marginBottom: 10,
  },
  outerBtn: {
    marginTop: 10,
  },
});
