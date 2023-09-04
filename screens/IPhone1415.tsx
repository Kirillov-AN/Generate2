import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DashboardCardForm1 from "../components/DashboardCardForm1";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415 = () => {
  return (
    <View style={styles.iphone14}>
      <View style={styles.view}>
        <Text style={[styles.text, styles.textTypo2]}>Статистика</Text>
        <View style={[styles.child, styles.childLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>Траты</Text>
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text
          style={[styles.text2, styles.textTypo1]}
        >{`За последние 5 недель средняя сумма 
дневных расходов составила 2342 ₽`}</Text>
        <View style={styles.item} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.groupChildLayout3]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.groupChildLayout3]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.groupChildLayout3]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.inner, styles.childLayout]} />
        <Text style={[styles.text3, styles.textTypo]}>2342 ₽</Text>
        <Image
          style={[styles.arrowForwardIos1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <DashboardCardForm1 />
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.view2, styles.viewLayout]} />
        <Text style={[styles.text4, styles.textTypo2]}>Сводка</Text>
      </View>
      <View style={styles.view3} />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.salmon,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  rectangleLayout: {
    width: 73,
    top: 131,
    height: 50,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    top: 11,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 44,
    top: 6,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 47,
    top: 3,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 43,
    top: 7,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  viewLayout: {
    height: 85,
    width: 390,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  child: {
    top: 40,
    height: 161,
    backgroundColor: Color.white,
    left: 0,
    width: 336,
  },
  text1: {
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 30,
    top: 49,
  },
  frameIcon: {
    width: 16,
    height: 16,
    left: 10,
    top: 49,
  },
  text2: {
    top: 77,
    left: 13,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  item: {
    top: 119,
    left: 12,
    borderStyle: "solid",
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderTopWidth: 1,
    width: 298,
    height: 1,
    position: "absolute",
  },
  groupChild: {
    left: 5,
    height: 50,
    top: 0,
  },
  groupItem: {
    top: 4,
    height: 46,
    left: 0,
  },
  groupInner: {
    left: 10,
  },
  rectangleView: {
    left: 15,
  },
  groupChild1: {
    left: 20,
  },
  groupChild2: {
    top: 10,
    left: 25,
    height: 40,
  },
  groupChild3: {
    left: 30,
  },
  groupChild4: {
    left: 35,
  },
  groupChild5: {
    left: 40,
  },
  groupChild6: {
    top: 9,
    left: 45,
    height: 41,
  },
  groupChild7: {
    left: 50,
  },
  groupChild8: {
    left: 55,
  },
  groupChild9: {
    left: 60,
  },
  groupChild10: {
    left: 65,
  },
  groupChild11: {
    top: 1,
    left: 70,
    height: 49,
  },
  rectangleParent: {
    height: 50,
    left: 13,
  },
  rectangleGroup: {
    left: 88,
    height: 50,
  },
  rectangleContainer: {
    left: 163,
    height: 50,
  },
  inner: {
    top: 149,
    left: 11,
    backgroundColor: Color.salmon,
    width: 227,
    height: 2,
  },
  text3: {
    top: 137,
    fontSize: FontSize.size_3xs,
    left: 13,
    fontWeight: "700",
  },
  arrowForwardIos1Icon: {
    top: 48,
    left: 309,
    width: 18,
    height: 18,
  },
  view: {
    top: 337,
    left: 27,
    height: 201,
    width: 336,
    position: "absolute",
  },
  view2: {
    marginLeft: -195,
    left: "50%",
    backgroundColor: Color.white,
  },
  text4: {
    top: 52,
    left: 158,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  view1: {
    left: 0,
  },
  view3: {
    top: 762,
    left: 1,
    paddingHorizontal: 29,
    paddingVertical: 11,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
  },
});

export default IPhone1415;
