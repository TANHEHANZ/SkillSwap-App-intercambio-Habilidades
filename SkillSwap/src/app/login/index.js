import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { comunButton, fondo, loginstyle } from "../../style/loginStyle";
import { button } from "../../style/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import useUserStore from "../../context/userContext";
import { peticionPostPut } from "../../services/getRequest";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    correo: "",
    password: "",
  });

  const updateUser = useUserStore((state) => state.updateUser);

  const handleSend = async () => {
    const res = await peticionPostPut("login", {
      correo: dataLogin.correo,
      password: dataLogin.password,
    });
    res && res.message === "Inicio de sesion correcto"
      ? (updateUser(res.data),router.replace("/admini"), alert("Bienvenido"))
      : alert(res.message);
  };
  const redireccionar = (ir) => {
    console.log(ir);
    router.replace("/" + ir);
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
      <Text style={tituloData}>Login</Text>
      <View
        style={{
          height: "50%",
          flexDirection: "column",
          gap: 30,
          alignItems: "center",
          marginVertical: 50,
        }}
      >
        <TextInput
          style={cajatextoData}
          value={dataLogin.correo}
          onChangeText={(text) =>
            setDataLogin((old) => ({ ...old, correo: text }))
          }
        ></TextInput>
        <TextInput
          style={cajatextoData}
          value={dataLogin.password}
          onChangeText={(text) =>
            setDataLogin((old) => ({ ...old, password: text }))
          }
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          onPress={() => handleSend()}
          style={comunButton.boton}
        >
          <View style={titulodarkdata}>
            <Text style={{ color: "#fff" }}> Iniciar</Text>
            <FontAwesome
              name="sign-in"
              size={22}
              color={darkmode ? "#fff" : "#fff"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => redireccionar("login/register")}
          style={comunButton.boton}
        >
          <View style={titulodarkdata}>
            <Text style={{ color: "#fff" }}> Registrate</Text>
            <FontAwesome
              name="user-plus"
              size={15}
              color={darkmode ? "#fff" : "#fff"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => redireccionar("client/home")}
          style={comunButton.boton}
        >
          <View style={titulodarkdata}>
            <Text style={{ color: "#fff" }}> Ver Sin Registrarse</Text>
            <FontAwesome
              name="globe"
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

export default Login;
