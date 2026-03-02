import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Modal() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0b7db6",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Mi app de Clima
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        Desarrollado usando Expo + React Native
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        Desarrollador Fernanda Rodriguez
      </Text>
      

      <View style={{ position: "absolute", left: 24, right: 24, bottom: 40 }}>
        <Pressable
          onPress={() => router.replace("/")}
          style={{
            backgroundColor: "white",
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Ir a Home</Text>
        </Pressable>
      </View>
    </View>
  );
}
