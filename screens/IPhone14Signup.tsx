import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SmartBudgetLoginFormContainer from "../components/SmartBudgetLoginFormContainer";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhone14Signup = () => {
  return (
    <View style={styles.iphone14Signup}>
      <View style={styles.continueWithGoogleButton}>
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/button2.png")}
        />
        <Text style={[styles.google, styles.text1Typo]}>
          Продолжить с Google
        </Text>
        <Image
          style={[styles.googleIcon, styles.delimiterLayout1]}
          contentFit="cover"
          source={require("../assets/googleicon.png")}
        />
      </View>
      <View style={styles.signInButton}>
        <Image
          style={[styles.buttonIcon1, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={styles.text}>Зарегистрироваться</Text>
      </View>
      <View style={[styles.delimiter, styles.delimiterLayout1]}>
        <Text style={[styles.text1, styles.text1Typo]}>или</Text>
        <View style={[styles.delimiterChild, styles.delimiterLayout]} />
        <View style={[styles.delimiterItem, styles.delimiterLayout]} />
      </View>
      <SmartBudgetLoginFormContainer />
      <Text style={[styles.text2, styles.text2Typo]}>
        Ведите свой бюджет с умом
      </Text>
      <Text style={[styles.rhodea, styles.text2Typo]}>Rhodea</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIconLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  delimiterLayout1: {
    height: 17,
    position: "absolute",
  },
  delimiterLayout: {
    height: 1,
    width: 149,
    borderTopWidth: 1,
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderStyle: "solid",
    top: 11,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.chivoMonoRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  buttonIcon: {
    top: 12,
    left: 11,
    width: 349,
    height: 30,
  },
  google: {
    left: 104,
    fontWeight: "500",
    fontFamily: FontFamily.chivoMonoMedium,
    width: 192,
    height: 34,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 18,
  },
  googleIcon: {
    left: 32,
    width: 17,
    top: 18,
    height: 17,
    overflow: "hidden",
  },
  continueWithGoogleButton: {
    top: 508,
    left: 10,
    width: 362,
    height: 52,
    position: "absolute",
  },
  buttonIcon1: {
    top: -1,
    left: 6,
    width: 348,
    height: 40,
  },
  text: {
    left: 107,
    fontWeight: "700",
    fontFamily: FontFamily.chivoMonoBold,
    color: Color.whitesmoke_100,
    top: 11,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  signInButton: {
    top: 568,
    left: 15,
    width: 354,
    height: 39,
    position: "absolute",
  },
  text1: {
    top: 0,
    left: 162,
    fontWeight: "300",
    fontFamily: FontFamily.chivoMonoLight,
    color: "#a79d9d",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  delimiterChild: {
    left: 0,
  },
  delimiterItem: {
    left: 200,
  },
  delimiter: {
    top: 483,
    left: 20,
    width: 353,
  },
  text2: {
    top: 175,
    left: 50,
    fontSize: FontSize.size_xl,
  },
  rhodea: {
    top: 74,
    left: 133,
    fontSize: FontSize.size_13xl,
  },
  iphone14Signup: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone14Signup;
