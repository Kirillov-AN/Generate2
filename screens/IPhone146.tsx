import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IPhone146 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.text1Typo]}>Terroir cafe</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-cafe-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.text1Typo]}>BP</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-gas-station-1.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.text1Typo]}>Автомойка</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-car-wash-1.png")}
        />
      </View>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone144")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sign-in-button.png")}
        />
      </Pressable>
      <ExpenseFormContainer
        expenseTitle="Выбор организации"
        propLeft={95}
        onArrowBackIos1Press={() => navigation.navigate("IPhone145")}
      />
      <View style={[styles.lineParent, styles.parentPosition]}>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Text style={[styles.text1, styles.text1Typo]}>
          Поиск по названию...
        </Text>
        <Image
          style={[styles.zoom1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/zoom-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    width: 350,
    height: 35,
  },
  lineViewPosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    left: 25,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 35,
    width: 350,
  },
  terroirCafe: {
    color: Color.black,
    left: 18,
    top: 9,
  },
  localCafe1Icon: {
    left: 323,
    top: 9,
  },
  rectangleParent: {
    top: 189,
    height: 35,
    left: 25,
    position: "absolute",
  },
  rectangleGroup: {
    top: 234,
    height: 35,
    left: 25,
    position: "absolute",
  },
  rectangleContainer: {
    top: 279,
    height: 35,
    left: 25,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  signInButton: {
    top: 341,
    width: 356,
    left: 18,
    height: 35,
    position: "absolute",
  },
  lineView: {
    top: 55,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text1: {
    top: 34,
    left: 5,
    color: Color.gray_100,
  },
  zoom1Icon: {
    top: 35,
    left: 314,
  },
  lineParent: {
    top: 113,
    width: 340,
    height: 60,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone146;
