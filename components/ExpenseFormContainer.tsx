import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type ExpenseFormContainerType = {
  expenseTitle?: string;

  /** Style props */
  propLeft?: number | string;

  /** Action props */
  onArrowBackIos1Press?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ExpenseFormContainer = ({
  expenseTitle,
  propLeft,
  onArrowBackIos1Press,
}: ExpenseFormContainerType) => {
  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.view, styles.viewLayout]}>
      <View style={[styles.view1, styles.viewLayout]} />
      <Text style={[styles.text, textStyle]}>{expenseTitle}</Text>
      <Pressable style={styles.arrowBackIos1} onPress={onArrowBackIos1Press}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 85,
    width: 390,
    top: 0,
    position: "absolute",
  },
  view1: {
    left: 0,
    backgroundColor: Color.white,
  },
  text: {
    top: 50,
    left: 124,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowBackIos1: {
    left: 19,
    top: 52,
    width: 24,
    height: 24,
    position: "absolute",
  },
  view: {
    marginLeft: -195,
    left: "50%",
  },
});

export default ExpenseFormContainer;
