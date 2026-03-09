import { Text, StyleSheet, View } from "react-native";

type HeaderProps = {
  children?: string;
  subtitle?: string;
  color?: string;
};

export function Header({ children, subtitle, color = "#000" }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color }]}>
        {children ?? "Clima"}
      </Text>

      {subtitle && (
        <Text style={[styles.subtitle, { color }]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
});