// import LoginScreen from "../components/LoginScreen";
// import SignupScreen from "../components/SignupScreen";
// import HomeScreen from "../components/HomeScreen";
import { View, Text } from "react-native";
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
