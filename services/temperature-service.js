import { UNITS } from "../constant";

const getOppositUnit = (unit) => {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
};

const convertTemperatureTo = (unit, value) => {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
};

export { getOppositUnit, convertTemperatureTo };
