import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.goToFeed}>
        <Feather name="arrow-left" size={28} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="navicon" size={28} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
    marginBottom: 10,
  },
});

export default Header;
