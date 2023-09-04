import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone142 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo3]}>Стоимость</Text>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
        <Text style={[styles.text1, styles.textTypo2]}>{`5000 ₽ `}</Text>
      </View>
      <Pressable
        style={[styles.signInButtonWrapper, styles.signLayout]}
        onPress={() => navigation.navigate("IPhone145")}
      >
        <View style={[styles.signInButton, styles.text4Position]}>
          <Image
            style={[styles.buttonIcon, styles.buttonIconLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>Сохранить</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.signInButtonContainer, styles.signLayout]}
        onPress={() => navigation.navigate("IPhone149")}
      >
        <View style={[styles.signInButton, styles.text4Position]}>
          <Image
            style={[styles.buttonIcon, styles.buttonIconLayout]}
            contentFit="cover"
            source={require("../assets/button1.png")}
          />
          <Text style={[styles.text3, styles.textTypo1]}>Удалить</Text>
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
        </View>
      </Pressable>
      <View style={styles.group}>
        <Text style={[styles.text4, styles.text4Position]}>Количество</Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-14.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-15.png")}
        />
        <View style={[styles.lineView, styles.frameChildBorder]} />
        <Text style={[styles.text5, styles.textTypo2]}>1</Text>
      </View>
      <Text style={[styles.text6, styles.textTypo]}>Сумма</Text>
      <Text style={[styles.text7, styles.textTypo]}>5000 ₽</Text>
      <View style={styles.delete1} />
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.view1, styles.viewLayout]} />
        <Text style={[styles.text8, styles.textTypo2]}>Изменение позиции</Text>
        <Image
          style={[styles.arrowBackIos1Icon, styles.arrowIconPosition]}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
        <Image
          style={styles.arrowIconPosition}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
      </View>
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={[styles.frameChild1, styles.frameChildBorder]} />
        <Text style={[styles.text9, styles.textTypo2]}>Замена масла</Text>
      </View>
      <Text style={[styles.text10, styles.textTypo3]}>Название</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo3: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo2: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  signLayout: {
    height: 39,
    width: 354,
  },
  text4Position: {
    top: 0,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo1: {
    color: Color.whitesmoke_100,
    fontWeight: "700",
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 35,
    width: 35,
    top: 32,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    top: 403,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    position: "absolute",
  },
  viewLayout: {
    height: 85,
    width: 390,
    top: 0,
    position: "absolute",
  },
  arrowIconPosition: {
    left: 19,
    top: 52,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: -2,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 55,
    width: 341,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    left: 0,
  },
  text1: {
    top: 23,
    left: 2,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  parent: {
    top: 200,
    left: 30,
    height: 60,
    width: 340,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
  },
  text2: {
    left: 143,
  },
  groupIcon: {
    height: "41.03%",
    width: "4.52%",
    top: "28.21%",
    right: "6.5%",
    bottom: "30.77%",
    left: "88.98%",
  },
  signInButton: {
    height: 39,
    width: 354,
    left: 0,
  },
  signInButtonWrapper: {
    top: 470,
    left: 16,
    width: 354,
    position: "absolute",
  },
  text3: {
    left: 148,
  },
  groupIcon1: {
    height: "46.15%",
    width: "3.95%",
    top: "25.64%",
    right: "5.93%",
    bottom: "28.21%",
    left: "90.11%",
  },
  signInButtonContainer: {
    top: 531,
    left: 16,
    width: 354,
    position: "absolute",
  },
  text4: {
    left: 55,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  frameItem: {
    left: 135,
  },
  frameInner: {
    left: 24,
  },
  lineView: {
    top: 64,
    left: 79,
    width: 37,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
  },
  text5: {
    top: 34,
    left: 90,
  },
  group: {
    top: 287,
    left: 101,
    width: 197,
    height: 82,
    position: "absolute",
  },
  text6: {
    left: 31,
  },
  text7: {
    left: 127,
  },
  delete1: {
    top: 608,
    left: 158,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  view1: {
    backgroundColor: Color.white,
    left: 0,
  },
  text8: {
    top: 50,
    left: 95,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  arrowBackIos1Icon: {
    display: "none",
  },
  view: {
    marginLeft: -195,
    left: "50%",
  },
  frameChild1: {
    top: 35,
    width: 341,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    left: 0,
  },
  text9: {
    top: 8,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
    left: 0,
  },
  lineParent: {
    top: 133,
    left: 25,
    width: 340,
  },
  text10: {
    top: 122,
    left: 26,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone142;
