import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Home31IconType = {
  style?: StyleProp<ViewStyle>;
};

const Home31Icon = ({ style }: Home31IconType) => {
  return (
    <Image
      style={[styles.home31Icon, style]}
      contentFit="cover"
      source={require("../assets/home3-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  home31Icon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default Home31Icon;
