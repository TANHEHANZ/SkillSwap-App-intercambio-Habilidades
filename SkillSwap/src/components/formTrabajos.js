import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../style/style";
import { fondo } from "../style/loginStyle";
import { peticionPostPut } from "../services/getRequest";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormTrabajos = ({ fetchData, setEdiatando, ediatando }) => {
  const userData = 1;
  const [trabajos, setTrabajos] = useState({
    imagen: "",
    recurso: "",
    descripcion: "",
    usuarioId: +userData,
  });

  useEffect(() => {
    if (ediatando) {
      setTrabajos({
        id: +ediatando.id || "",
        imagen: ediatando.imagen || "",
        recurso: ediatando.recurso || "",
        descripcion: ediatando.descripcion || "",
        usuarioId: +ediatando.usuarioId || userData,
      });
    } else {
      setTrabajos({
        imagen: "",
        recurso: "",
        descripcion: "",
        usuarioId: +userData,
      });
    }
  }, [ediatando]);

  const handleSend = async () => {
    const res = await peticionPostPut("trabajos", {
      imagen: trabajos.imagen,
      recurso: trabajos.recurso,
      descripcion: trabajos.descripcion,
      usuarioId: trabajos.usuarioId,
    });
    console.log(res);
    if (res) {
      alert(res.message);
      await fetchData();
      setTrabajos({
        imagen: "",
        recurso: "",
        descripcion: "",
      });
    }
  };
  const handleupdate = async () => {
    console.log("data", trabajos);
    const res = await peticionPostPut(
      "trabajos/" + trabajos.id,
      {
        imagen: trabajos.imagen,
        recurso: trabajos.recurso,
        descripcion: trabajos.descripcion,
      },
      "PUT"
    );
    console.log(res);
    if (res) {
      alert(res.message);
      await fetchData();
      setTrabajos({
        imagen: "",
        recurso: "",
        descripcion: "",
      });
    }
  };
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 20,
        height: 320,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secundary300,
      }}
    >
      <TextInput
        value={trabajos.imagen}
        onChangeText={(text) =>
          setTrabajos((old) => ({ ...old, imagen: text }))
        }
        style={fondo.cajatexto}
        placeholder="ingrese la url de la imagen "
      ></TextInput>
      <TextInput
        style={fondo.cajatexto}
        placeholder="recurso"
        value={trabajos.recurso}
        onChangeText={(text) =>
          setTrabajos((old) => ({ ...old, recurso: text }))
        }
      ></TextInput>
      <TextInput
        style={fondo.cajatexto}
        placeholder="descripcion"
        value={trabajos.descripcion}
        onChangeText={(text) =>
          setTrabajos((old) => ({ ...old, descripcion: text }))
        }
      ></TextInput>

      <TouchableOpacity
        style={{
          backgroundColor: colors.secundary,
          width: 200,
          height: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
        onPress={() => (ediatando ? handleupdate() : handleSend())}
      >
        <Text style={{ color: "#fff" }}>
          {ediatando ? "Actualizar" : "Agregar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormTrabajos;
