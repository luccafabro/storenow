import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Logo from "../components/Logo";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Register(props) {
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
        <Text style={styles.word}>faça seu cadastro</Text>
        <CustomInput type="normal" text="nome" placeholder="seu nome aqui" />
        <CustomInput
          type="normal"
          text="email"
          placeholder="storemail@mail.com"
        />
        <CustomInput
          type="normal"
          text="número"
          placeholder="+55 (DDD) 9 9999-9999"
        />
        <CustomInput type="normal" text="senha" placeholder="*********" />
        <CustomInput
          type="checkbox"
          text="tenho mais de 13 anos e aceito os termos"
          placeholder="*********"
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <CustomButton text="cadastrar-se" patternValue={0} size={1.5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <CustomButton text="ir para login" patternValue={1} size={1.5} />
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
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    borderWidth: 1,
  },
});
