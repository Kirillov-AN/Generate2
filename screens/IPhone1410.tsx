import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IPhone1410 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={styles.signInButton}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1414" })
        }
      >
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
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
      <ExpenseFormContainer
        expenseTitle="Добавление в избранное"
        propLeft={70}
        onArrowBackIos1Press={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1414" })
        }
      />
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.text1, styles.textTypo]}>Введите название...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo: {
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
    top: 201,
    left: 18,
    width: 354,
    height: 39,
    position: "absolute",
  },
  frameChild: {
    top: 35,
    left: 0,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
    position: "absolute",
  },
  text1: {
    top: 14,
    left: 5,
    color: Color.gray_100,
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

export default IPhone1410;
