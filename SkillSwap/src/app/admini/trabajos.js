import { View, Text, TextInput, FlatList, Image, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { fondo } from "../../style/loginStyle";
import { Picker } from "@react-native-picker/picker";
import { peticiongetdelete } from "../../services/getRequest";
import { colors } from "../../style/style";
import { TouchableOpacity } from "react-native-gesture-handler";
import FormTrabajos from "../../components/formTrabajos";
import useUserStore from "../../context/userContext";

const trabajos = () => {
  const [data, setData] = useState("");
  const [ediatando, setEdiatando] = useState("");

  const user = useUserStore((state) => state.user);
  const userData = user.id;
  const fetchData = async () => {
    try {
      const result = await peticiongetdelete(`trabajos/` + userData);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const result = await peticiongetdelete(`trabajos/` + id, "DELETE");
      if (result && result.message === "trabajo eiminado") {
        alert(result.message);
        await fetchData();
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(ediatando);
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, width: "100%" }}>
      <Text style={{ padding: 10, fontWeight: 900 }}>Mis trabajos </Text>
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
          <View
            style={{
              width: 300,
              flexDirection: "column-reverse",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => Linking.openURL(item.recurso)}
              >
                <Image
                  source={{ uri: item.imagen }}
                  style={{ width: 140, height: 200 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column", gap: 10 }}>
                <Text>acciones</Text>

                <TouchableOpacity
                  onPress={() => deleteData(item.id)}
                  style={{
                    ...fondo.cajatexto,
                    width: 100,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...fondo.cajatexto,
                    width: 100,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  onPress={() => setEdiatando(item)}
                >
                  <Text>editar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{ color: colors.secundary, fontWeight: 900, margin: 20 }}
            >
              Descripcion: {item.descripcion}
            </Text>
          </View>
        )}
      />

      <FormTrabajos
        fetchData={fetchData}
        setEdiatando={setEdiatando}
        ediatando={ediatando}
      />
    </View>
  );
};

export default trabajos;
