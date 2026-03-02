import { View } from 'react-native';
import { Header } from '@/components/header';
import { ClimaScreen } from '../app/climascreen';

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Header>Clima App</Header>
      <ClimaScreen />
    </View>
  );
}