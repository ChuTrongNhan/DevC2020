import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import Feed from "./screens/Feed";

export default function App() {
  const [content, setContent] = useState(0);

  const goToFeed = () => {
    setContent(1);
  };

  const goToProfile = () => {
    setContent(0);
  };

  let view;
  switch (content) {
    case 0:
      view = <Home goToFeed={goToFeed} />;
      break;
    case 1:
      view = <Feed goToProfile={goToProfile} />;
  }

  return <View style={styles.container}>{view}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
