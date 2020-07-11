import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MyBoldText } from "../MyText";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { SCREENS } from "../../constants";

const Post = (props) => {
  const [countLike, setCountLike] = useState(100);

  const likeHandle = () => {
    setCountLike((i) => i + 1);
  };

  return (
    <View style={styles.post}>
      <TouchableOpacity
        style={styles.postHead}
        onPress={() => props.goTo(SCREENS.home)}
      >
        <Image
          style={styles.avatar}
          source={require("../../assets/images/16.jpg")}
        />
        <MyBoldText>Daisy Johnson</MyBoldText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.goTo(props.imgSource)}>
        <Image style={styles.postImage} source={props.imgSource} />
      </TouchableOpacity>
      <View style={styles.postAction}>
        <TouchableOpacity onPress={likeHandle}>
          <AntDesign
            style={styles.icon}
            name="hearto"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <FontAwesome5
          style={styles.icon}
          name="comment-alt"
          size={22}
          color="black"
        />
        <AntDesign style={styles.icon} name="upload" size={24} color="black" />
      </View>
      <View style={styles.postLike}>
        <AntDesign
          style={styles.iconHeart}
          name="heart"
          size={18}
          color="black"
        />
        <MyBoldText>{countLike} Likes</MyBoldText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
  },
  postHead: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 90,
    marginEnd: 8,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postAction: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginEnd: 20,
  },
  postLike: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  iconHeart: {
    marginEnd: 10,
  },
});

export default Post;
