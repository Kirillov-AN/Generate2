import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PositionCard1 from "../components/PositionCard1";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone145 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone143")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.wrapper}>
        <Text style={[styles.text1, styles.textTypo]}>{`Итог  5000 ₽ `}</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("IPhone146")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.arrowForwardIos1Icon, styles.text2Position]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={[styles.text2, styles.text2Position]}>Организация</Text>
      </Pressable>
      <PositionCard1 />
      <ExpenseFormContainer
        expenseTitle="Новый расход"
        propLeft={124}
        onArrowBackIos1Press={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1414" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  frameChildLayout: {
    height: 35,
    width: 350,
    position: "absolute",
  },
  text2Position: {
    top: 9,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 143,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  groupIcon: {
    height: "41.03%",
    width: "4.52%",
    top: "28.21%",
    right: "6.5%",
    bottom: "30.77%",
    left: "88.98%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signInButton: {
    top: 452,
    left: 14,
    width: 354,
    height: 39,
    position: "absolute",
  },
  text1: {
    top: 5,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    color: Color.black,
    display: "flex",
    alignItems: "center",
    width: 222,
    left: 0,
    position: "absolute",
  },
  wrapper: {
    top: 380,
    left: 26,
    width: 340,
    height: 41,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    left: 0,
  },
  arrowForwardIos1Icon: {
    left: 322,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text2: {
    left: 18,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 130,
    left: 20,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 881,
    overflow: "hidden",
  },
});

export default IPhone145;
