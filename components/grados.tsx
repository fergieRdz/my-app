import { View, Text } from 'react-native';

interface grados {
  value: number;
}

export function Grados(props: grados) {
  return (
    <View>
      <Text>{props.value}°</Text>
    </View>
  );
}