import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Route } from "@react-navigation/native";
import MealItem from "../components/MealItem";

function MealsOverview({ route }: { route: any }) {
  const { categoryId } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            ingredients={itemData.item.ingredients}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
          />
        )}
        keyExtractor={(data) => data.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 25,
  },
});
export default MealsOverview;
