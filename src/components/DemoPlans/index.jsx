import { StyleSheet, ScrollView, View, Text } from "react-native";
import CustomButton from "../Button";
import { useFonts, Inika_400Regular } from "@expo-google-fonts/inika";

export default function DemoPlans(props) {
  let [fontsLoaded] = useFonts({
    Inika_400Regular,
  });

  if (!fontsLoaded) {
    // Return Loading
  }

  const plans = [
    "10mb -> gratuito",
    "1gb -> R$ 10 p/mês",
    "10gb -> R$ 20 p/mês",
    "250gb -> R$ 35 p/mês",
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        {plans.map((data, i) => {
          return <CustomButton size={2} key={i} text={data} patternValue={i+2} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
