import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../style/style";

const NavBottom = () => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: colors.secundary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: colors.secundary,
          width: 80,
          height: 80,
          borderRadius: 100,
          position: "absolute",
          top: -25,
          zIndex: 10,
        }}
      >
        
      </TouchableOpacity>
      <View
        style={{
          width: 85,
          height: 85,
          borderRadius: 100,
          backgroundColor: colors.primary,
          position: "absolute",
          top: -28,
        }}
      >
        <Text></Text>
      </View>
    </View>
  );
};

export default NavBottom;
