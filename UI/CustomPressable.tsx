import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomPressable({
  children,
  pressAction,
  xtraStyle,
}: {
  children: JSX.Element;
  pressAction?: () => void;
  xtraStyle?: any;
}) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
        xtraStyle,
      ]}
      onPress={pressAction}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    // backgroundColor: "#ccc",
  },
});

export default CustomPressable;
