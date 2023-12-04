import { View, Text, ScrollView } from "react-native";
import React from "react";

const solicitud = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", gap: 20, paddingVertical: 30 }}
    >
      <Text>Solicitudes que realizaste </Text>
      <View>
        <Text>fecha</Text>
        <Text>detalles</Text>
        <Text>comentarios</Text>
      </View>
      <Text>Mis solicitudes </Text>
      <ScrollView
        style={{
          backgroundColor: "#0005",
          width: 200,
          height: 400,
        }}
      >
        <Text>fecha</Text>
        <Text>detalles</Text>
        <Text>comentarios</Text>
      </ScrollView>
    </View>
  );
};

export default solicitud;
