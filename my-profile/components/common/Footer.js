import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SCREENS } from "../../constants";

const Footer = (props) => {
  const addOnPress = () => {
    Alert.alert(
      "Add New Photo",
      "You are adding a new photo",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => props.goTo(SCREENS.feed)}>
        <AntDesign name="home" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={addOnPress}>
        <AntDesign name="pluscircleo" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.goTo(SCREENS.home)}>
        <AntDesign name="user" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    borderTopColor: "#f0f0f0",
    borderTopWidth: 1,
  },
});

export default Footer;
