import { router } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Modal() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>⛅</Text>

        <Text style={styles.title}>Clima App</Text>

        <Text style={styles.subtitle}>by Fernanda Rodriguez Villarreal</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acerca de esta app</Text>
          <Text style={styles.sectionText}>
            esta app muestra el clima en tiempo real para Monterrey.
          </Text>
          <Text style={styles.sectionText}>
            Muestra la temperatura, velocidad del viento, icono de día o noche, y hora local.
          </Text>
          <Text style={styles.sectionText}>
            También incluye modo claro y modo oscuro.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologías utilizadas</Text>
          <Text style={styles.sectionText}>• Expo</Text>
          <Text style={styles.sectionText}>• React Native</Text>
          <Text style={styles.sectionText}>• Open-Meteo API</Text>
        </View>

        <Pressable onPress={() => router.replace("/")} style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38bdf8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  icon: {
    fontSize: 56,
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#0f172a",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#475569",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0ea5e9",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});