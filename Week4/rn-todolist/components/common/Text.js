import React from "react";
import { Text } from "react-native";

const MyText = (props) => {
  return (
    <Text
      style={{
        ...props.style,
        fontFamily:
          props.weight === "bold"
            ? "gg-bold"
            : props.weight === "medium"
            ? "gg-medium"
            : "gg-reg",
        fontSize: props.size || 14,
        color: props.color || "black",
      }}
    >
      {props.children}
    </Text>
  );
};

export default MyText;
