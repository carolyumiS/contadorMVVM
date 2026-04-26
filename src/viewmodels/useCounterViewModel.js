import { useState } from "react";

// useCounterViewModel.ts — ViewModel como Custom Hook
// Note: não há nenhum import de 'react-native' aqui.
// Este hook poderia ser usado numa web app React sem alterar uma linha.

export function useCounterViewModel() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  const isZero = count === 0;

  return { count, increment, decrement, reset, isZero }; // expõe estado observável + comandos
}