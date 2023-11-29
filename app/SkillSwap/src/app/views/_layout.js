import { View, Text } from "react-native";
import React from "react";
import NavBottom from "../../components/navBottom";
import { Slot } from "expo-router";

const HomeLayaut = () => {
  return (
    <View>
      <Text>HomeLayaut</Text>
      <View>
        <Slot />
      </View>
      <NavBottom />
    </View>
  );
};

export default HomeLayaut;
