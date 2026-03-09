import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import type { AppTheme } from "@/app/index";

type Props = {
  theme: AppTheme;
  darkMode: boolean;
  onToggleTheme: () => void;
};

type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    wind_speed_10m?: number;
    weather_code?: number;
    is_day?: number;
    time?: string;
  };
};

type WeatherState = {
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
  time: string;
};

const MONTERREY = {
  name: "Monterrey",
  latitude: 25.6866,
  longitude: -100.3161,
};

export default function ClimaScreen({
  theme,
  darkMode,
  onToggleTheme,
}: Props) {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const weatherUrl = useMemo(() => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${MONTERREY.latitude}&longitude=${MONTERREY.longitude}&current=temperature_2m,wind_speed_10m,weather_code,is_day&timezone=auto`;
  }, []);

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(weatherUrl);

      if (!response.ok) {
        throw new Error("Weather request failed");
      }

      const data: OpenMeteoResponse = await response.json();

      if (
        data.current?.temperature_2m === undefined ||
        data.current?.wind_speed_10m === undefined ||
        data.current?.weather_code === undefined ||
        data.current?.is_day === undefined ||
        data.current?.time === undefined
      ) {
        throw new Error("Incomplete weather data");
      }

      setWeather({
        temperature: Math.round(data.current.temperature_2m),
        windSpeed: Math.round(data.current.wind_speed_10m),
        weatherCode: data.current.weather_code,
        isDay: data.current.is_day === 1,
        time: formatTime(data.current.time),
      });
    } catch (err) {
      setError("Could not load weather right now.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [weatherUrl]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const weatherInfo = getWeatherPresentation(
    weather?.weatherCode,
    weather?.isDay ?? true
  );

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={[styles.city, { color: theme.text }]}>{MONTERREY.name}</Text>
          {!loading && !error && weather?.time ? (
            <Text style={[styles.timeText, { color: theme.secondaryText }]}>
              {weather.time}
            </Text>
          ) : null}
        </View>

        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: theme.secondaryText }]}>
            {darkMode ? "Dark" : "Light"}
          </Text>
          <Switch
            value={darkMode}
            onValueChange={onToggleTheme}
            trackColor={{ false: "#1c737f", true: theme.accent }}
            thumbColor={darkMode ? "#ffffff" : "#ffffff"}
          />
        </View>
      </View>

      {loading ? (
        <View style={styles.centerBlock}>
          <ActivityIndicator size="large" color={theme.accent} />
          <Text style={[styles.helperText, { color: theme.secondaryText }]}>
            Loading weather...
          </Text>
        </View>
      ) : error ? (
        <View style={styles.centerBlock}>
          <Text style={styles.emoji}>⚠️</Text>
          <Text style={[styles.errorText, { color: theme.text }]}>{error}</Text>
        </View>
      ) : (
        <View style={styles.centerBlock}>
          <Text style={styles.emoji}>{weatherInfo.icon}</Text>

          <Text style={[styles.temperature, { color: theme.text }]}>
            {weather?.temperature}°
          </Text>

          <Text style={[styles.condition, { color: theme.secondaryText }]}>
            {weatherInfo.label}
          </Text>

          <Text style={[styles.metaText, { color: theme.secondaryText }]}>
            Wind: {weather?.windSpeed} km/h
          </Text>
        </View>
      )}

      <View style={styles.buttonGroup}>
        <Pressable
          onPress={fetchWeather}
          style={[styles.primaryButton, { backgroundColor: theme.accent }]}
        >
          <Text style={[styles.primaryButtonText, { color: theme.buttonText }]}>
            Refresh Weather
          </Text>
        </Pressable>
      </View>

      <Text style={[styles.footerText, { color: theme.secondaryText }]}>
        Real-time weather for Monterrey
      </Text>
    </View>
  );
}

function getWeatherPresentation(code?: number, isDay: boolean = true) {
  if (code === 0) return { label: isDay ? "Sunny" : "Clear night", icon: isDay ? "☀️" : "🌙" };

  if (code !== undefined && code >= 1 && code <= 3) {
    return { label: "Partly cloudy", icon: isDay ? "⛅" : "☁️" };
  }

  if (code !== undefined && code >= 45 && code <= 48) {
    return { label: "Fog", icon: "🌫️" };
  }

  if (code !== undefined && code >= 51 && code <= 67) {
    return { label: "Rain", icon: "🌧️" };
  }

  if (code !== undefined && code >= 71 && code <= 77) {
    return { label: "Snow", icon: "❄️" };
  }

  if (code !== undefined && code >= 80 && code <= 82) {
    return { label: "Rain showers", icon: "🌦️" };
  }

  if (code !== undefined && code >= 95) {
    return { label: "Thunderstorm", icon: "⛈️" };
  }

  return { label: "Unknown conditions", icon: isDay ? "🌤️" : "🌙" };
}

function formatTime(dateTimeString: string) {
  const date = new Date(dateTimeString);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  topRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  switchContainer: {
    alignItems: "center",
    gap: 6,
  },
  switchLabel: {
    fontSize: 13,
    fontWeight: "600",
  },
  centerBlock: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,
    width: "100%",
  },
  city: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 4,
  },
  timeText: {
    fontSize: 15,
    fontWeight: "500",
  },
  emoji: {
    fontSize: 56,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 72,
    fontWeight: "900",
    lineHeight: 82,
  },
  condition: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
  },
  metaText: {
    fontSize: 16,
    marginTop: 10,
  },
  helperText: {
    marginTop: 14,
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    marginTop: 8,
  },
  primaryButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "800",
  },
  footerText: {
    marginTop: 18,
    fontSize: 14,
    textAlign: "center",
  },
});