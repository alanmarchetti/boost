import React from "react";
import { View, StatusBar } from "react-native";

import { Container } from "../../components/Container";
import { Icons } from "../../components/Icons";
import { Activities } from "../../components/Activities";
import { Map } from "../../components/Map";
import { FlatButton } from "../../components/Button";

import { styleds } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style="light" />
      <Map style={styleds.map} />

      <Activities>
        <View style={styleds.menu_icons}>
          <Icons name="vector-polyline" />
          <Icons name="bike" />
          <Icons name="terrain" />
          <Icons name="monitor" />
        </View>

        <FlatButton
          style={styleds.buttonStart}
          textStyle={styleds.buttonTextStart}
          text="iniciar corrida"
          onPress={() => navigation.navigate("Traning")}
          iconName="arrowright"
        />
      </Activities>
    </Container>
  );
};

export { Home };
