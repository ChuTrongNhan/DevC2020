import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SCREENS } from "./constants";

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Detail from "./screens/Detail";

export default function App() {
  const [content, setContent] = useState({
    cur: SCREENS.home,
    prev: SCREENS.feed,
  });

  const goTo = (screen) => {
    if (screen === content.cur) return;
    setContent(
      (currentContent) =>
        (currentContent = { cur: screen, prev: currentContent.cur })
    );
  };

  const goBack = () => {
    setContent(
      (currentContent) =>
        (currentContent = {
          cur: currentContent.prev,
          prev: currentContent.cur,
        })
    );
  };

  let view = <View />;
  switch (content.cur) {
    case SCREENS.home:
      view = <Home goTo={goTo} />;
      break;
    case SCREENS.feed:
      view = <Feed goTo={goTo} />;
      break;
    default:
      view = <Detail imgSource={content.cur} />;
  }

  return (
    <View style={styles.container}>
      <Header goBack={goBack} />
      {view}
      <Footer goTo={goTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
