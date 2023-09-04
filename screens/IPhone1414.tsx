import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import QRCodeScanForm from "../components/QRCodeScanForm";
import { useNavigation } from "@react-navigation/native";
import NewOperationFormContainer from "../components/NewOperationFormContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1414 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <QRCodeScanForm rectangleViewHeight={109} />
      <Pressable
        style={styles.manuallyAdd}
        onPress={() => navigation.navigate("IPhone148")}
      >
        <View style={[styles.manuallyAddChild, styles.childLayout]} />
        <Image
          style={styles.noteAdd1Icon}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={[styles.text, styles.textClr]}>{`Ввести данные
вручную`}</Text>
      </Pressable>
      <View style={styles.view}>
        <Text style={[styles.text1, styles.textTypo1]}>Избранное</Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("IPhone14")}
        >
          <Text style={[styles.text2, styles.textTypo1]}>изменить</Text>
        </Pressable>
        <View style={[styles.directionsSubway2, styles.localIconLayout]} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>Кофе у дома</Text>
          <Image
            style={[styles.localCafe1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-cafe-11.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>Автомойка</Text>
          <Image
            style={[styles.localCarWash1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-car-wash-11.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text5, styles.text5Position]}>Роснефть</Text>
          <Image
            style={[styles.localCafe1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-gas-station-11.png")}
          />
        </View>
      </View>
      <NewOperationFormContainer propBorderColor="#fa5f53" />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  textClr: {
    color: Color.black,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  localIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleLayout: {
    width: 350,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  text5Position: {
    top: 17,
    position: "absolute",
  },
  manuallyAddChild: {
    height: "73.39%",
    top: "0%",
    right: "0%",
    bottom: "26.61%",
    left: "0%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  noteAdd1Icon: {
    left: 13,
    width: 54,
    overflow: "hidden",
    height: 54,
    top: 13,
    position: "absolute",
  },
  text: {
    top: 85,
    left: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
  },
  manuallyAdd: {
    top: 161,
    left: 70,
    width: 80,
    height: 109,
    position: "absolute",
  },
  text1: {
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  text2: {
    fontSize: 13,
    color: Color.salmon,
  },
  pressable: {
    left: 286,
    top: 13,
    position: "absolute",
  },
  directionsSubway2: {
    top: 225,
    left: 54,
  },
  frameChild: {
    left: 0,
    top: 0,
    height: 54,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  text3: {
    top: 20,
    left: 17,
    position: "absolute",
  },
  localCafe1Icon: {
    top: 15,
    left: 315,
  },
  rectangleParent: {
    top: 50,
    left: 2,
    width: 350,
    height: 54,
  },
  text4: {
    top: 19,
    left: 20,
    position: "absolute",
  },
  localCarWash1Icon: {
    top: 14,
    left: 314,
  },
  rectangleGroup: {
    top: 117,
    height: 58,
    left: 2,
    width: 350,
  },
  text5: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    left: 18,
  },
  rectangleContainer: {
    top: 188,
    left: 2,
    width: 350,
    height: 54,
  },
  view: {
    top: 295,
    width: 352,
    height: 283,
    left: 18,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    width: "100%",
  },
});

export default IPhone1414;
