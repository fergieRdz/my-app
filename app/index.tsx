import { View } from "react-native";
import ClimaScreen from "@/components/climascreen";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "#10c0ec" }}>
      <Header>Clima App</Header>
      <ClimaScreen />
    </View>
  );
}
