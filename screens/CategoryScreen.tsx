import React from "react";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(data) => <Text>{data.item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoryScreen;
