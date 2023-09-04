import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import QRCodeScanForm from "../components/QRCodeScanForm";
import FavoriteContainer1 from "../components/FavoriteContainer1";
import { useNavigation } from "@react-navigation/native";
import NewOperationFormContainer from "../components/NewOperationFormContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <QRCodeScanForm />
      <View style={styles.manuallyAdd}>
        <View style={[styles.manuallyAddChild, styles.childBg]} />
        <Image
          style={styles.noteAdd1Icon}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={[styles.text, styles.textClr]}>{`Ввести данные
вручную`}</Text>
      </View>
      <FavoriteContainer1 />
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Frame")}
      >
        <View style={[styles.frameChild, styles.iconPosition]} />
        <Text style={[styles.text1, styles.text1Position]}>Кофе у дома</Text>
        <Image
          style={[styles.pen1Icon, styles.text1Position]}
          contentFit="cover"
          source={require("../assets/pen-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <NewOperationFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  textClr: {
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  frameChildLayout: {
    width: 350,
    height: 54,
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  text1Position: {
    top: 20,
    position: "absolute",
  },
  manuallyAddChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  noteAdd1Icon: {
    top: 13,
    left: 13,
    width: 54,
    overflow: "hidden",
    height: 54,
    position: "absolute",
  },
  text: {
    top: 85,
    left: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  manuallyAdd: {
    top: 161,
    left: 70,
    width: 80,
    height: 80,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    width: 350,
    height: 54,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  text1: {
    left: 17,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  pen1Icon: {
    left: 317,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 352,
    left: 18,
    position: "absolute",
  },
  icon: {
    top: 762,
    width: 390,
    height: 83,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    width: "100%",
  },
});

export default IPhone14;
