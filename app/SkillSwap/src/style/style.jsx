import { StyleSheet } from "react-native";
export const colors = {
  primary: "#fff",
  primary100: "#ffffffc0",
  black: "#0D0E1A",
  secundary: "rgb(105,0,235)",
  secundary100: "rgb(80, 3, 173)",
  secundary200: "rgb(50, 1, 109)",
  blue100: "#EBF1FD",
};

export const sharedStyles = StyleSheet.create({
  shadowBox: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export const dataStyleLogin = StyleSheet.create({
  comunFlex: {
    
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const backgraundElement = StyleSheet.create({
  borderRadius: 400,
  width: 300,
  height: 300,
  left: -200,
  bottom: -100,
  position: "absolute",
  borderWidth: 5,
});

export const button = StyleSheet.create({
  data: {
    padding: 10,
    fontSize: 25,
    borderRadius: 100,
    width: 300,
  },
});

export const textoCambio = StyleSheet.create({
  ...dataStyleLogin,


})