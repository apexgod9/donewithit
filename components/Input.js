import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Linking } from "react-native";

const Input = (props) => {
  const [text, onChangeText] = useState("");
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        keyboardType={props.type || "default"}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default Input;
