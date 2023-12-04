import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../style/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { buttonCrud } from "../style/dashStyle";
import { router } from "expo-router";

const NavBottom = () => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: colors.secundary200,
        flexDirection: "row",
        justifyContent: "center",
        position: "relative", 
        gap: 30,
      }}
    >
      <View style={buttonCrud.fondoButtom}>
        <TouchableOpacity
          style={buttonCrud.butttonStyle}
          onPress={() => router.replace("/admini")}
        >
          <FontAwesome name="home" size={15} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={buttonCrud.fondoButtom}>
        <TouchableOpacity
          style={buttonCrud.butttonStyle}
          onPress={() => router.push("/admini/solicitud")}
        >
          <FontAwesome name="paper-plane" size={15} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={buttonCrud.fondoButtom}>
        <TouchableOpacity
          style={buttonCrud.butttonStyle}
          onPress={() => router.push("/admini/trabajos")}
        >
          <FontAwesome name="list" size={15} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBottom;
