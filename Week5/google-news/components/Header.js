import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "./Text";

const Header = (props) => {
  return (
    <View
      style={{
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "lightgray",
        borderBottomWidth: 3,
        marginBottom: 10,
      }}
    >
      <MyText weight="bold" size={24}>
        TODAY NEWS
      </MyText>
    </View>
  );
};

export default Header;
