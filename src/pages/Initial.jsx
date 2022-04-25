import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import Logo from "../components/Logo";
import Slogan from "../components/Slogan";
import DemoArchive from "../components/DemoArchive";
import CustomButton from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Initial(props) {
  const slogans = [
    "tenha seus arquivos cada vez mais perto de você",
    "armazenamnto na nuvem",
    "planos gratuitos",
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <FlatList
          data={slogans}
          renderItem={({item}) => <Slogan text={item} /> }
          keyExtractor={(item, index) => index}
        />
        <DemoArchive />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Plans");
          }}
        >
          <CustomButton text="veja nossos planos" patternValue={1} size={2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <CustomButton text="comece já" patternValue={0} size={2} />
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
});
