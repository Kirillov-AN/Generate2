import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Image
        style={styles.letter1Icon}
        contentFit="cover"
        source={require("../assets/letter-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>{`Подтвердите свою почту
для завершения
регистрации`}</Text>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone14Signup")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>Вернуться к входу</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  letter1Icon: {
    top: 191,
    left: 136,
    width: 118,
    height: 109,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 341,
    left: 54,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
    position: "absolute",
  },
  text1: {
    top: 11,
    left: 116,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    textAlign: "left",
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
    top: 469,
    left: 18,
    width: 354,
    height: 39,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone141;
