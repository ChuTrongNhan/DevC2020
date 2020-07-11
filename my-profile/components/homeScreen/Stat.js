import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyText, MyBoldText, MyBlackText } from "../MyText";

const Block = (props) => {
  return (
    <View style={styles.block}>
      <MyText size={22}>{props.number}</MyText>
      <MyBlackText size={18} color={"lightgray"}>
        {props.title}
      </MyBlackText>
    </View>
  );
};

const Stat = (props) => {
  const stats = [
    { id: 1, number: 200, title: "Photos" },
    { id: 2, number: "15K", title: "Followers" },
    { id: 3, number: 600, title: "Following" },
  ];
  return (
    <View style={styles.stat}>
      {stats.map((item) => {
        return <Block key={item.id} number={item.number} title={item.title} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stat: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  block: {
    alignItems: "center",
    width: 100,
  },
});

export default Stat;
