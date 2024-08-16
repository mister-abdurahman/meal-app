import { useRoute } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetailsUI from "../UI/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import ListItem from "../components/MealDetail/ListItem";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavourites, removeFavourites } from "../store/redux/favourites";

function MealDetails({ navigation, route }: { navigation: any; route: any }) {
  const { id } = route.params;
  // const { addFavourites, ids, removeFavourites } =
  //   useContext(FavouritesContext);
  const { ids } = useSelector((state) => state.favouriteMeals);
  const dispatch = useDispatch();

  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    // isGlutenFree,
    // isVegan,
    // isVegetarian,
    // isLactoseFree,
  } = MEALS.find((meal) => meal.id === id);

  const mealIsFavourite = ids.includes(id);

  function handlePressIcon() {
    // mealIsFavourite ? removeFavourites(id) : addFavourites(id);
    mealIsFavourite
      ? dispatch(removeFavourites({ id }))
      : dispatch(addFavourites({ id }));
  }

  useLayoutEffect(
    function () {
      navigation.setOptions({
        title: "About Meal",
        headerRight: () => {
          return (
            <IconButton
              iconName={mealIsFavourite ? "star" : "star-outline"}
              color="#fff"
              pressAction={handlePressIcon}
            />
          );
        },
      });
    },
    [mealIsFavourite]
  );

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetailsUI
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={{ color: "#fff" }}
      />
      <Subtitle subTitle="Ingredients" />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%" }}>
          {ingredients.map((ingredient: string, i: string) => (
            <ListItem key={i} item={ingredient} />
          ))}
        </View>
      </View>
      <Subtitle subTitle="Steps" />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%" }}>
          {steps.map((step: string, i: string) => (
            <ListItem key={i} item={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  imageBox: {},
  image: {
    height: 300,
  },
  headerTextBox: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  smallText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: 12,
  },
});

export default MealDetails;
