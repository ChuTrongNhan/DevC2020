import { connect } from "react-redux";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import MyText from "../components/common/Text";
import Todo from "../components/todo-screen/Todo";
import Footer from "../components/todo-screen/Footer";
import { THEME } from "../constants";

const NoTodo = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/yoga2.jpg")}
        style={{ height: 200, resizeMode: "contain" }}
      />
      <MyText
        weight="medium"
        color="#95bcdb"
        style={{
          padding: 20,
          textAlign: "center",
        }}
      >
        No task is waiting. You are having free time.
      </MyText>
    </View>
  );
};

const AllTodoScreen = ({ todos }) => {
  const [filterPick, setFilterPick] = useState(0);

  const Filter = ({ idx, title }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFilterPick(idx);
        }}
        style={filterPick === idx ? styles.filterActive : styles.filterInActive}
      >
        <MyText weight="bold" color={filterPick === idx ? "white" : "gray"}>
          {title}
        </MyText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.filters}>
        <Filter idx={0} title="ALL" />
        <Filter idx={1} title="ACTIVE" />
        <Filter idx={2} title="DONE" />
      </View>
      {todos.length > 0 ? (
        <FlatList
          data={
            filterPick == 0
              ? todos
              : todos.filter((todo) => {
                  if (filterPick == 1) return todo.active;
                  else return !todo.active;
                })
          }
          keyExtractor={(todo) => todo.id}
          renderItem={({ item, index }) => (
            <Todo
              id={item.id}
              title={item.title}
              description={item.description}
              active={item.active}
            />
          )}
        ></FlatList>
      ) : (
        <NoTodo />
      )}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  filters: {
    flexDirection: "row",
    marginBottom: 30,
  },
  filterActive: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: THEME.primaryColor,
    borderWidth: 1,
    marginEnd: 5,
    borderColor: THEME.primaryColor,
  },
  filterInActive: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginEnd: 5,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

const mapStateToProps = (state) => ({
  todos: state,
});

export default connect(mapStateToProps)(AllTodoScreen);
