import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type AddIconType = {
  style?: StyleProp<ViewStyle>;
};

const AddIcon = ({ style }: AddIconType) => {
  return (
    <Image
      style={[styles.addIcon, style]}
      contentFit="cover"
      source={require("../assets/add.png")}
    />
  );
};

const styles = StyleSheet.create({
  addIcon: {
    width: 42,
    height: 42,
  },
});

export default AddIcon;
