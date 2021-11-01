import React from "react";
import { styleds } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icons = ({ name }) => {
  return <MaterialCommunityIcons style={styleds.icons} name={name} />;
};

export { Icons };
