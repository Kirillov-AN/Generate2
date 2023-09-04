import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const IPhone149 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.frame}>
        <View style={styles.view}>
          <Pressable
            style={styles.arrowBackIos1}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "IPhone1414" })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/arrow-back-ios-1.png")}
            />
          </Pressable>
          <Text style={styles.text}>Добавление в избранное</Text>
        </View>
        <View style={styles.signInButton}>
          <Image
            style={styles.starPurple5001Icon}
            contentFit="cover"
            source={require("../assets/star-purple500-1.png")}
          />
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <Image
                style={styles.buttonIcon}
                contentFit="cover"
                source={require("../assets/button.png")}
              />
              <Text style={styles.text1}>Добавить в избранное</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <View style={styles.lineParent}>
            <View style={styles.frameChild} />
            <Text style={styles.text2}>Введите название...</Text>
          </View>
          <Pressable
            style={styles.parent}
            onPress={() => navigation.navigate("IPhone146")}
          >
            <Text style={styles.text3}>Организация</Text>
            <Image
              style={styles.arrowForwardIos1Icon}
              contentFit="cover"
              source={require("../assets/arrow-forward-ios-11.png")}
            />
          </Pressable>
          <View style={styles.group}>
            <Text style={styles.text4}>Позиции</Text>
            <Image
              style={styles.signInButton1}
              contentFit="cover"
              source={require("../assets/sign-in-button.png")}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text5}>{`5000 ₽ `}</Text>
          <Text style={styles.text6}>Сумма</Text>
          <View style={styles.frameItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowBackIos1: {
    position: "relative",
    width: 24,
    height: 24,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "left",
    marginLeft: 27,
  },
  view: {
    backgroundColor: Color.white,
    width: 390,
    height: 85,
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 50,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  starPurple5001Icon: {
    position: "absolute",
    top: 11,
    left: 315,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  buttonIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
  },
  text1: {
    position: "absolute",
    top: 11,
    left: 94,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 159,
  },
  frame2: {
    position: "relative",
    width: 348,
    height: 40,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "relative",
    width: 16,
    height: 16,
    marginLeft: -39,
  },
  frame1: {
    position: "absolute",
    top: -1,
    left: 6,
    width: 348,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signInButton: {
    position: "relative",
    width: 354,
    height: 39,
    marginTop: 387,
  },
  frame: {
    width: 390,
    height: 511,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameChild: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text2: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helveticaNeue,
    color: Color.gray_100,
    textAlign: "left",
    marginLeft: -335,
  },
  lineParent: {
    width: 340,
    height: 40,
    flexDirection: "row",
    paddingTop: Padding.p_4xs,
    paddingBottom: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  text3: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helveticaNeue,
    color: Color.gray_100,
    textAlign: "left",
  },
  arrowForwardIos1Icon: {
    position: "relative",
    width: 18,
    height: 18,
    overflow: "hidden",
    marginLeft: 217,
  },
  parent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 350,
    height: 35,
    flexDirection: "row",
    paddingLeft: 18,
    paddingTop: Padding.p_4xs,
    paddingRight: 10,
    paddingBottom: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 31,
  },
  text4: {
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "left",
    height: 29,
    marginLeft: 8,
  },
  signInButton1: {
    position: "relative",
    width: 354,
    height: 35,
    marginTop: 22,
  },
  group: {
    width: 354,
    height: 90,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 31,
  },
  frame4: {
    width: 354,
    height: 227,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text5: {
    position: "absolute",
    top: 23,
    left: 2,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    top: -2,
    left: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.gray_100,
    textAlign: "left",
  },
  frameItem: {
    position: "absolute",
    top: 55,
    left: 0,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  container: {
    position: "relative",
    width: 340,
    height: 60,
    marginTop: 45,
  },
  frame3: {
    width: 354,
    height: 332,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -402,
  },
  iphone14: {
    position: "relative",
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default IPhone149;
