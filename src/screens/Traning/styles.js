import { Dimensions, StyleSheet } from "react-native";

const styleds = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  timer: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },

  timer_title: {
    fontSize: 24,
  },

  timer_result: {
    fontSize: 64,
  },

  distance_speed: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  distance: {
    fontSize: 18,
  },

  result: {
    fontSize: 32,
  },

  register: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  buttonStop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#FF2525",
  },

  buttonTextStop: {
    color: "#FF2525",
    fontSize: 16,
    lineHeight: 20,
  },
});

export { styleds };
