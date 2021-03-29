import React from "react";
import { StyleSheet, View } from "react-native";
import LoginCard from "./components/LoginCard";
function App() {
  return (
    <View style={styles.container}>
      <LoginCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ddfd3",
    alignItems: "center",
    justifyContent: "center",
  },
  cardLogin: {
    backgroundColor: "#f9f3f3",
    alignItems: "center",
    width: "70%",
  },
});

export default App;
