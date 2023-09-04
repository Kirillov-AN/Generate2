import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Statistics1IconType = {
  style?: StyleProp<ViewStyle>;
};

const Statistics1Icon = ({ style }: Statistics1IconType) => {
  return (
    <Image
      style={[styles.statistics1Icon, style]}
      contentFit="cover"
      source={require("../assets/statistics-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  statistics1Icon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default Statistics1Icon;
