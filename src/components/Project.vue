<template>
  <article class="flex gap-20 items-start project">
    <article class="h-auto w-[38rem]">
    <Carousel id="gallery" :autoplay="2000" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
      <Slide v-for="slide in props.project.totalCount" :key="slide">
        <div class="carousel__item h-30">
          <!-- {{ slide }} -->
        <img
            :src="getImg(props.project.imageSrc + slide + props.project.typeExt)"
          alt="Project image"
          loading="lazy"
          class="hover:grayscale-0 duration-300 rounded-lg h-200 w-[600px] object-contain transition"
          :class="!store.coloredSite ? 'grayscale' : 'grayscale-0'"
        />
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="slide in props.project.totalCount" :key="slide">
        <div class="carousel__item px-5 py-2" @click="slideTo(slide - 1)">
        <!-- <div class="carousel__item px-5 py-2" @click="fakefunc()"> -->
        <img
            :src="getImg(props.project.imageSrc + slide + props.project.typeExt)"
          alt="Project image"
          loading="lazy"
          class="hover:grayscale-0 duration-300 rounded-lg h-auto w-[600px] object-contain transition"
          :class="!store.coloredSite ? 'grayscale' : 'grayscale-0'"
        />
        </div>
      </Slide>
    </Carousel>

    </article>
    <article class="text-white h-auto">
      <h3 class="text-3xl">{{ props.project.name }}</h3>
      <h4 class="mt-4 w-auto max-w-[500px] text-[15px] font-light leading-7">
        {{ props.project.description }}
      </h4>
      <br />
      <h4 class="font-medium">الادوات المستخدمة</h4>
      <div class="flex w-auto max-w-[500px] tools flex-wrap mt-8 gap-y-5">
        <div
          class="border flex items-center w-auto justify-center h-10 mr-5 text-white px-6 py-2 rounded-full font-['Poppins'] text-[13px]"
          v-for="tool in props.project.toolsUsed"
        >
          {{ tool }}
        </div>
      </div>
    </article>
  </article>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import { defineComponent } from 'vue'

defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
    currentSlide: 0,
    }
  },
  methods: {
    slideTo(val:number ) {
      this.currentSlide = val
      console.log(val)
    },
  },
});

var currentSlide = 1

function slideTo(val:number ) {
      currentSlide = val
      console.log(currentSlide)
}

type Project = {
  name: string
  imageSrc: string
  typeExt: string
  totalCount: number
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
}

const store = useMainStore()
const props = defineProps<{
  index: number
  project: Project
  projectsLength: number
}>()

function getImg(source: string): string {
  return new URL(source, import.meta.url).href
}
</script>

<style scoped>
.colored-button-border {
  background-clip: padding-box;
  background: none;
  border: solid 2px black;
  color: white;
}

.colored-button-border::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  animation: ColorRotate 25s linear infinite;
  background: linear-gradient(to right, rgb(0, 81, 255), rgb(120, 56, 162));
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
