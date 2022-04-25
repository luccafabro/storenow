import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Logo from "../components/Logo";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login(props) {
  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.word}>faça seu login</Text>
          <CustomInput
            type="normal"
            size={1}
            text="email"
            placeholder="storenow@mail.com"
          />
          <CustomInput
            type="normal"
            size={1}
            text="senha"
            placeholder="*******"
          />
          <Text style={styles.needHelp}>preciso de ajuda!</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          >
            <CustomButton text="entrar" patternValue={0} size={2} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Register");
            }}
          >
            <CustomButton text="quero me cadastrar" patternValue={1} size={2} />
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
    fontSize: 24,
    color: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    borderWidth: 1,
  },
  needHelp: {
    fontSize: 18,
    paddingHorizontal: 40,
    paddingBottom: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#fff",
    color: "#fff",
  },
});
