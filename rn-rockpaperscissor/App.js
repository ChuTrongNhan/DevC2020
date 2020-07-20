import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [screen, setScreen] = useState(0);
  const startGame = () => {
    setScreen(1);
  };

  let content;
  if (screen === 0) content = <StartGame startGame={startGame} />;
  if (screen === 1) content = <GameScreen />;

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
