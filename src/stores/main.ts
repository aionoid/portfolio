import { defineStore } from "pinia"

export default defineStore("main-store", () => {
  const coloredSite = true

  return { coloredSite }
})
