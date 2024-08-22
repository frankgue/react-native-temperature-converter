import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonConvertStyles } from "./ButtonConvert.style";

const ButtonConvert = ({ unit, handleOnSubmit }) => {
  return (
    <TouchableOpacity
      style={buttonConvertStyles.button}
      onPress={handleOnSubmit}
    >
      <Text style={buttonConvertStyles.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ButtonConvert;
