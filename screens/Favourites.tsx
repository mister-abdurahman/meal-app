import { useContext } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";

function Favourites() {
  //   const { ids } = useContext(FavouritesContext);
  const { ids } = useSelector((state) => state.favouriteMeals);

  const meals = MEALS.filter((meal) => ids.includes(meal.id));

  if (!meals.length)
    return (
      <View style={styles.box}>
        <Text style={styles.text}>You have not added any Favourites yet!</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Click to Add Meals</Text>
        </Pressable>
      </View>
    );
  return (
    <View>
      <MealList meals={meals} />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 14,
    backgroundColor: Colors.lightBrown,
    padding: 10,
    borderRadius: 24,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Favourites;
