import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const FavoriteContainer1 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Избранное</Text>
      <View style={[styles.directionsSubway2, styles.iconPosition]} />
      <Image
        style={[styles.addBox1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/add-box-1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>Автомойка</Text>
        <Image
          style={[styles.pen1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pen-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>Роснефть</Text>
        <Image
          style={[styles.pen1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pen-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameChildLayout: {
    height: 54,
    width: 350,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  text: {
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 0,
    position: "absolute",
  },
  directionsSubway2: {
    top: 225,
    left: 54,
    width: 24,
    height: 24,
  },
  addBox1Icon: {
    left: 320,
    width: 32,
    height: 32,
    top: 0,
  },
  frameChild: {
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
  },
  text1: {
    top: 19,
    left: 20,
  },
  pen1Icon: {
    top: 20,
    left: 317,
    width: 16,
    height: 16,
  },
  rectangleParent: {
    top: 117,
    height: 58,
    width: 350,
    left: 2,
    position: "absolute",
  },
  text2: {
    top: 17,
    left: 18,
  },
  rectangleGroup: {
    top: 188,
    left: 2,
    height: 54,
  },
  view: {
    top: 303,
    width: 352,
    height: 335,
    left: 18,
    position: "absolute",
  },
});

export default FavoriteContainer1;
