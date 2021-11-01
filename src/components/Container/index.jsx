import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleds } from './styles'

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styleds.container}>
      {children}
    </SafeAreaView>
  )
};

export { Container };
