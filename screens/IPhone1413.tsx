import * as React from "react";
import { Pressable, View, Dimensions, StyleSheet, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1413 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone1411")}
      >
        <View style={[styles.frameChild, styles.view1Bg]} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={styles.text}>Сумма</Text>
        <Text style={styles.text1}>500 ₽</Text>
        <Text style={styles.text2}>Кофейня Залупкина</Text>
      </Pressable>
      <FormContainer priceText="700 ₽" carWashPriceText="Мойка Пупкина" />
      <FormContainer
        priceText="700 ₽"
        carWashPriceText="Мойка Пупкина"
        propTop={248}
        propLeft={21}
      />
      <FormContainer
        priceText="1700 ₽"
        carWashPriceText="Пятерочка"
        propTop={395}
        propLeft={20}
      />
      <Text style={[styles.text3, styles.textTypo]}>16 мая 2023</Text>
      <Text style={[styles.text4, styles.textTypo]}>14 мая 2023</Text>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.view1, styles.viewLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>История</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1Bg: {
    backgroundColor: Color.white,
    left: 0,
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  viewLayout: {
    height: 85,
    width: 390,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    height: 75,
    width: 347,
    position: "absolute",
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
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    left: 16,
    top: 44,
    position: "absolute",
  },
  text1: {
    left: 74,
    width: 45,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    top: 44,
    position: "absolute",
  },
  text2: {
    top: 12,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 157,
    height: 75,
    width: 347,
    left: 21,
    position: "absolute",
  },
  text3: {
    top: 117,
    left: 21,
    fontSize: FontSize.size_xl,
  },
  text4: {
    top: 355,
    left: 21,
    fontSize: FontSize.size_xl,
  },
  view1: {
    backgroundColor: Color.white,
    left: 0,
  },
  text5: {
    top: 52,
    left: 153,
  },
  view: {
    marginLeft: -195,
    left: "50%",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
  },
});

export default IPhone1413;
