import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Post from "../components/feedScreen/Post";
import { SCREENS } from "../constants";

const Feed = (props) => {
  const images = [
    { id: "1", imgSource: require("../assets/images/1.jpg") },
    { id: "2", imgSource: require("../assets/images/2.jpg") },
    { id: "3", imgSource: require("../assets/images/3.jpg") },
    { id: "4", imgSource: require("../assets/images/4.jpg") },
    { id: "5", imgSource: require("../assets/images/5.jpg") },
    { id: "6", imgSource: require("../assets/images/6.jpg") },
    { id: "7", imgSource: require("../assets/images/7.jpg") },
    { id: "8", imgSource: require("../assets/images/8.jpg") },
    { id: "9", imgSource: require("../assets/images/9.jpg") },
    { id: "10", imgSource: require("../assets/images/10.jpg") },
  ];

  return (
    <View style={styles.feedScreen}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Post
            key={item.id}
            imgSource={item.imgSource}
            goTo={(screen) => props.goTo(screen)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  postView: {
    paddingVertical: 20,
  },
});

export default Feed;
