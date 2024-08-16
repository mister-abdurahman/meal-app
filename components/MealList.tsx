import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

interface MealProps {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
  affordability: string;
  complexity: string;
  duration: number;
}

function MealList({ meals }: { meals: MealProps[] }) {
  return (
    <FlatList
      data={meals}
      renderItem={(itemData) => (
        <MealItem
          id={itemData.item.id}
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
  );
}
const styles = StyleSheet.create({});

export default MealList;
