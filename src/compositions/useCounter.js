import { ref } from "vue";

export default function useCounter() {
  const counter = ref(0);

  function incrementCounter() {
    counter.value++;
  }

  return {
    counter,
    incrementCounter,
  };
}