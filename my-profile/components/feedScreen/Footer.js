import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <AntDesign name="home" size={24} color="gray" />
      <AntDesign name="pluscircleo" size={24} color="gray" />
      <AntDesign name="user" size={24} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
});

export default Footer;
