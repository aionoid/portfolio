import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

export default function renderModel(canvas: HTMLElement, height: number, width: number) {
  let sizes = {
    width,
    height,
    aspectRatio: width / height
  }
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.5, 1000)
  camera.position.z = 2

  //Model
  // const loader = new GLTFLoader()

  // loader.load(
  //   // "../../src/assets/models/helmetModel/glTF/DamagedHelmet.gltf",
  //   "../../src/assets/models/duckModel/glTF/Duck.gltf",
  //   (gltf) => {
  //     gltf.scene.rotation.y = -0.7
  //     scene.add(gltf.scene)
  //   },
  //   () => {},
  //   (err) => {
  //     console.log("err", err)
  //   }
  // )

  scene.add(new THREE.Mesh(new THREE.TorusGeometry(), new THREE.MeshNormalMaterial()))

  //Light
  const ambientLight = new THREE.AmbientLight()

  const directionalLight = new THREE.PointLight()
  directionalLight.position.y = 2
  directionalLight.intensity = 2
  scene.add(ambientLight, directionalLight)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 4
  renderer.useLegacyLights = false
  const controls = new OrbitControls(camera, canvas)
  controls.minDistance = 2
  controls.maxDistance = 6
  controls.enableDamping = true
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
