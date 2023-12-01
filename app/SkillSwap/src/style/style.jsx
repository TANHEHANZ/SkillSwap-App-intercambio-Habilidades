import { StyleSheet } from "react-native";
export const colors = {
  primary: "#fff",
  black:"#091312", 
  secundary: "#127369",
  secundary100: "#4C5958",
  secundary200: "#8AA6A3",
  blue100: "#EBF1FD",
};

export const sharedStyles = StyleSheet.create({
    shadowBox: {
      elevation: 5, 
      shadowColor: 'black', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.3, 
      shadowRadius: 3, 
    },
  });


  export const dataStyleLogin = StyleSheet.create({
    comunFlex:{
        gap:10,
        justifyContent: "center",
        alignItems: "center",
    }
  })

  export const backgraundElement = StyleSheet.create({
    borderRadius: 400,
    width: 300,
    height: 300,
    left: -200,
    position: "absolute",
    borderWidth: 5,
  })


  export const button =StyleSheet.create({
    data:{
        padding:10,
        fontSize:25,
        borderWidth:1,
        borderRadius:100,
        width:150,
    }
  })