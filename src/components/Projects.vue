<template>
  <section class="mt-20 text-white" id="projects-section">
    <h2 class="text-5xl">Projects</h2>
    <br /><br />
    <div v-for="(project, index) in allProjects">
      <Project
        v-show="index < 3 * projectIndex"
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
      </button> -->
      <button
        v-if="projectIndex < Math.ceil(allProjects.length / 3)"
        class="border rounded-full w-48 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black relative z-10 transition"
        @click="viewNextProject"
      >
        View More Projects
      </button>
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
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
}

let projectIndex = ref<number>(1)
let allProjects: Project[] = [
  {
    name: "بسم الله الرحمان الرحيم",
    imageSrc: "/udm-reimbursement-project-image.webp",
    description:
      "I collaborated with three classmates on a project to enhance the reimbursement system for the College of Engineering at the University of Detroit Mercy. Our goal was to create a more efficient and user-friendly system for generating reimbursement documents for faculty purchases.",
    toolsUsed: ["Vue.js", "Node.js", "Express", "Mongo DB"],
    demoLink: "https://udm-reimbursement-project.vercel.app",
    githubLink: "https://github.com/Ara-O/UDM-Reimbursement-Project"
  },
  {
    name: "Children Association Tests",
    imageSrc: "/implicit-association-tests-image.webp",
    description:
      "Collaborated with the assistant professor of psychology at the University of Detroit Mercy to develop a website that includes several tests to measure and gather data on implicit gender and racial biases in children.",
    toolsUsed: ["Vue.js", "Firebase"],
    demoLink: "https://children-association-tests.netlify.app",
    githubLink: "https://github.com/Ara-O/Association-Tests"
  },
  {
    name: "Minim",
    imageSrc: "/minim-image.webp",
    description:
      "A minimalist note-taking site with AI features like note summarization, text to speech, and rich text formatting.",
    toolsUsed: ["React", "Node.js", "Express", "OpenAI"],
    demoLink: "https://minim-react.vercel.app/",
    githubLink: "https://github.com/Ara-O/Minim-React"
  },
  {
    name: "Budgeting Site",
    imageSrc: "/budgeting-site-image.webp",
    description:
      "I created a website that can be used to track user expenses, income, bills, and money/spending goals. The website uses firebase's realtime database and authentication to keep track of user data.",
    toolsUsed: ["Nuxt.js", "Firebase"],
    demoLink: "https://budgeting-site.netlify.app",
    githubLink: "https://github.com/Ara-O/Budget-App"
  },
  {
    name: "Windows 10 Clone",
    imageSrc: "/windows-clone-image.webp",
    description:
      "Created in memory of my use of windows 10. This is a clone of the basic Windows 10 layout; From the lock screen and password page, to the home screen with moveable icons.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://windows10clone.netlify.app",
    githubLink: "https://github.com/Ara-O/Windows10-mock"
  },
  {
    name: "Anime finder",
    imageSrc: "/animes-finder-image.webp",
    description:
      "A side project to help users serch for, read more about, and find different animes of different genres",
    toolsUsed: ["Vue.js", "Firebase"],
    demoLink: "https://animesfinder.netlify.app",
    githubLink: "https://github.com/Ara-O/Anime_Finder"
  },
  {
    name: "Project Fit",
    imageSrc: "/project-fit-image.webp",
    description:
      "Project Fit is a website that can be used to generate random exercises with sets and repetitions. The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://project-fit.netlify.app",
    githubLink: "https://github.com/Ara-O/Project_Fit"
  },
  {
    name: "This portfolio :D",
    imageSrc: "/portfolio-image.webp",
    description: "My personal portfolio.",
    toolsUsed: ["Vue.js", "Three.js"],
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    githubLink: "https://github.com/Ara-O/Portfolio"
  }
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
