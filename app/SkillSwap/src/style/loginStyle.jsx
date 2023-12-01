import { StyleSheet } from "react-native";
import { backgraundElement, button, colors, dataStyleLogin } from "./style";

export const loginstyle = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    flex: 1,
    ...dataStyleLogin.comunFlex,
    position: "relative",
  },
  containerdark: {
    backgroundColor: colors.black,
    flex: 1,
    ...dataStyleLogin.comunFlex,
    position: "relative",
    height: 100,
  },

  buttonStyle: {
    width: 50,
    height: 20,
    backgroundColor: colors.secundary100,
    borderRadius: 100,
    // position: "absolute",
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
  },
  titulodark: {
    color: colors.secundary200,
    fontSize: 30,
  },
  texto: {
    color: colors.secundary,
    fontSize: 14,
  },
  textodarck: {
    color: colors.secundary200,
    fontSize: 14,
  },
  cajatexto: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary,
    borderRadius: 20,
    width: 300,
    zIndex: 10,
    padding: 7,
  },
  cajatextodark: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary100,
    borderRadius: 20,
    width: 300,
    zIndex: 10,
    padding: 7,
  },
});

export const comunButton = StyleSheet.create({
  boton: {
    borderColor: colors.secundary200,
    ...dataStyleLogin.comunFlex,
    ...button.data,
  },
});
