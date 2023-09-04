import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1412 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.hide1Parent, styles.frameParentLayout]}>
        <Image
          style={styles.hide1Icon}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Пароль</Text>
      </View>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone141")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text1, styles.textTypo1]}>Продолжить</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={[styles.parent, styles.frameParentLayout]}>
        <Text style={[styles.text2, styles.textTypo]}>
          Подтверждение пароля
        </Text>
        <Image
          style={styles.hide1Icon}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
      </View>
      <View style={[styles.view, styles.viewPosition]}>
        <Text style={[styles.text3, styles.text3Position]}>Регистрация</Text>
        <Image
          style={[styles.arrowBackIos1Icon, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
      </View>
      <View style={[styles.frame, styles.frameParentLayout]}>
        <View style={[styles.frameChild, styles.viewPosition]} />
        <Text style={[styles.email, styles.textTypo]}>Email</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 38,
    width: 348,
  },
  textTypo: {
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  viewPosition: {
    top: 0,
    position: "absolute",
  },
  text3Position: {
    top: 52,
    position: "absolute",
  },
  hide1Icon: {
    left: 317,
    width: 16,
    height: 16,
    top: 11,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    width: 69,
    left: 15,
    top: 10,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
  },
  hide1Parent: {
    top: 195,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_8xs,
    height: 38,
    left: 21,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    height: 40,
    width: 348,
    position: "absolute",
  },
  text1: {
    left: 133,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    top: 11,
    position: "absolute",
  },
  vectorIcon: {
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
    top: 307,
    width: 354,
    height: 39,
    left: 15,
    position: "absolute",
  },
  text2: {
    top: 9,
    width: 188,
    left: 15,
  },
  parent: {
    top: 251,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_8xs,
    height: 38,
    left: 21,
    position: "absolute",
  },
  text3: {
    left: 132,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowBackIos1Icon: {
    left: 19,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  view: {
    marginLeft: -195,
    left: "50%",
    backgroundColor: Color.white,
    width: 390,
    height: 85,
  },
  frameChild: {
    left: 0,
    height: 38,
    width: 348,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_8xs,
  },
  email: {
    left: 16,
    width: 35,
    top: 10,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
  },
  frame: {
    top: 139,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1412;
