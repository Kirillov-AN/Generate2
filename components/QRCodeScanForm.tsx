import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type QRCodeScanFormType = {
  /** Style props */
  rectangleViewHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const QRCodeScanForm = ({ rectangleViewHeight }: QRCodeScanFormType) => {
  const qrCodeScanStyle = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleViewHeight),
    };
  }, [rectangleViewHeight]);

  return (
    <View style={[styles.qrCodeScan, styles.codeLayout, qrCodeScanStyle]}>
      <View style={[styles.qrCodeScanChild, styles.codeLayout]} />
      <Image
        style={styles.qrCodeScanner1Icon}
        contentFit="cover"
        source={require("../assets/qr-code-scanner-1.png")}
      />
      <Text style={styles.qr}>{`Сканировать 
QR с чека`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  codeLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  qrCodeScanChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  qrCodeScanner1Icon: {
    top: 13,
    left: 13,
    width: 54,
    height: 54,
    overflow: "hidden",
    position: "absolute",
  },
  qr: {
    top: 85,
    left: 7,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  qrCodeScan: {
    top: 161,
    left: 235,
  },
});

export default QRCodeScanForm;
