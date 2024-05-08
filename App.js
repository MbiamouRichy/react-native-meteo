import { useFonts } from "expo-font";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import backgroundImg from "./assets/background.png";
import AlataRegular from "./assets/font/Alata-Regular.ttf";
import Home from "./pages/Home/Home.js";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  console.log(isFontLoaded);
  return (
    <ImageBackground
      source={backgroundImg}
      imageStyle={s.img}
      style={s.image_background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
