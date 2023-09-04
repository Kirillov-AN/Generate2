import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone148 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone147")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={styles.text}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text1, styles.textTypo1]}>Сумма</Text>
        <View style={styles.frameChild} />
        <Text style={[styles.text2, styles.textTypo]}>{`5000 ₽ `}</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.frameItemLayout]}
        onPress={() => navigation.navigate("IPhone146")}
      >
        <View style={[styles.frameItem, styles.text4Position]} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={[styles.text3, styles.text3Position]}>Организация</Text>
      </Pressable>
      <Pressable
        style={[styles.signInButtonParent, styles.text3Position]}
        onPress={() => navigation.navigate("IPhone147")}
      >
        <Image
          style={styles.signInButton1}
          contentFit="cover"
          source={require("../assets/sign-in-button.png")}
        />
        <Text style={[styles.text4, styles.text4Position]}>Позиции</Text>
      </Pressable>
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
  textTypo1: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  frameItemLayout: {
    width: 350,
    height: 35,
  },
  text4Position: {
    top: 0,
    position: "absolute",
  },
  text3Position: {
    left: 18,
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
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
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
    top: 422,
    left: 16,
    height: 39,
    width: 354,
    position: "absolute",
  },
  text1: {
    top: -2,
    fontWeight: "500",
    color: Color.gray_100,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 55,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 23,
    left: 2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  parent: {
    top: 345,
    left: 24,
    width: 340,
    height: 60,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 35,
    width: 350,
    left: 0,
  },
  arrowForwardIos1Icon: {
    left: 322,
    width: 18,
    height: 18,
    top: 9,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    top: 9,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 130,
    left: 20,
    height: 35,
    position: "absolute",
  },
  signInButton1: {
    top: 50,
    width: 356,
    height: 35,
    left: 0,
    position: "absolute",
  },
  text4: {
    left: 8,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  signInButtonParent: {
    top: 210,
    height: 90,
    width: 354,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 871,
    overflow: "hidden",
  },
});

export default IPhone148;
