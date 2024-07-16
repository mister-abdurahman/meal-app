import React from "react";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={(data) => (
          <CategoryGridTile text={data.item.title} color={data.item.color} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
