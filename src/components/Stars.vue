<template>
  <canvas
    id="stars"
    ref="stars"
    class="z-[-1]"
    style="position: absolute; left: 0; background: black; width: 100%"
  ></canvas>
</template>

<script setup lang="ts">
import renderStars from "@/animations/stars"
import { ref, watchEffect } from "vue"

let stars = ref<HTMLElement | null>(null)
const height = window.innerHeight
const width = window.innerWidth

watchEffect(() => {
  if (stars.value) {
    renderStars(stars.value, height, width)
  }
})
</script>
