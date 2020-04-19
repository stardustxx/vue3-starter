<template>
  <div id="page-2">
    This is a page that has Composition API

    <div>
      <button @click="incrementCounter">Increment</button>

      Composition Counter: {{counter}}
    </div>
  </div>
</template>

<script>
import useCounter from "../compositions/useCounter";

export default {
  name: "Page2",
  setup() {
    const { counter, incrementCounter } = useCounter();

    return { counter, incrementCounter };
  }
}
</script>

<style lang="scss">

</style>