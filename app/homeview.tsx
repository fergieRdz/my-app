import { Grados } from '@/components/grados';
import { Cuidad } from '@/components/cuidad';
import { View, Text } from 'react-native';


export function HomeView() {
  return (
    <View>
      <Cuidad name="Monterrey" />
      <Grados value={32} />
    </View>
  );
}
