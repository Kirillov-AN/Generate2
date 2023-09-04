import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone144 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone146")}
      >
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
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
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>Категория</Text>
      </View>
      <ExpenseFormContainer
        expenseTitle="Добавление организации"
        propLeft={67}
        onArrowBackIos1Press={() => navigation.navigate("IPhone146")}
      />
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.text2, styles.textTypo]}>Введите название...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  frameChildLayout: {
    height: 35,
    width: 350,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
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
    top: 260,
    left: 19,
    width: 354,
    height: 39,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 35,
    width: 350,
  },
  arrowForwardIos1Icon: {
    left: 322,
    width: 18,
    height: 18,
    top: 9,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    left: 18,
    top: 9,
  },
  rectangleParent: {
    top: 199,
    left: 21,
    position: "absolute",
  },
  frameItem: {
    top: 35,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text2: {
    top: 14,
    left: 5,
  },
  lineParent: {
    top: 133,
    left: 25,
    width: 340,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone144;
