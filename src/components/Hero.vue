<template>
  <Stars />
  <section class="mt-12 flex gap-56 items-center justify-center text-white">
    <img
      src="https://duckduckgo.com/i/b3480595911fb85f.png"
      ref="chessImage"
      alt="Chess image"
      class="w-40 chess-image transition-transform ease-linear duration-75"
    />
    <article class="hero-article">
      <h3 class="text-7xl">بلعورة يعقوب</h3>
      <h5 class="text-sm font-['Poppins'] mt-7 w-[400px] leading-7">
مرحبًا، أنا يعقوب أعمل كمهندس إحصاء، وأقوم بتطوير تطبيقات للجوال والويب وسطح المكتب وأنا من محبي Linux منذ عام 2005
      </h5>

      <!-- //TODO: add youtube -->
<!-- <iframe width="939" height="528" src="https://www.youtube.com/embed/HFHrrECh6Bs" title="اليوم الثاني مقتطفات الورشة التقنية كاملة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
      <a href="#projects-section">
        <button
          :class="
            !store.coloredSite
              ? 'border-white'
              : 'relative colored-button-border hover:text-white hover'
          "
          class="hover:bg-white border hover:text-black  text-[13px] px-6 py-3 font-medium mt-7 rounded-full bg-black text-white transition-colors"
        >
           مشاريعي السابقة
        </button>
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Stars from "./Stars.vue"
import useMainStore from "@/stores/main"

const store = useMainStore()

const chessImage = ref<HTMLElement | null>(null)
window.addEventListener("mousemove", (e) => {
  let normalizedX = e.pageX / window.innerWidth
  let normalizedY = e.pageY / window.innerHeight
  if (chessImage.value) {
    chessImage.value.style.transform = `translate3d(${normalizedX * 30}px, ${
      normalizedY * 30
    }px, 0px)`
  }
})
</script>
