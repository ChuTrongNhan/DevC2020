import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import * as RootNavigation from "../../navigation/RootNavigation";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { THEME } from "../../constants";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => {
          RootNavigation.navigate("TodoList");
        }}
      >
        <SimpleLineIcons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          RootNavigation.navigate("AddTodo");
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerIcon}
        onPress={() => {
          Alert.alert(
            "We are sorry !",
            "This functionality is under maintenance",
            [{ text: "OK" }],
            { cancelable: true }
          );
        }}
      >
        <SimpleLineIcons name="settings" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: "auto",
  },
  footerIcon: {
    padding: 20,
  },
  buttonAdd: {
    borderRadius: 20,
    width: 60,
    height: 60,
    backgroundColor: THEME.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: THEME.secondaryColor,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default Footer;
