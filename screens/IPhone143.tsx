import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpenseFormContainer from "../components/ExpenseFormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone143 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.signInButton}>
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text, styles.textTypo4]}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text1, styles.textFlexBox]}>{`Итог  400 ₽ `}</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Text style={[styles.text2, styles.textPosition1]}>
          ИП “Хуй моржовый”
        </Text>
      </View>
      <View style={[styles.parent, styles.textPosition1]}>
        <Text style={[styles.text3, styles.textPosition2]}>Позиции</Text>
        <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
          <View style={[styles.frameItem, styles.frameItemLayout]} />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Text style={[styles.text4, styles.textPosition]}>Название</Text>
          <Text style={[styles.text5, styles.textTypo1]}>Количество</Text>
          <Text style={[styles.text6, styles.textTypo]}>Сумма</Text>
          <Text style={[styles.text7, styles.textFlexBox]}>Мыло</Text>
          <Text style={[styles.text8, styles.textTypo]}>200 ₽</Text>
          <Text style={[styles.text9, styles.textTypo1]}>2</Text>
        </View>
      </View>
      <View style={styles.group}>
        <Text style={[styles.text10, styles.textPosition2]}>
          Выберите категорию организации
        </Text>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.framePosition]} />
          <Image
            style={[styles.arrowForwardIos1Icon1, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Text style={[styles.text11, styles.textPosition1]}>Категория</Text>
        </View>
      </View>
      <ExpenseFormContainer
        expenseTitle="Новый расход"
        onArrowBackIos1Press={() =>
          navigation.navigate("BottomTabsRoot", { screen: "IPhone1414" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo4: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 350,
    position: "absolute",
  },
  framePosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  textPosition1: {
    left: 18,
    position: "absolute",
  },
  textPosition2: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameItemLayout: {
    height: 94,
    width: 347,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: 11,
    color: Color.gray_100,
  },
  textTypo1: {
    top: 36,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    top: 62,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
    left: 6,
    position: "absolute",
  },
  text: {
    left: 143,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    top: 10,
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
    top: 472,
    left: 14,
    height: 39,
    width: 354,
    position: "absolute",
  },
  text1: {
    top: 5,
    width: 222,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  wrapper: {
    top: 402,
    left: 26,
    width: 340,
    height: 41,
    position: "absolute",
  },
  frameChild: {
    height: 35,
    width: 350,
    position: "absolute",
  },
  text2: {
    top: 9,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 109,
    left: 20,
    height: 35,
  },
  text3: {
    left: 8,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
  },
  frameItem: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  arrowForwardIos1Icon: {
    left: 323,
    top: 10,
  },
  text4: {
    width: 64,
    color: Color.gray_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 10,
  },
  text5: {
    width: 78,
    color: Color.gray_100,
    left: 11,
  },
  text6: {
    width: 49,
    color: Color.gray_100,
    left: 11,
  },
  text7: {
    left: 84,
    width: 106,
    color: Color.black,
    fontSize: FontSize.size_sm,
    top: 10,
  },
  text8: {
    left: 69,
    width: 45,
    color: Color.black,
  },
  text9: {
    left: 98,
    width: 8,
    color: Color.black,
  },
  rectangleGroup: {
    top: 45,
    left: 3,
  },
  parent: {
    top: 241,
    height: 139,
    width: 354,
  },
  text10: {
    color: "#f02f20",
    fontSize: FontSize.size_sm,
    left: 6,
  },
  arrowForwardIos1Icon1: {
    left: 322,
    top: 9,
  },
  text11: {
    color: Color.gray_100,
    top: 9,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleContainer: {
    top: 24,
    left: 0,
  },
  group: {
    top: 157,
    height: 59,
    width: 350,
    left: 20,
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

export default IPhone143;
