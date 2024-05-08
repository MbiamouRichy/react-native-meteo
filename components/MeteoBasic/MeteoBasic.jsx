import { Image, View } from "react-native";
import Txt from "../txt/txt";
import { s } from "./MeteoBasic.style";

export default function MeteoBasic({ temperature, city }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>{city}</Txt>
      <Txt style={s.weather_label}>Label</Txt>

      <View style={s.temperature_Box}>
        <Txt style={s.temperature}>{temperature}</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
}
