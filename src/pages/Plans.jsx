import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Logo from "../components/Logo";
import DemoPlans from "../components/DemoPlans";
import CustomButton from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";

export default function Plans(props) {

  let [fontsLoaded, error] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.word}>nossos planos:</Text>
        <DemoPlans />
        <Text style={styles.footer}>
          é importante ressaltar que todas as contas começam com o plano
          gratuito podendo ser feito o upgrade após cadastro
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Initial");
          }}
        >
          <CustomButton size={2} text="voltar" patternValue={0} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: "#12182B",
    height: "100%",
  },
  word: {
    fontFamily: "Inika_400Regular",
    fontSize: 20,
    color: "#fff",
    paddingHorizontal: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "Inika_400Regular",
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
  },
});
