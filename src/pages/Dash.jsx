import { StyleSheet, View, SafeAreaView } from "react-native";

export default function Dash(props) {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <Text>
              Tela Dash
          </Text>
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
});
