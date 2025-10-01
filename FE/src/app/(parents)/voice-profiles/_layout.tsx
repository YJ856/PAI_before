import { Stack } from "expo-router";

export default function VoiceLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />      
      <Stack.Screen name="create" />
    </Stack>
  );
}
