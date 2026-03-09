import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { useState } from "react";
import ClimaScreen from "@/components/climascreen";
import { Header } from "@/components/header";

export type AppTheme = {
  mode: "light" | "dark";
  background: string;
  card: string;
  text: string;
  secondaryText: string;
  accent: string;
  buttonText: string;
  border: string;
};

export default function Home() {
  const systemScheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(systemScheme === "dark");

  const theme: AppTheme = darkMode
    ? {
        mode: "dark",
        background: "#0f172a",
        card: "#1e293b",
        text: "#f8fafc",
        secondaryText: "#cbd5e1",
        accent: "#38bdf8",
        buttonText: "#ffffff",
        border: "#334155",
      }
    : {
        mode: "light",
        background: "#92d4f3",
        card: "#62d2ee",
        text: "#0c3595",
        secondaryText: "#475569",
        accent: "#2997ce",
        buttonText: "#ffffff",
        border: "#e2e8f0",
      };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <Header color={theme.text} subtitle="by Fergie Rdz">
        Clima App
      </Header>

      <ClimaScreen
        theme={theme}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});