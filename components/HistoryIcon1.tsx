import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type HistoryIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const HistoryIcon1 = ({ style }: HistoryIcon1Type) => {
  return (
    <Image
      style={[styles.historyIcon, style]}
      contentFit="cover"
      source={require("../assets/history1.png")}
    />
  );
};

const styles = StyleSheet.create({
  historyIcon: {
    width: 32,
    height: 32,
  },
});

export default HistoryIcon1;
