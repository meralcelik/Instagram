import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import { View, Text } from "react-native";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4_vMXyZflf7shVhJJKx61taTKpl6oT4M",
  authDomain: "instagram-dev-338ac.firebaseapp.com",
  projectId: "instagram-dev-338ac",
  storageBucket: "instagram-dev-338ac.appspot.com",
  messagingSenderId: "348952660612",
  appId: "1:348952660612:web:42e526da923c530c5190d1",
  measurementId: "G-BJKQPLXLRL",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
