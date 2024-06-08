<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h3 class="text-xl">{{ props.name }}</h3>
    <img
      :src="getImg(props.logoSrc)"
      alt="Logo image"
      loading="lazy"
      class="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
      :class="store.coloredSite ? 'grayscale-0' : 'grayscale '"
    />
  </div>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()
const props = defineProps<{
  name: string
  logoSrc: string
}>()

function getImg(source: string): string {
  return new URL(source, import.meta.url).href
}
</script>
