import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Logo() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  return (
    <View style={styles.container}>
      <Text style={styles.word}>storenow</Text>
      <Image style={styles.arrow} source={require("./arrow.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 40,
  },
  word: {
    fontFamily: "Inter_400Regular",
    fontSize: 50,
    color: "#28C9F9",
  },
  arrow: {
    position: "relative",
    right: 45,
    width: 100,
    height: 100,
  },
});
