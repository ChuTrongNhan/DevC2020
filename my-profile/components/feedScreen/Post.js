import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MyBoldText } from "../MyText";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Post = (props) => {
  const [countLike, setCountLike] = useState(100);

  const likeHandle = () => {
    setCountLike((i) => i + 1);
  };

  return (
    <View style={styles.post}>
      <TouchableOpacity style={styles.postHead} onPress={props.goToProfile}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/16.jpg")}
        />
        <MyBoldText>Skye Miles</MyBoldText>
      </TouchableOpacity>
      <View>
        <Image style={styles.postImage} source={props.imgSource} />
      </View>
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
          size={24}
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
    width: 50,
    height: 50,
    borderRadius: 90,
    marginEnd: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postAction: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginEnd: 20,
  },
  postLike: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  iconHeart: {
    marginEnd: 10,
  },
});

export default Post;
