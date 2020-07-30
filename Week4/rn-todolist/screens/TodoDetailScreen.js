import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Footer from "../components/todo-screen/Footer";
import MyText from "../components/common/Text";
import { THEME } from "../constants";
import { Feather } from "@expo/vector-icons";
import { todoToggle, todoRemove } from "../stores/actions";
import { connect } from "react-redux";

const TodoDetailScreen = ({ route, navigation, todoToggle, todoRemove }) => {
  const [status, setStatus] = useState(route.params.active);
  const { id, title, description, active } = route.params;

  const remove = () => {
    Alert.alert(
      "Remove",
      "Are you sure you want to remove this todo permanently ?",
      [
        {
          text: "OK",
          onPress: () => {
            todoRemove(id);
            navigation.navigate("TodoList");
          },
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.todoDetail}>
          <MyText weight="bold" size={24} style={{ marginBottom: 20 }}>
            {title}
          </MyText>
          <MyText style={{ marginBottom: 20 }}>{description}</MyText>
          <View style={styles.todoStatus}>
            <Switch
              style={{ marginRight: 10 }}
              trackColor={{ false: "#dedede", true: THEME.primaryColor }}
              thumbColor="#f4f3f4"
              onValueChange={() => {
                setStatus((status) => !status);
                todoToggle(id);
              }}
              value={status}
            />
            <MyText weight="bold" color={status ? THEME.primaryColor : "gray"}>
              {status ? "Active" : "Completed !"}
            </MyText>
          </View>
          <TouchableOpacity style={styles.removeButton} onPress={remove}>
            <Feather name="trash-2" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  scrollView: {
    padding: 10,
  },
  todoDetail: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.49,

    elevation: 8,
  },
  todoStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    position: "absolute",
    right: 0,
    backgroundColor: THEME.primaryColor,
    padding: 15,
    borderRadius: 10,
    borderTopRightRadius: 30,
    shadowColor: THEME.primaryColor,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

const mapDispatchToProps = (dispatch) => ({
  todoToggle: (id) => dispatch(todoToggle(id)),
  todoRemove: (id) => dispatch(todoRemove(id)),
});

export default connect(null, mapDispatchToProps)(TodoDetailScreen);
