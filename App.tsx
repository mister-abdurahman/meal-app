import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/Categories";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverview from "./screens/MealsOverview";
// import MealDetails from "./screens/MealDetails";
import MealDetails from "./screens/MealDetails";
import Favourites from "./screens/Favourites";
import Colors from "./constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FavouritesContextProvider } from "./store/context/favourites-context";
import { Provider } from "react-redux";
import store from "./store/redux/store";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.darkBrown },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: Colors.darkBrown },
        drawerActiveBackgroundColor: Colors.lightBrown,
        drawerActiveTintColor: Colors.darkBrown,
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(
    function () {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    },
    [loaded, error]
  );

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavouritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavouritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
