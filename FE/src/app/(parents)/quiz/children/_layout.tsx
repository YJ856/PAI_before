import { Stack } from "expo-router";

export default function ChildrenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}