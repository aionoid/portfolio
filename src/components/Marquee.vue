<template>
  <div
    class="marquee-text mt-32 flex whitespace-nowrap items-center justify-center w-max gap-10 overflow-hidden"
  >
    <h3
      :class="store.coloredSite ? 'colored-text' : ''"
      class="outlined-border bg-clip-text overflow-hidden whitespace-nowrap text-black text-8xl"
    >
      مبرمج تطبيقات 
      <span
        class="h-5 w-10 top-[-20px] inline-block rounded-full bg-black border border-white relative"
      ></span>
      احصائي
    </h3>
    <!-- <h3
      :class="store.coloredSite ? 'colored-text' : ''"
      class="text-black text-8xl w-[2415px] outlined-border"
    >
      Full-Stack Developer
    </h3> -->
  </div>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()
</script>

<style scoped>
.marquee-text {
  position: relative;
  left: -45px;
  max-width: 100vw;
}

.outlined-border {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.colored-text {
  /* font-size: 96px; */
  animation: ColorRotate 25s linear infinite;
  background: -webkit-linear-gradient(45deg, rgb(0, 81, 255), rgb(120, 56, 162));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}
@keyframes ColorRotate {
  0% {
    filter: hue-rotate(0deg);
  }

  70% {
    filter: hue-rotate(360deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}
</style>
