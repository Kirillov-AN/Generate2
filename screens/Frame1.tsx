import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Text style={styles.text}>Подтвердите удаление избранной категории</Text>
      <View style={[styles.frameItem, styles.frameLayout]} />
      <View style={[styles.frameInner, styles.frameLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>Назад</Text>
      <Text style={[styles.text2, styles.textTypo]}>Удалить</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 32,
    width: 160,
    top: 98,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    top: 104,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild: {
    top: 14,
    left: 12,
    backgroundColor: Color.white,
    width: 366,
    height: 134,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    top: 46,
    left: 25,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameItem: {
    left: 33,
    backgroundColor: Color.tomato,
  },
  frameInner: {
    left: 197,
    backgroundColor: Color.gainsboro,
  },
  text1: {
    left: 253,
  },
  text2: {
    left: 82,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 161,
  },
});

export default Frame1;
