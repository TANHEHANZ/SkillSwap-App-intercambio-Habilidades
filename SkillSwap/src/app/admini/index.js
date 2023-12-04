import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { trabajos } from "../../style/dashStyle";
import useUserStore from "../../context/userContext";
import { peticiongetdelete } from "../../services/getRequest";

const Index = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const result = await peticiongetdelete(`trabajos/` + userData);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return (
    <View
      style={{ flex: 1, flexDirection: "column", gap: 20, paddingVertical: 30 }}
    >
      <Text style={{ fontSize: 14, padding: 10, fontWeight: 600 }}>
        Mis trabajos
      </Text>
      <ScrollView horizontal style={{ height: 200, backgroundColor: "#0002" }}>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
      </ScrollView>
      <Text style={{ fontSize: 14, padding: 10, fontWeight: 600 }}>
        Mis habilidades
      </Text>

      <ScrollView horizontal style={{ height: 200, backgroundColor: "#0002" }}>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
      </ScrollView>

      <Text style={{ fontSize: 14, padding: 10, fontWeight: 600 }}>
        Mis Comentarios
      </Text>

      <ScrollView horizontal style={{ height: 200, backgroundColor: "#0002" }}>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
        <View style={trabajos.cars}></View>
      </ScrollView>
    </View>
  );
};

export default Index;
