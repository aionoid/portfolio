<template>
  <section id="about-me-section" class="px-[12%] py-10 text-white mt-32 border rounded-md skills-wrapper relative">
    <!-- <section class="flex flex-wrap justify-between mt-20  "> -->
    <section class="flex  flex-col justify-between mt-20  ">
      <!-- Left section -->
      <section class="basis-2/3 text-center mx-auto">
        <canvas height="300" width="300" ref="modelCanvas" v-if="false"></canvas>
        <h3 class="text-5xl">نبذة عني</h3>
        <h5 class="text-center mx-auto  w-auto max-w-[30rem]  leading-7 text-md font-light mt-7">
          بسم الله الرحمن الرحيم والصلاة والسلام على أشرف الأنبياء و المرسلين
          <br />
          أنا إحصائي بدوام كامل. أنا
          مهتم بتطوير الواجهة الأمامية وتصميم UX/UI. لدي خبرة في تطوير البرمجيات من خلال البرامج المختلفة التي قمت بها.
          لدي خبرة في HTML ,CSS ,Javascript ,Vue.js,Flutter, Qt, C++, QML، لدي أيضًا خبرة في الواجهة الخلفية
          تقنيات مثل Python ,C++ ,PHP ,Go ,Dart ,MySQL ,Postgresql ,OpenSearch ,Elastic-search Mongo DB.
        </h5>
        <br /><br />
        <!-- <h3 class="text-3xl">TL;DR</h3> -->
        <h3 class="text-3xl">المختصر</h3>
        <!-- <ul class="list-disc pl-5 leading-8 font-['Poppins'] text-md font-light mt-4"> -->
        <ul class="list-disc pl-5 leading-8  text-md font-light mt-4">
          <li>الاسم: يعقوب بلعورة</li>
          <li>درجة التعليم: ماستر</li>
          <li>الاهتمامات : تطوير التطبيقات وتصميم واجهة المستخدم وإدارة الخوادم والأمن</li>
          <li>الهوايات: الرياضة، القراءة</li>
          <!-- <li>Favorite Language: Javascript</li> -->
        </ul>
        <!-- //TODO: add Resume.pdf -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <a href="/portfolio/cv_en.pdf" download>
            <button
              class="hover:bg-white border hover:text-black  text-[13px] px-6 py-3 font-medium mt-10 rounded-full bg-black text-white transition-colors">
              تحميل السيرة الذاتية بالانجليزية
            </button>
          </a>
          <!-- <span class="mx-5"></span> -->
          <a href="/portfolio/cv_ar.pdf" download>
            <button
              class="hover:bg-white border hover:text-black  text-[13px] px-6 py-3 font-medium mt-10 rounded-full bg-black text-white transition-colors">
              تحميل السيرة الذاتية بالعربية
            </button>
          </a>
        </div>
      </section>
      <!-- //TODO: add languages and framework logos here-->
      <!-- Right section -->
      <section class="basis-1/3 text-center mx-auto justify-center">
        <h3 class="text-5xl my-10">المهارات</h3>
        <h3 class="text-2xl mt-7">الواجهة</h3>
        <br />
        <article class="flex flex-wrap  gap-10 justify-center skills">
          <SkillsBox v-for="skill in frontEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">الواجهة الخلفية</h3>
        <br />
        <article class="flex flex-wrap items-start gap-10 justify-center skills">
          <SkillsBox v-for="skill in backEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">اخرى</h3>
        <br />
        <article class="flex flex-wrap items-start gap-10  justify-center skills">
          <SkillsBox v-for="skill in deploymentSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>
      </section>
    </section>
    <br /><br />
    <Projects />
  </section>
</template>

<script lang="ts" setup>
import Projects from "./Projects.vue"
import SkillsBox from "./SkillsBox.vue"
import { ref, watchEffect } from "vue"
import renderModel from "@/animations/helmet"
let modelCanvas = ref<null | HTMLElement>()

watchEffect(() => {
  if (modelCanvas.value) {
    renderModel(modelCanvas.value, 300, 300)
  }
})

let frontEndSkills = [
  {
    name: "HTML",
    logoSrc: "/portfolio/html-logo.png"
  },
  {
    name: "CSS",
    logoSrc: "/portfolio/css-logo.png"
  },
  {
    name: "Javascript",
    logoSrc: "/portfolio/javascript-logo.png"
  },
  {
    name: "Typescript",
    logoSrc: "/portfolio/typescript-logo.png"
  },
  {
    name: "Vue.js",
    logoSrc: "/portfolio/vue-logo.png"
  },
  {
    name: "Flutter",
    logoSrc: "/portfolio/flutter-logo.svg"
  },
  {
    name: "Qt",
    logoSrc: "/portfolio/qt-1.svg"
  },
  {
    name: "Tailwind",
    logoSrc: "/portfolio/tailwind-logo.png"
  }
]

let backEndSkills = [
  {
    name: "C++",
    logoSrc: "/portfolio/c.svg"
  },
  {
    name: "Mongo DB",
    logoSrc: "/portfolio/mongo-db-logo.png"
  },
  {
    name: "Firebase",
    logoSrc: "/portfolio/firebase-logo.png"
  },
  {
    name: "MySQL",
    logoSrc: "/portfolio/mysql-logo.png"
  },
  {
    name: "Postgresql",
    logoSrc: "/portfolio/postgresql.svg"
  },
  {
    name: "ElasticSearch",
    logoSrc: "/portfolio/elasticsearch.svg"
  },
  {
    name: "Dart",
    logoSrc: "/portfolio/dart.svg"
  },
  {
    name: "Go",
    logoSrc: "/portfolio/golang-1.svg"
  },
  {
    name: "Laravel",
    logoSrc: "/portfolio/laravel-2.svg"
  },
  {
    name: "Python",
    logoSrc: "/portfolio/python-5.svg"
  },
]

let deploymentSkills = [
  {
    name: "BuildRoot",
    logoSrc: "/portfolio/Buildroot-logo.png"
  },
  {
    name: "LFS Linux",
    logoSrc: "/portfolio/lfs-logo.png"
  },
  {
    name: "XCP-ng",
    logoSrc: "/portfolio/xcp-ng.png"
  },
  {
    name: "Github",
    logoSrc: "/portfolio/github-logo.png"
  },
  {
    name: "Bash",
    logoSrc: "/portfolio/bash-2.svg"
  },
  {
    name: "Docker",
    logoSrc: "/portfolio/docker.svg"
  },
  {
    name: "Git",
    logoSrc: "/portfolio/git-bash.svg"
  },
  {
    name: "Protainer",
    logoSrc: "/portfolio/portainer.svg"
  },
  {
    name: "Proxmox",
    logoSrc: "/portfolio/proxmox.svg"
  },
  {
    name: "VirtualBox",
    logoSrc: "/portfolio/virtualbox.svg"
  },
  {
    name: "VMM",
    logoSrc: "/portfolio/vmm.png"
  },
]
</script>

<style scoped>
.skills-wrapper {
  border-radius: 2px;
  background-color: black;
  background-clip: padding-box;
  /* !importanté */
  border: solid 2px transparent;
  /* !importanté */
}

.skills-wrapper::before {
  border-radius: 2px;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  /* !importanté */
  background: linear-gradient(rgb(176, 176, 176), black);
}
</style>
