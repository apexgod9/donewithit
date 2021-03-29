import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();
const globalSreenOptions = {
  headerStyle: {
    backgroundColor: "#f4f9f9",
  },
  headerTitleStyle: { color: "#f4f9f9" },
  headerTintColor: "white",
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalSreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ddfd3",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
