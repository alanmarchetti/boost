import React from "react";
import { View } from "react-native";
import { styleds } from "./styles";

const Activities = ({ children }) => {
  return <View style={styleds.atividades}>{children}</View>;
};

export { Activities };
