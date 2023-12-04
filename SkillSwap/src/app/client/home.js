import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { peticiongetdelete } from "../../services/getRequest";

const Home = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const result = await peticiongetdelete(`trabajos`);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        style={{
          flexDirection: "row",
          gap: 5,
          width: 400,
          flexWrap: "wrap",
          padding: 20,
        }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.imagen }}
              style={{ width: 140, height: 200 }}
            />
            <Text>{item.usuarioId}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
