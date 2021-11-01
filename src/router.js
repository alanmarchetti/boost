import React from "react";
import { MapProvider } from './store/context'
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icons } from "./components/Icons";
import { Feather } from "@expo/vector-icons";

import { Home } from "./screens/Home";
import { Traning } from "./screens/Traning";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <MapProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Pedalar",
            headerTitle: "Pedalar",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Roboto_500Medium",
            },
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Icons name="arrow-left" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Feather name="settings" size={20} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Traning"
          component={Traning}
          options={{
            title: "Pedalar",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Roboto_500Medium",
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Feather name="settings" size={20} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </MapProvider>
    
  );
}

export { Routes };
