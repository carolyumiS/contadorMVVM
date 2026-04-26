// CounterScreen_MVVM.tsx — View declarativa: zero useState, zero lógica
import { Button, StyleSheet, Text, View } from "react-native";
import { useCounterViewModel } from "../viewmodels/useCounterViewModel";

export default function CounterScreen() {
  const { count, increment, decrement, reset, isZero } = useCounterViewModel(); // bind declarativo

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>

      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} disabled={isZero} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
    color: "blue",
  },
});