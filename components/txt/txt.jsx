import { Text } from "react-native";
import { s } from "./txt.style";

export default function Txt({ children, style }) {
  return <Text style={[s.txt, style]}>{children}</Text>;
}
