import { StyleSheet } from "react-native";
import { backgraundElement, button, colors, dataStyleLogin } from "./style";

export const loginstyle = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    ...dataStyleLogin.comunFlex,
    position: "relative",
    height: 900,
  },
  containerdark: {
    backgroundColor: colors.black,
    ...dataStyleLogin.comunFlex,
    position: "relative",
    height: 900,
  },

  buttonStyle: {
    width: 50,
    height: 20,
    backgroundColor: colors.secundary100,
    borderRadius: 100,
  },
});

export const fondo = StyleSheet.create({
  backgroundData: {
    borderColor: colors.black,
    ...backgraundElement,
  },
  backgroundDatadark: {
    borderColor: colors.secundary100,
    ...backgraundElement,
    zIndex: -100, 
  },
  bola: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: colors.secundary100,
    top: 20,
    right: 45,
    borderRadius: 50,
  },
  titulo: {
    color: colors.secundary,
    fontSize: 30,
    flexDirection: "row",
  },
  titulodark: {
    color: colors.primary,
    fontSize: 30,
    flexDirection: "row",
  },
  texto: {
    color: colors.secundary,
    fontSize: 14,
    flexDirection: "row",
    ...dataStyleLogin.comunFlex,
    gap: 5,
  },
  textodarck: {
    color: colors.primary,
    fontSize: 14,
    flexDirection: "row",
    ...dataStyleLogin.comunFlex,
    gap: 8,
  },
  cajatexto: {
    borderWidth: 1,
    borderColor: colors.secundary,
    borderRadius: 20,
    width: 300,
    zIndex: 10,
    padding: 7,
  },
  cajatextodark: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary100,
    borderRadius: 20,
    width: 300,
    zIndex: 10,
    padding: 7,
  },
});

export const comunButton = StyleSheet.create({
  boton: {
    backgroundColor: colors.secundary,
    ...dataStyleLogin.comunFlex,
    ...button.data,
  },
});
