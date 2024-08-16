import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import CustomPressable from "../UI/CustomPressable";
import { useNavigation } from "@react-navigation/native";
import HeadingMedium from "../UI/HeadingMedium";
import MealDetailsUI from "../UI/MealDetails";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
  affordability: string;
  complexity: string;
  duration: number;
}
function MealItem({
  id,
  title,
  imageUrl,
  ingredients,
  affordability,
  complexity,
  duration,
}: Props) {
  const navigation: any = useNavigation();
  return (
    <View style={styles.outerBox}>
      {/* <CustomPressable> */}
      <CustomPressable
        pressAction={() => navigation.navigate("MealDetails", { id })}
      >
        <View style={styles.innerBox}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <HeadingMedium title={title} />
          <MealDetailsUI
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </CustomPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerBox: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerBox: {
    // flex: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  smallText: {
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: 12,
  },
});
export default MealItem;
