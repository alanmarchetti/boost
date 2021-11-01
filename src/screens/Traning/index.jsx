import React from "react";
import { View, StatusBar, Text } from "react-native";

import { Container } from "../../components/Container";
import { Activities } from "../../components/Activities";
import { FlatButton } from "../../components/Button";
import { Map } from "../../components/Map";

import { styleds } from "./styles";

const Traning = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style="light" />

      <Map style={styleds.map} />

      <Activities>
        <View style={styleds.timer}>
          <Text style={styleds.timer_title}>tempo</Text>
          <Text style={styleds.timer_result}>00:00:02</Text>
        </View>

        <View style={styleds.distance_speed}>
          <View style={styleds.register}>
            <Text style={styleds.distance}>distância</Text>
            <Text style={styleds.result}>00:00:2</Text>
          </View>

          <View style={styleds.register}>
            <Text style={styleds.distance}>velocidade(km)</Text>
            <Text style={styleds.result}>31.1</Text>
          </View>
        </View>

        <View style={styleds.button}>
          <FlatButton
            style={styleds.buttonStop}
            textStyle={styleds.buttonTextStop}
            text="parar"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </Activities>
    </Container>
  );
};

export { Traning };
