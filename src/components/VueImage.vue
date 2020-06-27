<template>
  <div class="vue-image">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: "VueImage",
  props: {
    src: String,
    alt: String,
  },
}
</script>