import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <AntDesign name="plus" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: "#ff1f3d",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
