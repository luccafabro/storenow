import { StyleSheet, View, Text } from "react-native";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";

export default function DemoCard({ name }) {
  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  const randomColor = () => {
    return "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
  };

  return (
    <View style={styles().container}>
      <View style={styles(randomColor()).square}></View>
      <Text style={styles().word}> {name} </Text>
    </View>
  );
}

const styles = (color) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingRight: 40,
      alignItems: "center",
      flexDirection: "column",
    },
    square: {
      backgroundColor: color,
      width: 50,
      height: 50,
      paddingBottom: 5,
    },
    word: {
      fontFamily: "Inika_400Regular",
      fontSize: 12,
      color: "#fff",
    },
  });
