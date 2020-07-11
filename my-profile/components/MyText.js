import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "sultan-nahia": require("../assets/fonts/SultanNahia.ttf"),
    "avo-reg": require("../assets/fonts/SVN-Avo.ttf"),
    "avo-bold": require("../assets/fonts/SVN-AvoBold.ttf"),
  });
};

const MyBlackText = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: "sultan-nahia",
        color: props.color ? props.color : "black",
        fontSize: props.size ? props.size : 14,
      }}
    >
      {props.children}
    </Text>
  );
};

const MyText = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Text
      style={{
        ...props.style,
        color: props.color ? props.color : "black",
        fontSize: props.size ? props.size : 14,
      }}
    >
      {props.children}
    </Text>
  );
};

const MyBoldText = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: "avo-bold",
        color: props.color ? props.color : "black",
        fontSize: props.size ? props.size : 14,
      }}
    >
      {props.children}
    </Text>
  );
};

export { MyText, MyBoldText, MyBlackText };
