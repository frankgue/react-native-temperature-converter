import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppStyles } from "./App.style";
import hotBackground from "./assets/hot.png";
import InputTemperature from "./components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from "./constant";
import {
  convertTemperatureTo,
  getOppositUnit,
} from "./services/temperature-service";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);

  const getConvertedTemperature = () => {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  };

  return (
    <ImageBackground source={hotBackground} style={AppStyles.container}>
      <View style={AppStyles.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          defaultValue={DEFAULT_TEMPERATURE}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <ButtonConvert
          unit={currentUnit}
          handleOnSubmit={() => {
            setCurrentUnit(oppositeUnit);
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
