import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import NavBottom from "../../components/navBottom";
import { Slot, router } from "expo-router";
import { colors } from "../../style/style";

const HomeLayautDash = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          backgroundColor: colors.secundary,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Bienvenido</Text>
        <TouchableOpacity onPress={() => router.replace("login")}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 5,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            volver
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      <NavBottom />
    </View>
  );
};

export default HomeLayautDash;
