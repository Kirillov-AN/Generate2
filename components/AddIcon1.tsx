import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type AddIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const AddIcon1 = ({ style }: AddIcon1Type) => {
  return (
    <Image
      style={[styles.addIcon, style]}
      contentFit="cover"
      source={require("../assets/add1.png")}
    />
  );
};

const styles = StyleSheet.create({
  addIcon: {
    width: 42,
    height: 42,
  },
});

export default AddIcon1;
