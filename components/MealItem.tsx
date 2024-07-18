import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import CustomPressable from "../UI/CustomPressable";

interface Props {
  title: string;
  imageUrl: string;
  ingredients: string[];
  affordability: string;
  complexity: string;
  duration: string;
}
function MealItem({
  title,
  imageUrl,
  ingredients,
  affordability,
  complexity,
  duration,
}: Props) {
  return (
    <View style={styles.outerBox}>
      <CustomPressable>
        <View style={styles.innerBox}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              alignItems: "center",
              gap: 6,
              flexDirection: "row",
              marginVertical: 8,
            }}
          >
            <Text style={styles.smallText}>{duration}m</Text>
            <Text style={styles.smallText}>{complexity}</Text>
            <Text style={styles.smallText}>{affordability}</Text>
          </View>
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
