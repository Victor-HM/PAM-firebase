import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cadastrar from "../paginas/cadastro";
import StackRoutes from "./stackRoutes";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1d0b3b" },
        tabBarActiveTintColor: "#f9943b",
      }}
    >
      <Tab.Screen
        name="homeStack"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="cadastrar"
        component={Cadastrar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="newsletter" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
