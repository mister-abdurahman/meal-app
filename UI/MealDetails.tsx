import { View, Text, StyleSheet } from "react-native";

function MealDetailsUI({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: {
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.smallText, textStyle]}>{duration}m</Text>
      <Text style={[styles.smallText, textStyle]}>{complexity}</Text>
      <Text style={[styles.smallText, textStyle]}>{affordability}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 6,
    flexDirection: "row",
    marginVertical: 8,
  },
  smallText: {
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: 12,
  },
});

export default MealDetailsUI;
