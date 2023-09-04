import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type NewOperationFormContainerType = {
  /** Style props */
  propBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NewOperationFormContainer = ({
  propBorderColor,
}: NewOperationFormContainerType) => {
  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View style={[styles.view, styles.viewLayout1]}>
      <View style={[styles.view1, styles.view1Bg]} />
      <Text style={styles.text}>Новая операция</Text>
      <View style={styles.parent}>
        <View style={[styles.view2, styles.viewLayout]}>
          <View style={[styles.child, styles.viewLayout]} />
          <View style={[styles.item, lineViewStyle]} />
          <Text style={[styles.text1, styles.textTypo]}>Расход</Text>
        </View>
        <View style={[styles.view3, styles.viewLayout]}>
          <View style={[styles.child, styles.viewLayout]} />
          <Text style={[styles.text2, styles.textTypo]}>Доход</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout1: {
    height: 119,
    width: 390,
    top: 0,
    position: "absolute",
  },
  view1Bg: {
    backgroundColor: Color.white,
    left: 0,
  },
  viewLayout: {
    width: 136,
    height: 28,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    top: 5,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  view1: {
    height: 119,
    width: 390,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 52,
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.white,
    left: 0,
  },
  item: {
    top: 27,
    left: -1,
    borderStyle: "solid",
    borderColor: "#e96757",
    borderTopWidth: 2,
    width: 138,
    height: 2,
    position: "absolute",
  },
  text1: {
    left: 44,
  },
  view2: {
    left: 0,
    width: 136,
  },
  text2: {
    left: 47,
  },
  view3: {
    left: 136,
  },
  parent: {
    top: 91,
    left: 59,
    width: 272,
    height: 28,
    position: "absolute",
  },
  view: {
    marginLeft: -195,
    left: "50%",
  },
});

export default NewOperationFormContainer;
