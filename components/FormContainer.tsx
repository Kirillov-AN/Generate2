import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

type FormContainerType = {
  priceText?: string;
  carWashPriceText?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  priceText,
  carWashPriceText,
  propTop,
  propLeft,
}: FormContainerType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View
      style={[styles.rectangleParent, styles.frameChildLayout, frameViewStyle]}
    >
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Image
        style={styles.arrowForwardIos1Icon}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios-1.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>Сумма</Text>
      <Text style={[styles.text1, styles.textTypo]}>{priceText}</Text>
      <Text style={[styles.text2, styles.textTypo]}>{carWashPriceText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 75,
    width: 347,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    top: 44,
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  arrowForwardIos1Icon: {
    top: 10,
    left: 323,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    color: Color.gray_100,
    width: 49,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    left: 16,
    top: 44,
    position: "absolute",
  },
  text1: {
    left: 74,
    width: 45,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    top: 44,
    color: Color.black,
  },
  text2: {
    top: 12,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.black,
    left: 16,
  },
  rectangleParent: {
    top: 248,
    left: 21,
  },
});

export default FormContainer;
