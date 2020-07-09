import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/homeScreen/Header";
import UserInfo from "../components/homeScreen/UserInfo";
import Stat from "../components/homeScreen/Stat";
import Gallery from "../components/homeScreen/Gallery";
import Footer from "../components/homeScreen/Footer";

const Home = (props) => {
  return (
    <View style={styles.homeScreen}>
      <Header goToFeed={props.goToFeed} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserInfo />
        <Stat />
        <Gallery />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default Home;
