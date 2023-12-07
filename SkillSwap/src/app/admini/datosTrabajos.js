import { View, Text, Image, Linking, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import useDatosTrabajosStore from "../../context/trabajoContext";
import { colors, dataStyleLogin } from "../../style/style";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { comunButton, fondo, loginstyle } from "../../style/loginStyle";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import useUserStore from "../../context/userContext";
import { peticionPostPut } from "../../services/getRequest";

const DatosTrabajos = () => {
  const { datosTrabajos } = useDatosTrabajosStore();
  const { user } = useUserStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [comentarData, setComentarData] = useState({
    comentario: "",
    fecha: new Date().toISOString(),
    usuarioId: user.id,
    trabajoId: datosTrabajos.id,
  });

  const [soliciatarData, setSoliciatarData] = useState({
    userId: user.id,
    fecha: new Date().toISOString(),
    detalles: "",
    trabajoId: datosTrabajos.id,
  });

  const handleSend = async () => {
    console.log(comentarData);
    const res = await peticionPostPut("comentarios", comentarData);
    console.log(res);
    if (res) {
      alert(res.message);
      setComentarData({
        comentario: "",
      });
    }
  };
  const handleSendSolicitud = async () => {
    console.log(soliciatarData);
    const res = await peticionPostPut("solicitud", soliciatarData);
    console.log(res);
    if (res) {
      alert(res.message);
      setSoliciatarData({
        detalles: "",
      });
    }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Text style={{ fontWeight: 900, color: colors.secundary }}>
          Descripcion: {datosTrabajos.descripcion}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            source={{ uri: datosTrabajos.imagen }}
            style={{
              width: 150,
              height: 200,
              borderWidth: 1,
              borderColor: "#0005",
            }}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL(datosTrabajos.recurso)}
            style={{
              ...loginstyle.buttonStyle,
              width: 100,
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.succes,
            }}
          >
            <Text style={{ color: "#fff" }}>Ir al recurso</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 900, color: colors.secundary }}>
            Autor: {datosTrabajos.usuerTabajo.nombre}
          </Text>
          <TouchableOpacity
            style={{
              ...loginstyle.buttonStyle,
              width: 130,
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.secundary,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "#fff" }}>Soliciatar ayuda</Text>
          </TouchableOpacity>
        </View>
        {modalVisible ? (
         <View style={{flexDirection:"row", gap:10,alignItems:"center"}}>
          <TextInput
            style={{...fondo.cajatexto,width:220}}
            placeholder="Detalla tu solicitud"
            value={soliciatarData.detalles}
            onChangeText={(text) =>
              setSoliciatarData((old) => ({ ...old, detalles: text }))
            }
          />
          <TouchableOpacity
            style={{ ...comunButton.boton, width: 40 }}
            onPress={() => handleSendSolicitud()}
          >
            <FontAwesome name="paper-plane" size={14} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...comunButton.boton, width: 40 }}
            onPress={() => setModalVisible(false)}
          >
            <FontAwesome name="ban" size={14} color="#fff" />
          </TouchableOpacity>
         </View>
         
        ) : (
          <Text>{""}</Text>
        )}

        <Text style={{ fontWeight: 900, color: colors.secundary }}>
          Contactate: {datosTrabajos.usuerTabajo.correo}
        </Text>
        {datosTrabajos.Comentarios ? (
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Text style={{ fontWeight: 900, color: colors.secundary }}>
              Comentarios:
            </Text>
            <ScrollView
              style={{
                width: "90%",
                borderWidth: 2,
                height: 150,
                padding: 20,
                borderColor: "#0001",
                height: 200,
              }}
            >
              {Object.entries(datosTrabajos.Comentarios).map(
                ([key, value], index) => (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      padding: 8,
                      borderTopWidth: 1,
                    }}
                    key={index}
                  >
                    <Text>
                      <FontAwesome name="paper-plane" size={14} color="#000" />{" "}
                      {value.comentario} fecha:{value.fecha}
                    </Text>
                    <Text>
                      <FontAwesome name="user" size={14} color="#000" />{" "}
                      {value.usuarioComentando.nombre}
                    </Text>
                  </View>
                )
              )}
            </ScrollView>
          </View>
        ) : (
          <Text>No hay Comentarios </Text>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TextInput
            style={fondo.cajatexto}
            placeholder="comentar"
            value={comentarData.comentario}
            onChangeText={(text) =>
              setComentarData((old) => ({ ...old, comentario: text }))
            }
          />
          <TouchableOpacity
            style={{ ...comunButton.boton, width: 40 }}
            onPress={() => handleSend()}
          >
            <FontAwesome name="paper-plane" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DatosTrabajos;
