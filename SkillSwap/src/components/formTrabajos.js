import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../style/style";
import { fondo } from "../style/loginStyle";
import { peticionPostPut } from "../services/getRequest";
import { TouchableOpacity } from "react-native-gesture-handler";
import useUserStore from "../context/userContext";
import { CheckBox } from "react-native-elements";
const FormTrabajos = ({ fetchData, setEdiatando, ediatando }) => {
  const user = useUserStore((state) => state.user);
  const userData = user.id;

  console.log(userData);
  const [trabajos, setTrabajos] = useState({
    imagen: "",
    recurso: "",
    descripcion: "",
    estado: "true",
  });

  useEffect(() => {
    if (ediatando) {
      setTrabajos({
        id: +ediatando.id || "",
        imagen: ediatando.imagen || "",
        recurso: ediatando.recurso || "",
        descripcion: ediatando.descripcion || "",
        estado: ediatando.estado || "",
        usuarioId: +ediatando.usuarioId || +userData,
      });
    } else {
      setTrabajos({
        imagen: "",
        recurso: "",
        estado: "",
        descripcion: "",
        usuarioId: +userData,
      });
    }
  }, [ediatando]);

  const handleSend = async () => {
    console.log(trabajos);
    const res = await peticionPostPut("trabajos", {
      imagen: trabajos.imagen,
      recurso: trabajos.recurso,
      descripcion: trabajos.descripcion,
      usuarioId: +userData,
      estado: trabajos.estado || "false",
    });
    console.log(res);
    if (res) {
      alert(res.message);
      await fetchData();
      setTrabajos({
        imagen: "",
        recurso: "",
        estado: "",
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
        estado: trabajos.estado,
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
        estado: "",
      });
    }
  };
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 20,
        height: 320,
        padding:20,
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
      <View
        style={{
          width: "13%",
          backgroundColor: colors.secundary100,
          color: "#fff",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          position: "absolute",
          top:0,
          borderBottomEndRadius:10,
        }}
      >
        <Text style={{ color: "#fff" }}>Visible</Text>
        <CheckBox
          checked={trabajos.estado === "true"}
          onPress={() =>
            setTrabajos((old) => ({
              ...old,
              estado: old.estado === "true" ? "false" : "true",
            }))
          }
        />
      </View>

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
