import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const DashboardCardForm1 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.view1, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={styles.text}>Расходы</Text>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={styles.text1}>5 423</Text>
          <Text style={[styles.text2, styles.textTypo]}>₽</Text>
        </View>
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={[styles.arrowForwardIos1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={styles.text}>Доходы</Text>
        <View style={[styles.wrapper, styles.parentPosition]}>
          <Text style={styles.text1}>260 000</Text>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>₽</Text>
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Image
          style={[styles.arrowForwardIos1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <Image
        style={[styles.businessColorMoney12SvgrepIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/businesscolormoney12svgrepocom-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 87,
    left: 0,
    width: 336,
    position: "absolute",
  },
  parentPosition: {
    height: 39,
    left: 18,
    top: 34,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  child: {
    borderRadius: Border.br_3xs,
    top: 0,
    height: 87,
    left: 0,
  },
  text: {
    left: 30,
    fontSize: FontSize.size_xs,
    color: Color.salmon,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    top: 9,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_13xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    top: 8,
    left: 85,
  },
  parent: {
    width: 90,
  },
  frameIcon: {
    height: 16,
    width: 16,
    left: 10,
    overflow: "hidden",
    top: 9,
  },
  arrowForwardIos1Icon: {
    top: 10,
    left: 309,
    width: 18,
    height: 18,
  },
  view1: {
    top: 0,
    height: 87,
    left: 0,
  },
  wrapper: {
    width: 116,
  },
  text5: {
    top: 42,
    left: 138,
  },
  view2: {
    top: 108,
  },
  businessColorMoney12SvgrepIcon: {
    top: 117,
    height: 16,
    width: 16,
    left: 10,
    overflow: "hidden",
  },
  view: {
    top: 113,
    left: 22,
    height: 202,
    width: 336,
    position: "absolute",
  },
});

export default DashboardCardForm1;
