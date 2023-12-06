import { View, Text, StatusBar } from "react-native";

import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { comunButton, fondo, loginstyle } from "../../style/loginStyle";
import { button } from "../../style/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { peticionPostPut } from "../../services/getRequest";

const Register = () => {
  const [data, setData] = useState({
    nombre: "",
    password: "",
    correo: "",
    confirmacion: "",
  });

  const requesData = async () => {
    if (data.password === data.confirmacion) {
      const registrar = await peticionPostPut("/user", {
        nombre: data.nombre,
        password: data.password,
        correo: data.correo,
      });
      console.log(registrar);
      registrar.message==="Usuario Creado" ? (router.replace("/"), alert(registrar.message)) : alert(registrar.message);
    } else {
      alert("las contraseñas no considen");
    }
  };

  const redireccionar = (ir) => {
    console.log(ir);
    router.push("/" + ir);
  };
  const [darkmode, setDarkmode] = useState(false);

  const combioStyle = () => {
    setDarkmode(!darkmode);
  };
  const containerStyle = darkmode
    ? loginstyle.containerdark
    : loginstyle.container;
  const tituloData = darkmode ? fondo.titulodark : fondo.titulo;
  const titulodarkdata = darkmode ? fondo.textodarck : fondo.texto;
  const cajatextoData = darkmode ? fondo.cajatextodark : fondo.cajatexto;

  const elementoFondo = darkmode
    ? fondo.backgroundDatadark
    : fondo.backgroundData;

  return (
    <View style={containerStyle}>
      <StatusBar backgroundColor={darkmode ? "black" : "#fff"} />
      <View
        style={{
          width: "100%",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => combioStyle()}
          style={loginstyle.buttonStyle}
        ></TouchableOpacity>
      </View>

      <Text style={{ ...tituloData, fontSize: 40 }}>Skill-Swap</Text>
      <Text style={tituloData}>Registrate</Text>
      <View
        style={{
          height: "60%",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          marginVertical: 50,
        }}
      >
        <TextInput
          style={cajatextoData}
          value={data.nombre}
          onChangeText={(text) => setData((old) => ({ ...old, nombre: text }))}
          placeholder="nombre"
        ></TextInput>
        <TextInput
          style={cajatextoData}
          value={data.correo}
          onChangeText={(text) => setData((old) => ({ ...old, correo: text }))}
          placeholder="Correo"
        ></TextInput>
        <TextInput
          style={cajatextoData}
          value={data.password}
          onChangeText={(text) =>
            setData((old) => ({ ...old, password: text }))
          }
          placeholder="Password"
        ></TextInput>
        <TextInput
          style={cajatextoData}
          value={data.confirmacion}
          onChangeText={(text) =>
            setData((old) => ({ ...old, confirmacion: text }))
          }
          placeholder="Confirmar Password"
        ></TextInput>

        <TouchableOpacity
          onPress={() => requesData()}
          style={comunButton.boton}
        >
          <View style={titulodarkdata}>
            <Text style={{ color: "#fff" }}> Registrar</Text>
            <FontAwesome
              name="sign-in"
              size={22}
              color={darkmode ? "#fff" : "#fff"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => redireccionar("login")}
          style={comunButton.boton}
        >
          <View style={titulodarkdata}>
            <Text style={{ color: "#fff" }}> Volver</Text>
            <FontAwesome
              name="user-plus"
              size={15}
              color={darkmode ? "#fff" : "#fff"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={elementoFondo}>
        <Text style={fondo.bola}></Text>
      </View>
    </View>
  );
};

export default Register;
