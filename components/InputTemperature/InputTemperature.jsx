import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { inputTempStyles } from "./InputTemperature.style";

const InputTemperature = ({ defaultValue, onChangeText, unit }) => {
  return (
    <View style={inputTempStyles.container}>
      <TextInput
        keyboardType="numeric"
        maxLength={4}
        style={inputTempStyles.input}
        placeholder="Tappe un température"
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={inputTempStyles.unit}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputTemperature;
