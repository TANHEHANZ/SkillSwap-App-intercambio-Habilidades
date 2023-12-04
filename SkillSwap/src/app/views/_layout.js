import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import NavBottom from "../../components/navBottom";
import { Slot, router } from "expo-router";

const HomeLayaut = () => {
  return (
    <View  style={{flex:1 }}>
      <Text>HomeLayaut</Text>
      <TouchableOpacity onPress={() => router.replace("login")}>
        <Text>volver</Text>
      </TouchableOpacity>
      <View  style={{flex:1 }}>
        <Slot />
      </View>
      <NavBottom />
    </View>
  );
};

export default HomeLayaut;

