import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions,
  Text,
  Alert,
} from "react-native";
import { MyBlackText, MyBoldText, MyText } from "../components/MyText";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

const TopPanel = () => {
  const downOnPress = () => {
    Alert.alert(
      "Download",
      "You have downloaded this photo",
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
    <View style={styles.topPanel}>
      <View>
        <MyBlackText size={36}>Eiffel Tower</MyBlackText>
        <View style={{ flexDirection: "row" }}>
          <Fontisto
            style={{ paddingRight: 10 }}
            name="map-marker-alt"
            size={18}
            color="lightgray"
          />
          <MyBoldText color={"lightgray"}>
            <Text style={{ padding: 10 }}>Paris, France</Text>
          </MyBoldText>
        </View>
      </View>
      <View style={styles.shadow}>
        <TouchableHighlight
          onPress={downOnPress}
          style={styles.button}
          underlayColor="#6ad2f7"
          activeOpacity={0.6}
        >
          <Fontisto name="cloud-down" size={24} color="white" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const Tag = (props) => {
  return (
    <View style={styles.tag}>
      <MyBlackText color={"#aaa"}>#{props.content}</MyBlackText>
    </View>
  );
};

const Detail = (props) => {
  const caption =
    "The design of the Eiffel Tower is attributed to Maurice Koechlin and Émile Nouguier.";
  return (
    <View>
      <Image style={styles.image} source={props.imgSource} />
      <View style={styles.panel}>
        <TopPanel />
        <MyBlackText size={18}>{caption}</MyBlackText>
        <View style={styles.tags}>
          <Tag content={"photography"} />
          <Tag content={"sea"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPanel: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    height: Dimensions.get("window").width * 0.8,
  },
  panel: {
    padding: 20,
  },
  tags: {
    flexDirection: "row",
    marginVertical: 10,
  },
  tag: {
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginEnd: 10,
  },
  shadow: {
    shadowColor: "#4ca3d1",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    marginLeft: "auto",
  },
  button: {
    backgroundColor: "#4ca3d1",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
  },
});

export default Detail;
