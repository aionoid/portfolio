import * as THREE from "three"
import { BufferGeometry } from "three"

export default function renderStars(canvas: HTMLElement, height: number, width: number) {
  let sizes = {
    width,
    height,
    aspectRatio: width / height
  }

  const scene = new THREE.Scene()

  // TODO: Handle resizing

  const stars = new BufferGeometry()
  const numComponents = 3
  const numStars = 400
  const radius = 10

  const starsPositions = new Float32Array(numStars * 3)

  for (let i = 0; i < numStars; i++) {
    starsPositions[i] = (Math.random() - 0.5) * radius
    starsPositions[(i % 3) + 1] = (Math.random() - 0.5) * radius
    starsPositions[(i % 3) + 2] = (Math.random() - 0.5) * radius
  }

  stars.setAttribute("position", new THREE.BufferAttribute(starsPositions, numComponents))
  const starPoints = new THREE.Points(
    stars,
    new THREE.PointsMaterial({
      color: "white",
      size: 0.01,
      sizeAttenuation: true
    })
  )
  scene.add(starPoints)
  const camera = new THREE.PerspectiveCamera(75, sizes.aspectRatio, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.setClearColor("black")

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  function animate() {
    requestAnimationFrame(animate)
    starPoints.position.y += 0.001
    renderer.render(scene, camera)
  }
  animate()
}
