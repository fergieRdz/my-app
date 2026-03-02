import { Grados } from './grados';
import { Cuidad } from './cuidad';
import { View, Text } from 'react-native';

export default function HomeView() {
  return (
    <View>
      <Cuidad name="Monterrey" />
      <Grados value={32} />
    </View>
  );
}