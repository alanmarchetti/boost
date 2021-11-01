import { Dimensions, StyleSheet } from "react-native";

const styleds = StyleSheet.create({
  map: {
    flex: 4,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  menu_icons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  buttonStart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: "#0564FF",
  },

  buttonTextStart: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
  },
});

export { styleds };
