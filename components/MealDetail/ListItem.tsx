import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ListItem({ item }: { item: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.lightBrown,
    padding: 4,
    borderRadius: 10,
    // marginHorizontal: 24,
    marginVertical: 5,
  },
  text: {
    color: Colors.darkBrown,
    textAlign: "center",
  },
});

export default ListItem;
