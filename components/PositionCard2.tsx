import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PositionCard2 = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Позиции</Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.text1, styles.textTypo2]}>Название</Text>
        <Text style={[styles.text2, styles.textTypo1]}>Количество</Text>
        <Text style={[styles.text3, styles.textTypo]}>Сумма</Text>
        <Text style={[styles.text4, styles.textTypo2]}>Кофе</Text>
        <Text style={[styles.text5, styles.textTypo]}>250 ₽</Text>
        <Text style={[styles.text6, styles.textTypo1]}>2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 94,
    width: 347,
    position: "absolute",
  },
  textTypo2: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo1: {
    top: 36,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo: {
    top: 62,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  text: {
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
    width: 347,
  },
  text1: {
    width: 64,
    color: Color.gray_100,
    left: 11,
  },
  text2: {
    width: 78,
    color: Color.gray_100,
    left: 11,
  },
  text3: {
    width: 49,
    color: Color.gray_100,
    left: 11,
  },
  text4: {
    left: 84,
    width: 106,
    color: Color.black,
  },
  text5: {
    left: 69,
    width: 45,
    color: Color.black,
  },
  text6: {
    left: 98,
    width: 8,
    color: Color.black,
  },
  rectangleParent: {
    top: 45,
    left: 3,
  },
  parent: {
    top: 168,
    left: 20,
    width: 354,
    height: 139,
    position: "absolute",
  },
});

export default PositionCard2;
