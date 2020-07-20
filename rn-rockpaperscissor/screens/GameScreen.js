import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Player = ({ name, playerMove }) => {
  const images = [
    require("../assets/images/rock.png"),
    require("../assets/images/paper.png"),
    require("../assets/images/scissor.png"),
  ];
  return (
    <View style={styles.player}>
      <Text>{name}</Text>
      <Image source={images[playerMove]} style={styles.moveImg} />
    </View>
  );
};

const ChooseMove = (props) => {
  return (
    <View style={styles.options}>
      <TouchableOpacity onPress={() => props.choose(0)} style={styles.option}>
        <FontAwesome name="hand-rock-o" size={24} color="black" />
        <Text style={styles.moveText}>Rock</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.choose(1)} style={styles.option}>
        <FontAwesome name="hand-paper-o" size={24} color="black" />
        <Text style={styles.moveText}>Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.choose(2)} style={styles.option}>
        <FontAwesome name="hand-scissors-o" size={24} color="black" />
        <Text style={styles.moveText}>Scissor</Text>
      </TouchableOpacity>
    </View>
  );
};

const Result = ({ moves }) => {
  let result = "Tie Game";
  if (moves.computer != moves.you) {
    if (moves.computer - moves.you == 1 || moves.computer - moves.you == -2)
      result = "Defeat!";
    else result = "Victory!";
  }
  return (
    <View style={styles.result}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const [move, setMove] = useState({ you: 0, computer: 0 });

  const onChooseMove = (id) => {
    let rand = Math.floor(Math.random() * 3);
    setMove({ you: id, computer: rand });
  };

  return (
    <View style={styles.conteiner}>
      <View style={styles.board}>
        <Player name={"YOU"} playerMove={move.you} />
        <Player name={"COMP"} playerMove={move.computer} />
      </View>
      <Result moves={move} />
      <ChooseMove choose={onChooseMove} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    padding: 30,
  },
  board: {
    flexDirection: "row",
    minHeight: 300,
    marginBottom: 20,
  },
  player: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    marginTop: "auto",
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
    width: 80,
  },
  moveText: {
    margin: 5,
  },
  moveImg: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    margin: 10,
  },
  result: {
    backgroundColor: "#ead705",
    padding: 10,
  },
  resultText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default GameScreen;
