import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MeteoAPI } from "../../api/meteo";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import { s } from "./Home.style";

function Home() {
  let [coords, setCoords] = useState();
  let [weather, setWeather] = useState();
  const currentWeather = weather?.current_weather;
  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  });
  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }

  console.log(weather);
  console.log(coords);
  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic temperature={Math.round(currentWeather?.temperature)} />
      </View>
      <View style={s.searchbar_container}></View>
      <View style={s.meteo_advanced}></View>
    </>
  ) : null;
}

export default Home;
