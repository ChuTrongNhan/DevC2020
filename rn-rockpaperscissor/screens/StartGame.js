import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const StartGame = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Wallpaper.png")}
        style={styles.img}
      />
      <TouchableOpacity style={styles.button} onPress={props.startGame}>
        <Text>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 99,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
  },
  img: {
    resizeMode: "contain",
    height: 200,
  },
});

export default StartGame;
