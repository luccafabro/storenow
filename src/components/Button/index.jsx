import { StyleSheet, View, Text } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function CustomButton({ size, text, patternValue }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  const pattern = [
    ["#28C9F9", "#000"],
    ["#394F6B", "#FFF"],
    /*
    Pattern 0 e 1 são as principais
    Após isso são relacionadas aos planos
    */
    ["#313A45", "#FFF"],
    ["#C4C4C4", "#000"],
    ["#55BEC0", "#000"],
    ["#28C9F9", "#000"],
  ];

  return (
    <View style={styles(size, pattern[patternValue]).container}>
      <View style={styles(size, pattern[patternValue]).rectangle}>
        <Text style={styles(size, pattern[patternValue]).word}>{text}</Text>
      </View>
    </View>
  );
}

const styles = (size, p) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    rectangle: {
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      height: 25 * size,
      backgroundColor: p[0],
    },
    word: {
      fontFamily: "Inter_400Regular",
      fontSize: 12 * size,
      color: p[1],
    },
  });
