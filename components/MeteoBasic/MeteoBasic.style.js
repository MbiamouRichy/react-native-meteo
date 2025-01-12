import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: { alignItems: "flex-end" },
  weather_label: { alignSelf: "flex-end", transform: [{ rotate: "-90deg" }] },
  image: {
    height: 90,
    width: 90,
    backgroundColor: "white",
  },
  temperature_Box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 150,
  },
});
