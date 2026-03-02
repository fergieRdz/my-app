import { Text, StyleSheet } from 'react-native';

type HeaderProps = {
  children?: string;
};

export function Header(props: HeaderProps) {
  return (
    <Text style={styles.header}>
      {props.children ?? 'Clima'}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});