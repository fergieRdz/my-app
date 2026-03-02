import { View, Text } from "react-native";

type CiudadProps = { name: string };

export default function Ciudad({ name }: CiudadProps) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}