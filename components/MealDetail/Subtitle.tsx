import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Subtitle({ subTitle }: { subTitle: string }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    borderBottomColor: Colors.lightBrown,
    borderBottomWidth: 2,
    marginHorizontal: 36,
    marginVertical: 4,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.lightBrown,
    textAlign: "center",
  },
});

export default Subtitle;
