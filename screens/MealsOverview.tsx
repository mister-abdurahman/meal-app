import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { Route } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

function MealsOverview({ route, navigation }: { route: any; navigation: any }) {
  const { categoryId } = route.params;

  useLayoutEffect(function () {
    const categoryTitle = CATEGORIES.find(
      (cat) => cat.id === categoryId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, []);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <MealList meals={meals} />
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
