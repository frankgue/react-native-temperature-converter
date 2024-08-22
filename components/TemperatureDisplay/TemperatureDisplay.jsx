import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { tempDisplayStyles } from "./TemperatureDisplay.style";

const TemperatureDisplay = ({ value, unit }) => {
  return (
    <Text style={tempDisplayStyles.text}>
      {value} {unit}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default TemperatureDisplay;
