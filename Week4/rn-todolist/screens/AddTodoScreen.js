import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { todoAdd } from "../stores/actions";
import { connect } from "react-redux";
import * as RootNavigation from "../navigation/RootNavigation";
import MyText from "../components/common/Text";
import { THEME } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const AddTodoScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validate, setValidate] = useState({ title: true, description: true });

  const emptyTitleWarning = "Let's choose a title for this new todo";
  const emptyDescriptionWarning = "Let's write down some notes";

  const add = () => {
    validateTitle();
    if (validate.title && validate.description) {
      props.addTodo(title, description);
      RootNavigation.navigate("TodoList");
    } else {
      Alert.alert(
        "Opps !",
        "Please make sure you have the title for this new todo",
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  };

  const validateTitle = () => {
    if (title) setValidate((validate) => ({ ...validate, title: true }));
    else setValidate((validate) => ({ ...validate, title: false }));
  };

  //Disable requiring description
  const validateDescription = () => {
    if (description)
      setValidate((validate) => ({ ...validate, description: true }));
    else setValidate((validate) => ({ ...validate, description: false }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.inputTitle}
            autoCapitalize="words"
            autoFocus={true}
            placeholder="Title"
            onChangeText={(text) => setTitle(text)}
            value={title}
            onBlur={validateTitle}
          />
          <View style={styles.warningText}>
            {!validate.title && (
              <MyText color={THEME.warningColor}>{emptyTitleWarning}</MyText>
            )}
          </View>
          <TextInput
            style={styles.inputDescription}
            placeholder="Description"
            onChangeText={(text) => setDescription(text)}
            multiline
            value={description}
          />
          <View style={styles.warningText}>
            {!validate.description && (
              <MyText color={THEME.warningColor}>
                {emptyDescriptionWarning}
              </MyText>
            )}
          </View>
        </ScrollView>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={require("../assets/images/decor.png")}
        />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={add}>
            <MyText weight="medium" color="white" size={18}>
              ADD
            </MyText>
            <AntDesign
              style={{ marginLeft: 10 }}
              name="pluscircleo"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  inputTitle: {
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 15,
    fontFamily: "gg-medium",
    fontSize: 24,
  },
  inputDescription: {
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 15,
    fontFamily: "gg-reg",
    fontSize: 16,
  },
  warningText: {
    height: 30,
    paddingHorizontal: 10,
  },
  footer: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: "auto",
  },
  button: {
    flexDirection: "row",
    borderRadius: 20,
    width: 120,
    height: 60,
    marginTop: 20,
    backgroundColor: THEME.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: THEME.secondaryColor,
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
  addTodo: (title, description) => dispatch(todoAdd(title, description)),
});

export default connect(null, mapDispatchToProps)(AddTodoScreen);
