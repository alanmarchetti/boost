import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styleds } from "./styles";

const FlatButton = ({ text, onPress, iconName, style, textStyle }) => {
  return (
    <View style={styleds.container_button}>
      <TouchableOpacity onPress={onPress}>
        <View style={style}>
          <Text style={textStyle}>{text}</Text>
          <AntDesign name={iconName} size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export { FlatButton };
