import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { trabajos } from "../../style/dashStyle";
import useUserStore from "../../context/userContext";
import { peticiongetdelete } from "../../services/getRequest";

const Index = () => {
  const [data, setData] = useState("");
  const [dataTodo, setDataTodo] = useState("");
  const user = useUserStore((state) => state.user);
  console.log(user);
  const userData = user.id;
  const fetchData = async () => {
    try {
      const result = await peticiongetdelete(`trabajos/` + userData);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  const fetchDataTodo = async () => {
    try {
      const result = await peticiongetdelete(`trabajos`);
      setDataTodo(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  console.log(dataTodo);
  useEffect(() => {
    fetchData();
    fetchDataTodo();
  }, []);

  return (
    <View
      style={{ flex: 1, flexDirection: "column", gap: 20, paddingVertical: 30 }}
    >
      <Text style={{ fontSize: 14, padding: 10, fontWeight: 900 }}>
        Mis trabajos
      </Text>

      <ScrollView
        horizontal
        style={{ height: 300, backgroundColor: "#060b4b86" }}
      >
        {Object.entries(data).map(([key, value], index) => (
          <View style={{ ...trabajos.cars, marginHorizontal: 20 }} key={index}>
            <Image
              source={{ uri: value.imagen }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ))}
      </ScrollView>
      <Text style={{ fontSize: 14, padding: 10, fontWeight: 900 }}>
        Trabajos Publicos
      </Text>
      <ScrollView
        horizontal
        style={{ height: 300, backgroundColor: "#060b4b86" }}
      >
        {Object.entries(dataTodo).map(([key, value], index) => (
          <View style={{ ...trabajos.cars, marginHorizontal: 20 }} key={index}>
            <Image
              source={{ uri: value.imagen }}
              style={{ width: "50%", height: "50%" }}
            />

            <Text>Comentarios</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;
