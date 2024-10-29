import React from 'react';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="sign-up" options={{ headerTitle: 'Sign up' }} />
      <Stack.Screen name="app" options={{ headerTitle: 'Todo' }} />
    </Stack>
  );
}
