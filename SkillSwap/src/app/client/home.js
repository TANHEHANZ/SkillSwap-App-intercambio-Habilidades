import { View, Text, Image, FlatList, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { peticiongetdelete } from "../../services/getRequest";
import { fondo } from "../../style/loginStyle";
import { colors } from "../../style/style";

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
  useEffect( ()  => {
    fetchData();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        style={{
          flexDirection: "row",
          width: 400,
          flexWrap: "wrap",
        }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            {item.estado === "true" ? (
              <View
                style={{
                  width: 300,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.imagen }}
                  style={{ width: 100, height: 150 }}
                />
                <View style={{ flexDirection: "column", gap: 10 }}>
                  {item.usuerTabajo && (
                    <Text style={{ fontWeight: 900, color: colors.secundary }}>
                      {item.usuerTabajo.nombre}
                    </Text>
                  )}
                  <Text style={{ width: 200 }}>{item.descripcion}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Linking   .openURL(item.recurso)}
                  style={{
                    ...fondo.cajatexto,
                    width: 100,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text>Ver Recurso</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </>
        )}
      />
    </View>
  );
};

export default Home;
