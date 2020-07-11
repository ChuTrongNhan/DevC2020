import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import UserInfo from "../components/homeScreen/UserInfo";
import Stat from "../components/homeScreen/Stat";
import Gallery from "../components/homeScreen/Gallery";

const Home = (props) => {
  return (
    <View style={styles.homeScreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserInfo />
        <Stat />
        <Gallery goTo={(screen) => props.goTo(screen)} />
      </ScrollView>
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
