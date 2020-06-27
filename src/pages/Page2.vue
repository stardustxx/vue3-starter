<template>
  <div id="page-2">
    This is a page that has Composition API

    <div class="counter">
      <button @click="incrementCounter">Increment</button>

      Composition Counter: {{counter}}
    </div>

    <VueImage :src="godcode" alt="Code Meme" />
    <vue-title />
  </div>
</template>

<script>
import useCounter from "../compositions/useCounter";
import VueImage from '../components/VueImage.vue';
import godcode from '../assets/godcode.jpg';

export default {
  name: "Page2",
  components: {
    VueImage,
  },
  setup() {
    const { counter, incrementCounter } = useCounter();

    return { counter, incrementCounter, godcode };
  },
}
</script>

<style lang="scss" scoped>

#page-2 {
  .counter {
    margin-bottom: 20px;
  }
}

</style>