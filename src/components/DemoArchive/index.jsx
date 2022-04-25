import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";
import DemoCard from "../DemoCard";
import AppLoading from 'expo-app-loading';

export default function DemoArchive(props) {
  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  const names = [
    "tcc",
    "picture",
    "favorite",
    "rap",
    "yahoo",
    "password",
    "aaaa",
  ];

  const extensions = ["pdf", "xlsx", "txt", "png"];

  return (
    <View style={styles.container}>
      <Text style={styles.word}>vários tipos de arquivos:</Text>
      <ScrollView horizontal={true}>
        {names.map((data, i) => {
          return (
            <DemoCard
              key={i}
              name={`${data}.${
                extensions[
                  Math.floor(Math.random() * (extensions.length - 0)) + 0
                ]
              }`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  word: {
    fontFamily: "Inika_400Regular",
    fontSize: 16,
    color: "#fff",
  },
});
