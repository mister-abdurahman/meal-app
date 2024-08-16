import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({
  iconName,
  color,
  pressAction,
}: {
  iconName: any;
  color: string;
  pressAction: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressedStyle : null)}
      onPress={pressAction}
    >
      <Ionicons name={iconName} size={24} color={color} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.7,
  },
});

export default IconButton;
