import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const ZyroImage1 = () => {
  return (
    <ImageBackground
      style={styles.zyroImage1Icon}
      resizeMode="cover"
      source={require("../assets/zyroimage1.png")}
    />
  );
};

const styles = StyleSheet.create({
  zyroImage1Icon: {
    flex: 1,
    width: "100%",
    height: 718,
  },
});

export default ZyroImage1;
