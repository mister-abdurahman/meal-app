import { View, Text, StyleSheet } from "react-native";

function HeadingMedium({
  title,
  xtraStyle,
}: {
  title: string;
  xtraStyle?: any;
}) {
  return <Text style={[styles.title, xtraStyle]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HeadingMedium;
