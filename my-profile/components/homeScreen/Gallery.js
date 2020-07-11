import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Gallery = (props) => {
  const images = [
    { id: 1, imgSource: require("../../assets/images/1.jpg") },
    { id: 2, imgSource: require("../../assets/images/2.jpg") },
    { id: 3, imgSource: require("../../assets/images/3.jpg") },
    { id: 4, imgSource: require("../../assets/images/4.jpg") },
    { id: 5, imgSource: require("../../assets/images/5.jpg") },
    { id: 6, imgSource: require("../../assets/images/6.jpg") },
    { id: 7, imgSource: require("../../assets/images/7.jpg") },
    { id: 8, imgSource: require("../../assets/images/8.jpg") },
    { id: 9, imgSource: require("../../assets/images/9.jpg") },
    { id: 10, imgSource: require("../../assets/images/10.jpg") },
  ];
  const centerImgData = Math.floor(images.length / 2);
  return (
    <View style={styles.gallery}>
      <View style={styles.galleryRow}>
        {images.slice(0, centerImgData).map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => props.goTo(item.imgSource)}
            >
              <Image
                source={item.imgSource}
                style={{
                  ...styles.image,
                  height: Math.random() * 100 + 100,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.galleryRow}>
        {images.slice(centerImgData).map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => props.goTo(item.imgSource)}
            >
              <Image
                source={item.imgSource}
                style={{
                  ...styles.image,
                  height: Math.random() * 100 + 100,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  galleryRow: {
    width: (Dimensions.get("window").width - 40) / 2 - 10,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
});

export default Gallery;
