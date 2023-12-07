import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useUserStore from "../../context/userContext";
import { peticiongetdelete } from "../../services/getRequest";
import { colors } from "../../style/style";
import { TouchableOpacity } from "react-native-gesture-handler";

const solicitud = () => {
  const [data, setData] = useState([]);
  const [dataSoli, setdataSoli] = useState([]);
  const user = useUserStore((state) => state.user);
  const userData = user.id;
  const fetchData = async () => {
    try {
      const result = await peticiongetdelete(`solicitud/` + userData);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const fetchDataMYSolicitudes = async () => {
    try {
      const result = await peticiongetdelete(`trabajosSolicitud/` + userData);
      setdataSoli(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  console.log("desde soli", dataSoli);

  useEffect(() => {
    fetchData();
    fetchDataMYSolicitudes();
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column", gap: 20 }}>
      <View style={{ padding: 30 }}>
        <Text style={{ fontWeight: 900, color: colors.secundary }}>
          Solicitudes que realizaste
        </Text>
        {data.map((item, index) => (
          <View key={index} style={{ borderTopWidth: 1, borderBottomWidth: 1 }}>
            <Text>Detalle de solicitud: {item.detalles}</Text>
            <Text>Usuario solicitado: {item.solicitudUser.nombre}</Text>
            <Text>
              Correo del usuario solicitado: {item.solicitudUser.correo}
            </Text>
          </View>
        ))}
      </View>

      <Text style={{ color: colors.secundary, fontWeight: 900 ,paddingHorizontal:30}}>
        Mis solicitudes{" "}
      </Text>
      <ScrollView
        horizontal
        style={{
          backgroundColor: colors.secundary200,
          width: "100%",
          height: 300,
        }}
      >
        {dataSoli.map((item, index) => (
          <View
            key={index}
            style={{
              width: 350,
              backgroundColor: colors.primary100,
              margin: 10,
              height: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 5,
                backgroundColor: "#fff",
                padding: 10,
              }}
            >
              <Text style={{ color: colors.secundary, fontWeight: 900 }}>
                Tu trabajo: {item.descripcion}
              </Text>
              <Text style={{ color: colors.succes }}>
                estado: {item.estado}
              </Text>
            </View>
            {item.Solicitud.map((soli, index) => (
              <ScrollView vertical key={index} >
               <View style={{ padding: 10 ,height:120,}}>
               <Text>Detalle de solicitud : {soli.detalles}</Text>
                <Text>fecha solicitud : {soli.fecha}</Text>
                <Text>Usuario solicitante : {soli.solicitudUser.nombre}</Text>
                <Text>
                  Usuario solicitante correo : {soli.solicitudUser.correo}
                </Text>
               </View>
              </ScrollView>
            ))}
          </View>
        ))}
      </ScrollView>
      <Text style={{ color: colors.secundary, fontWeight: 900, height: 5 }}>
        {" "}
      </Text>
    </View>
  );
};

export default solicitud;
