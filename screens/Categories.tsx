import React from "react";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen({ navigation }: { navigation: any }) {
  function handlePress(id: string) {
    navigation.navigate("MealsOverview", { categoryId: id });
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={(data) => (
          <CategoryGridTile
            text={data.item.title}
            color={data.item.color}
            pressAction={() => handlePress(data.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
