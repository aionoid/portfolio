import { defineStore } from "pinia"

export default defineStore("main-store", () => {
  let coloredSite = false

  return { coloredSite }
})
