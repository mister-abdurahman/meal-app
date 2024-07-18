import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
import CustomPressable from "../UI/CustomPressable";

export default function CategoryGridTile({
  text,
  color,
  pressAction,
}: {
  text: string;
  color: string;
  pressAction: any;
}) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <CustomPressable pressAction={pressAction}>
        <View style={styles.innerBox}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </CustomPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    width: 100,
    height: 100,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    // backgroundColor: "#ccc",
  },
  innerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Bold",
  },
});
