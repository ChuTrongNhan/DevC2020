import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#f3f6fa",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
        }}
        style={{
          flex: 1,
          width: null,
          height: 44,
        }}
        resizeMode="contain"
      />
      <Feather name="inbox" size={27} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
