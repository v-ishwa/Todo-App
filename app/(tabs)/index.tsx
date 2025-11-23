import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useTheme from "@/hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text>Todo</Text>
      {/* @ts-ignore */}
      <Link href={"/(tabs)/index"}><Text>Go to About</Text></Link>
      <TouchableOpacity onPress={toggleDarkMode} >
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});