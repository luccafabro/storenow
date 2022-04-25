import { StyleSheet, Text, View, TextInput } from "react-native";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CustomInput({ text, placeholder, size, type }) {
  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  if (type == "checkbox") {
    return (
      <View style={styles(size).masterContainer}>
        <View style={styles(size).container}>
          <BouncyCheckbox
          style={{paddingHorizontal: 40}}
            size={25}
            fillColor="#28C9F9"
            unfillColor="#C4C4C4"
            text={text}
            iconStyle={styles.checkbox}
            textStyle={styles.label}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles(size).masterContainer}>
      <Text style={styles(size).label}>{text}</Text>
      <View style={styles(size).container}>
        <TextInput
          secureTextEntry={text == "senha" ? true : false}
          placeholder={placeholder}
          style={styles(size).input}
        />
      </View>
    </View>
  );
}

const styles = (size) =>
  StyleSheet.create({
    masterContainer: {
      paddingVertical: size == 1 ? 15 : 2,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      fontFamily: "Inika_400Regular",
      fontSize: 18,
      color: "#fff",
      paddingHorizontal: 40,
      paddingBottom: size == 1 ? 10 : 3,
    },
    input: {
      paddingLeft: 15,
      backgroundColor: "#fff",
      height: size == 1 ? 50 : 40,
      width: 300,
      borderWidth: 1,
    },
    checkbox: {
      fontFamily: "Inika_400Regular",
    },
  });
