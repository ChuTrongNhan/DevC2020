import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  const inboxOnPress = () => {
    Alert.alert(
      "Inbox",
      "You are checking your inbox",
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
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => props.goBack()}>
        <AntDesign name="left" size={24} color="gray" />
      </TouchableOpacity>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={inboxOnPress}>
        <AntDesign name="inbox" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 5,
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  logo: {
    flex: 1,
    width: null,
    height: 40,
  },
});

export default Header;
