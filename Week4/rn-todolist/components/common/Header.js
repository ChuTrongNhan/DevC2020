import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "./Text";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <MyText weight="bold" size={24} style={styles.headerTitle}>
        My Todo List
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    padding: 30,
  },
  headerTitle: {
    textAlign: "center",
  },
});

export default Header;
