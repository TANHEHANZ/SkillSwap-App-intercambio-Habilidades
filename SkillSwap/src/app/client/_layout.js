import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../style/style";
import { Slot, router } from "expo-router";

const Layout = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      <View
        style={{
          height: "100%",
          width: 100,
          backgroundColor: colors.secundary,
          alignItems: "center",
          justifyContent: "center",
          gap: 100,
        }}
      >
        <Text style={{ color: "#fff" }}>Todos los trabajos</Text>
        <TouchableOpacity onPress={() => router.replace("login")}>
          <Text style={{ color: "#fff" }}>volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Layout;
