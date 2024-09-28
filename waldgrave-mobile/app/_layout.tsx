import React from 'react';
import { Stack } from 'expo-router';
import globalStyles from '../styles/global';

export default function RootLayout() {
  return (
    <Stack name="waaaaaa" screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center',
            width: '100%',
            justifyContent: 'center',
          }
        }}
      />
      <Stack.Screen
        name="createPost"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
      <Stack.Screen
        name="friends"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </Stack>
  );
}
