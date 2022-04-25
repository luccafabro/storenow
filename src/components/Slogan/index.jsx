import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";
import AppLoading from 'expo-app-loading';

export default function Slogan({text}) {

  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
        <Text style={styles.word}>
            {text}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  word: {
      textAlign: 'center',
    fontFamily: "Inika_400Regular",
    fontSize: 22,
    color: "#fff",
  },
});
