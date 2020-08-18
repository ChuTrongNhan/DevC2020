import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import MyText from "../components/Text";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ArticleCard = ({ article }) => {
  const blankImage =
    "https://www.simscale.com/forum/uploads/default/original/3X/5/9/59c3686cc01056f418145aeede2685600647cf8c.jpg";
  const onClickLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  return (
    <View style={styles.articleCard}>
      <View style={styles.image}>
        <Image
          style={styles.heroImage}
          source={{
            uri: article.urlToImage ? article.urlToImage : blankImage,
          }}
        />
        <View style={styles.date}>
          <MyText color="white">
            {moment(article.publishedAt).format("LLL")}
          </MyText>
        </View>
      </View>
      <View style={styles.info}>
        <MyText weight="bold" size={18}>
          {article.title}
        </MyText>
        <MyText size={14} color="gray" style={{ marginVertical: 10 }}>
          {article.content}
        </MyText>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onClickLink(article.url)}
      >
        <MyText weight="bold" color="white">
          Read More
        </MyText>
        <MaterialCommunityIcons name="web" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  articleCard: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 50,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: "column",
  },
  date: {
    position: "absolute",
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    bottom: 10,
    right: 10,
  },
  heroImage: {
    flex: 1,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
    width: 150,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default ArticleCard;
