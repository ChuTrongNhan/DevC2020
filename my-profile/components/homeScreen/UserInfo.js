import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MyText, MyBoldText, MyBlackText } from "../MyText";
import { MaterialIcons } from "@expo/vector-icons";

const UserInfo = (props) => {
  const userName = "Skye Gardner";
  const userJob = "Photographer";

  const followOnPress = () => {
    Alert.alert(
      "Follow",
      "You are now following this account",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  const sendOnPress = () => {
    Alert.alert(
      "Send",
      "You are sending message to this account",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.userInfo}>
      <Image
        style={styles.infoAvatar}
        source={require("../../assets/images/16.jpg")}
      />
      <View style={styles.infos}>
        <View>
          <MyBlackText style={styles.userName}>{userName}</MyBlackText>
          <MyBoldText style={styles.userJob}>{userJob}</MyBoldText>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.followButton} onPress={followOnPress}>
            <MyText style={{ color: "white" }}>Follow</MyText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} onPress={sendOnPress}>
            <MyText>
              <MaterialIcons name="send" size={18} color="white" />
            </MyText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const FOLLOW_COLOR = "#4ca3d1";
const SEND_MESSAGE_COLOR = "#94d7ff";

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: "row",
  },
  infoAvatar: {
    width: 110,
    height: 110,
    borderRadius: 90,
    marginEnd: 20,
  },
  infos: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  userName: {
    fontSize: 36,
    marginBottom: -5,
    lineHeight: 36,
  },
  userJob: {
    color: "lightgray",
    fontSize: 15,
  },
  buttons: {
    flexDirection: "row",
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserInfo;
