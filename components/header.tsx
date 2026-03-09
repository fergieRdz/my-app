import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  children?: string;
  subtitle?: string;
  color?: string;
};

export function Header({
  children = "Clima",
  subtitle,
  color = "#0f172a",
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{children}</Text>
      {subtitle ? <Text style={[styles.subtitle, { color }]}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.7,
    textAlign: "center",
  },
});