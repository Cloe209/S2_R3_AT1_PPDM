
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button
        title="Ir para câmera"
        onPress={() => navigation.navigate("Camera")}
      />

      <Button
        title="Ir para GPS"
        onPress={() => navigation.navigate("GPS")}
      />

      <Button
        title="Ir para acelerômetro"
        onPress={() => navigation.navigate("Accelerometer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
