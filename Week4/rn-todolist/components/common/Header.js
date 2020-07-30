import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyText from "./Text";

export const TodoListHeader = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle2
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View style={styles.header}>
      <MyText weight="bold" size={22}>
        Your Todo List
      </MyText>
    </View>
  );
};

export const AddTodoHeader = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.icon}>
        <Ionicons name="ios-arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <MyText weight="bold" size={22}>
        Add new todo
      </MyText>
    </View>
  );
};

export const TodoDetailHeader = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.icon}>
        <Ionicons name="ios-arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <MyText weight="bold" size={22}>
        Detail
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerTodo: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "white",
  },
  icon: {
    left: 20,
    padding: 10,
    position: "absolute",
  },
  add: {
    right: 20,
    padding: 10,
    position: "absolute",
  },
});
