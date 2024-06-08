<template>
  <nav class="flex justify-between items-center">
    <span>
      <!-- <img src="/my-logo.webp" class="w-10" alt="My logo" /> -->
    </span>
    <span class="navbar-items text-white text-sm font-['Poppins'] flex items-center gap-x-20">
      <a href="#about-me-section"> <h4 class="cursor-pointer">حول</h4></a>
      <a href="#projects-section"> <h4 class="cursor-pointer">مشاريعي</h4></a>
      <a href="#contact-me-section"><h4 class="cursor-pointer">تواصل</h4></a>
      <!-- <a href="/Resume.pdf" target="_blank"> <h4 class="cursor-pointer">Resume</h4></a> -->
      <div
        @click="toggleColoredSite"
        :class="
          !store.coloredSite
            ? 'color-changer bg-gradient-to-r from-violet-500 to-fuchsia-500 '
            : 'bg-gradient-to-tr  from-white to-black'
        "
        class="h-7 w-7 cursor-pointer rounded-full transition-all 1s"
      ></div>
    </span>
  </nav>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()

function toggleColoredSite() {
  store.coloredSite = !store.coloredSite
}
</script>

<style scoped>
@import url("../assets/styles/navbar.css");
</style>
