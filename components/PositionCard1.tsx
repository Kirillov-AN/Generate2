import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PositionCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Позиции</Text>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("IPhone142")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>Название</Text>
        <Text style={[styles.text2, styles.textTypo1]}>Количество</Text>
        <Text style={[styles.text3, styles.textTypo]}>Сумма</Text>
        <Text style={[styles.text4, styles.textTypo2]}>Замена масла</Text>
        <Text style={[styles.text5, styles.textTypo]}>5000 ₽</Text>
        <Text style={[styles.text6, styles.textTypo1]}>1</Text>
      </Pressable>
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
  arrowForwardIos1Icon: {
    left: 323,
    width: 18,
    height: 18,
    overflow: "hidden",
    top: 10,
    position: "absolute",
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
    top: 210,
    left: 18,
    width: 354,
    height: 139,
    position: "absolute",
  },
});

export default PositionCard1;
