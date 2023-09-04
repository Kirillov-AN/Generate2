import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PositionCard2 from "../components/PositionCard2";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone1411 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textFlexBox]}>{`Итог  500 ₽ `}</Text>
      </View>
      <View style={styles.signInButton}>
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>
          Добавить в избранное
        </Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.starPurple5001Icon}
          contentFit="cover"
          source={require("../assets/star-purple500-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>Кофейня Залупкина</Text>
      </View>
      <PositionCard2 />
      <ExpenseFormContainer
        expenseTitle="История"
        propLeft={153}
        onArrowBackIos1Press={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1413" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameChildLayout: {
    height: 35,
    width: 350,
    position: "absolute",
  },
  text: {
    top: 5,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    width: 222,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  wrapper: {
    top: 331,
    left: 25,
    width: 340,
    height: 41,
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
  text1: {
    top: 10,
    left: 100,
    fontWeight: "700",
    color: Color.white,
    width: 159,
    alignItems: "center",
    display: "flex",
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
  starPurple5001Icon: {
    top: 11,
    left: 315,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  signInButton: {
    top: 403,
    width: 354,
    height: 39,
    left: 18,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    left: 0,
    width: 350,
  },
  text2: {
    top: 9,
    left: 18,
    color: Color.black,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 109,
    left: 20,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone1411;
