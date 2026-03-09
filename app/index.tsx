import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { useMemo, useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo<AppTheme>(() => {
    return darkMode
      ? {
          mode: "dark",
          background: "#0F172A",
          card: "#1E293B",
          text: "#F8FAFC",
          secondaryText: "#CBD5E1",
          accent: "#31a6d8",
          buttonText: "#082F49",
          border: "#334155",
        }
      : {
          mode: "light",
          background: "#9dd3ec",
          card: "#4fc7d6",
          text: "#0F172A",
          secondaryText: "#475569",
          accent: "#1299dc",
          buttonText: "#FFFFFF",
          border: "#E2E8F0",
        };
  }, [darkMode]);

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