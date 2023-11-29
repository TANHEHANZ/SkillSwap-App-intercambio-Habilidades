import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const Login = () => {
  const redireccionar = () => {
    router.replace("/views");
  };
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => redireccionar()}>
        <Text>iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
