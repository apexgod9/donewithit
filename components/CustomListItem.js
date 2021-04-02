import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            "https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>Shinchan</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is just crazy subtitlevhvbwhbv aaaaaaaaa bbbbbbb bjb jwbjbjbj
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});