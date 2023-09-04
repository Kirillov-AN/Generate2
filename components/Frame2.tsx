import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame2 = () => {
  return <View style={styles.frame} />;
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
});

export default Frame2;
