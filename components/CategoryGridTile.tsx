import { View, Text, Pressable } from "react-native";
import React from "react";

export default function CategoryGridTile({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>CategoryGridTile</Text>
        </View>
      </Pressable>
    </View>
  );
}
