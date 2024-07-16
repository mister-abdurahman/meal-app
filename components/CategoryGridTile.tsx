import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function CategoryGridTile({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable>
        <View>
          <Text>{text}</Text>
        </View>
      </Pressable>
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
  },
});
