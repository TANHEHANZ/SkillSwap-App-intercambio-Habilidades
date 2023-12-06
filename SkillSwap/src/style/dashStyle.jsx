import { StyleSheet } from "react-native";
import { backgraundElement, button, colors, dataStyleLogin } from "./style";

export const buttonCrud = StyleSheet.create({
  fondoButtom: {
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    borderRadius: 100,
    position: "relative",
    top: -25,
    zIndex: 10,
  },
  butttonStyle: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: colors.secundary,
    position: "absolute",
    left: 2,
    bottom: 2,
    ...dataStyleLogin.comunFlex,
  },
});

export const trabajos = StyleSheet.create({
  cars: {
    width: 160,
    backgroundColor: "#060b4b86",
    marginHorizontal: 10,
    borderRadius: 10,
    ...dataStyleLogin.comunFlex,

  },
});
