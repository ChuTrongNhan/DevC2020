import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import MyText from "../common/Text";
import { THEME } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { todoToggle, todoRemove } from "../../stores/actions";
import { connect } from "react-redux";
import * as RootNavigation from "../../navigation/RootNavigation";

const Todo = (props) => {
  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={() => {
        RootNavigation.navigate("TodoDetail", {
          id: props.id,
          title: props.title,
          description: props.description,
          active: props.active,
        });
      }}
    >
      <TouchableOpacity
        style={styles.status}
        onPress={() => props.todoToggle(props.id)}
      >
        {props.active ? (
          <Feather name="circle" size={24} color="black" />
        ) : (
          <Feather name="check-circle" size={24} color={THEME.primaryColor} />
        )}
      </TouchableOpacity>
      <View style={{ ...styles.text, opacity: props.active ? 1 : 0.5 }}>
        <MyText
          weight="medium"
          size={18}
          style={{
            textDecorationLine: props.active ? "none" : "line-through",
          }}
        >
          {props.title}
        </MyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#f7f7f7",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    marginBottom: 20,
  },
  status: {
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    marginLeft: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  todoToggle: (id) => dispatch(todoToggle(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
