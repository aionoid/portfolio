<template>
  <section class="mt-20 text-white" id="projects-section">
    <h2 class="text-5xl">المشاريع</h2>
    <br /><br />
    <div v-for="(project, index) in allProjects">
      <Project
        v-show="index < 6 * projectIndex"
        :index="index"
        class="mb-20"
        :project="project"
        :projects-length="allProjects.length"
        @viewNextProject="viewNextProject"
        @viewPreviousProject="viewPreviousProject"
      />
    </div>
    <article class="flex flex-col items-center">
      <!-- <button
        v-if="projectIndex !== 1"
        :class="!store.coloredSite ? '' : 'relative colored-button-border border-black '"
        class="border w-48 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black relative z-10 transition"
        @click="viewPreviousProject"
      >
        View Less Projects
      </button> 
      <button
        v-if="projectIndex < Math.ceil(allProjects.length / 3)"
        class="border rounded-full w-48 px-5 h-12  text-sm hover:bg-white hover:text-black relative z-10 transition"
        @click="viewNextProject"
      >
        المزيد من المشاريع
      </button> -->

    </article>
  </section>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"
import { ref } from "vue"
import Project from "./Project.vue"

const store = useMainStore()
type Project = {
  name: string
  imageSrc: string
  typeExt: string
  totalCount: number
  timeSwitch: number
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
}

let projectIndex = ref<number>(1)
let allProjects: Project[] = [
  {
    name: "Evolve OS",
    imageSrc: "/portfolio/eos/",
    typeExt:".png",
    totalCount:4,
    timeSwitch: 2000,
    description:
"Evolve OS، هو توزيعة Linux مصممة خصيصًا للفضاء السيبراني للمكتبات، ويمكن التحكم فيها من خلال خادم، تمامًا مثل EasyCafe",
    toolsUsed: ["Shell", "Python", "Vuejs", "Javascript","Dart","Html","Flutter","Postgresql"],
    demoLink: "https://udm-reimbursement-project.vercel.app",
    githubLink: "https://github.com/Ara-O/UDM-Reimbursement-Project"
  },
  {
    name: "SOS OS",
    imageSrc: "/portfolio/aos/",
    typeExt:".png",
    totalCount:6,
    timeSwitch: 2130,
    description:
    "نضام تشغيل مصغر, مخصص للبحث او للاشهارات, يقوم فقط بفتح صفحة ويب عن طريق برنامج SOS-OS",
    toolsUsed: ["C++", "Shell","Python"],
    demoLink: "https://children-association-tests.netlify.app",
    githubLink: "https://github.com/Ara-O/Association-Tests"
  },
  {
    name: "SOS-Admin",
    imageSrc: "/portfolio/sos_admin/",
    typeExt:".png",
    totalCount:9,
    timeSwitch: 2250,
    description:
    "sos-admin، هو البرنامج المسؤول عن التحكم في نظام sos، الذي يمكنه تشغيل/إيقاف  أجهزة الكمبيوترالمحتوية علي sos-os من الشبكة.  و التحكم في ما يظهر على الشاشة.",
    toolsUsed: ["Php", "Python", "Postgresql", "WAMP","WebSocket","Javascript"],
    demoLink: "https://minim-react.vercel.app/",
    githubLink: "https://github.com/Ara-O/Minim-React"
  },
  {
    name: "EParking",
    imageSrc: "/portfolio/eparking/",
    typeExt:".jpg",
    totalCount:11,
    timeSwitch: 2370,
    description:
    "Eparking هو تطبيق هاتفي يحل مشكلة مواقف السيارات للشركات وموظفيها",
    toolsUsed: ["Dart", "Flutter","FireBase","WAMP"],
    demoLink: "https://windows10clone.netlify.app",
    githubLink: "https://github.com/Ara-O/Windows10-mock"
  },
  {
    name: "محرك بحث الكتب",
    imageSrc: "/portfolio/book_search/",
    typeExt:".jpg",
    totalCount:12,
    timeSwitch: 2490,
    description:
    "EFindBook هو تطبيق ويب للبحث عن الكتب، ويستخدم واجهة Syngeb الخلفية، ويستخدم قاعدة بيانات OpenSearch للبحث بسرعة .",
    toolsUsed: ["Vue.js", "ElasticSearch","MySql","Python","HTML","CSS","Tailwind","Javascript"],
    demoLink: "https://animesfinder.netlify.app",
    githubLink: "https://github.com/Ara-O/Anime_Finder"
  },
  {
    name: "وسيطي",
    imageSrc: "/portfolio/wassiti_app/",
    typeExt:".png",
    totalCount:16,
    timeSwitch: 2510,
    description:
    "Wassiti تطبيق عبارة عن شبكة اجتماعية للحرفين  ولحل مشاكلهم الإدارية من المنزل. ومساعدتهم في العثور على عمل وبيع المنتجاتهم.",
    toolsUsed: ["Dart", "Flutter"],
    demoLink: "https://budgeting-site.netlify.app",
    githubLink: "https://github.com/Ara-O/Budget-App"
  },
  //{
  //  name: "Project Fit",
  //  imageSrc: "/portfolio/project-fit-image.webp",
  //  description:
  //    "Project Fit is a website that can be used to generate random exercises with sets and repetitions. The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.",
  //  toolsUsed: ["Vue.js"],
  //  demoLink: "https://project-fit.netlify.app",
  //  githubLink: "https://github.com/Ara-O/Project_Fit"
  //},
  //{
  //  name: "This portfolio :D",
  //  imageSrc: "/portfolio-image.webp",
  //  description: "My personal portfolio.",
  //  toolsUsed: ["Vue.js", "Three.js"],
  //  demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  //  githubLink: "https://github.com/Ara-O/Portfolio"
  //}
]

function viewNextProject() {
  if (projectIndex.value < allProjects.length - 1) {
    projectIndex.value++
  }
}

function viewPreviousProject() {
  if (projectIndex.value > 0) {
    projectIndex.value--
  }
}
</script>
