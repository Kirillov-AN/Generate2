import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type HistoryIconType = {
  style?: StyleProp<ViewStyle>;
};

const HistoryIcon = ({ style }: HistoryIconType) => {
  return (
    <Image
      style={[styles.historyIcon, style]}
      contentFit="cover"
      source={require("../assets/history.png")}
    />
  );
};

const styles = StyleSheet.create({
  historyIcon: {
    width: 32,
    height: 32,
  },
});

export default HistoryIcon;
