import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SmartBudgetLoginFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.logIn, styles.logInLayout]}>
      <View style={[styles.passwordEnterField, styles.enterLayout]}>
        <View style={styles.passwordEnterFieldChild} />
        <Text style={[styles.password, styles.emailTypo]}>Пароль</Text>
        <Image
          style={styles.hide1Icon}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
      </View>
      <View style={[styles.emailEnterField, styles.enterLayout]}>
        <View style={styles.passwordEnterFieldChild} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <Pressable
        style={styles.signInButton}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1415" })
        }
      >
        <Image
          style={[styles.buttonIcon, styles.logInLayout]}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Войдите</Text>
        <Text style={[styles.text1, styles.textTypo]}>Забыли пароль?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInLayout: {
    width: 348,
    position: "absolute",
  },
  enterLayout: {
    height: 51,
    width: 372,
    left: 0,
    position: "absolute",
  },
  emailTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    fontFamily: FontFamily.chivoMonoRegular,
    left: 23,
    top: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  passwordEnterFieldChild: {
    top: 6,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_200,
    height: 38,
    left: 0,
    width: 348,
    position: "absolute",
  },
  password: {
    width: 77,
    height: 19,
  },
  hide1Icon: {
    top: 17,
    left: 318,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  passwordEnterField: {
    top: 45,
  },
  email: {
    width: 54,
    height: 18,
  },
  emailEnterField: {
    top: -6,
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    height: 40,
  },
  text: {
    top: 10,
    left: 145,
    fontWeight: "700",
    fontFamily: FontFamily.chivoMonoBold,
    color: Color.whitesmoke_100,
  },
  text1: {
    top: 64,
    left: 120,
    fontWeight: "500",
    fontFamily: FontFamily.chivoMonoMedium,
    color: Color.black,
  },
  signInButton: {
    top: 111,
    left: -6,
    width: 354,
    height: 39,
    position: "absolute",
  },
  logIn: {
    top: 261,
    left: 21,
    height: 96,
  },
});

export default SmartBudgetLoginFormContainer;
