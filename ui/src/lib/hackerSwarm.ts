import * as THREE from "three";

export type HackerSwarmOptions = {
  cameraY?: number;
  cameraZ?: number;
  count?: number;
  pointerInfluence?: boolean;
  speed?: number;
  transparent?: boolean;
};

type ResolvedOptions = Required<HackerSwarmOptions>;

const MOBILE_BREAKPOINT = "(max-width: 820px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const pickCount = (container: HTMLElement) => {
  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  const isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
  const area = Math.max(1, container.clientWidth * container.clientHeight);

  if (reducedMotion) return isMobile ? 700 : 1200;
  if (isMobile) return area > 260_000 ? 1500 : 1200;
  if (area > 700_000) return 3600;
  if (area > 450_000) return 2800;
  return 2200;
};

export class HackerSwarm {
  private container: HTMLElement;
  private options: ResolvedOptions;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private geometry: THREE.TetrahedronGeometry;
  private material: THREE.MeshBasicMaterial;
  private mesh: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();
  private target = new THREE.Vector3();
  private color = new THREE.Color();
  private positions: THREE.Vector3[];
  private pointerCurrent = new THREE.Vector2();
  private pointerTarget = new THREE.Vector2();
  private frameId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private startedAt = performance.now();
  private isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
  private reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  private running = false;

  constructor(container: HTMLElement, options: HackerSwarmOptions = {}) {
    this.container = container;

    const count = options.count ?? pickCount(container);
    this.options = {
      cameraY: options.cameraY ?? 0,
      cameraZ: options.cameraZ ?? 100,
      count,
      pointerInfluence: options.pointerInfluence ?? (!this.isMobile && !this.reducedMotion),
      speed: options.speed ?? 1,
      transparent: options.transparent ?? true,
    };

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, this.reducedMotion ? 0.0024 : 0.0032);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
    this.camera.position.set(0, this.options.cameraY, this.options.cameraZ);

    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.isMobile,
      alpha: this.options.transparent,
      powerPreference: "high-performance",
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.setClearColor(0x000000, this.options.transparent ? 0 : 1);
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, this.reducedMotion ? 1 : this.isMobile ? 1.1 : 1.35),
    );
    this.container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.mixBlendMode = "screen";
    this.renderer.domElement.style.opacity = "0.96";

    this.geometry = new THREE.TetrahedronGeometry(this.isMobile ? 0.26 : 0.22);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.options.count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);

    this.positions = Array.from({ length: this.options.count }, () => {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
      );
    });
    for (let index = 0; index < this.options.count; index += 1) {
      this.mesh.setColorAt(index, this.color.setHex(0x00ff88));
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);

    this.renderer.domElement.addEventListener("pointermove", this.handlePointerMove, { passive: true });
    this.renderer.domElement.addEventListener("pointerleave", this.handlePointerLeave, { passive: true });
    window.addEventListener("resize", this.handleWindowResize);

    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.container);
    }

    this.resize();
    this.start();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.startedAt = performance.now();
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.frameId !== null) {
      window.cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  dispose() {
    this.stop();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.renderer.domElement.removeEventListener("pointermove", this.handlePointerMove);
    this.renderer.domElement.removeEventListener("pointerleave", this.handlePointerLeave);
    window.removeEventListener("resize", this.handleWindowResize);

    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();

    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  private handlePointerMove(event: PointerEvent) {
    if (!this.options.pointerInfluence) return;
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointerTarget.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    this.pointerTarget.y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
  }

  private handlePointerLeave() {
    this.pointerTarget.set(0, 0);
  }

  private handleWindowResize() {
    this.resize();
  }

  private resize() {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, this.reducedMotion ? 1 : this.isMobile ? 1.1 : 1.35),
    );
  }

  private animate = () => {
    if (!this.running) return;
    this.frameId = window.requestAnimationFrame(this.animate);

    const elapsed = ((performance.now() - this.startedAt) / 1000) * this.options.speed;
    const swirlTime = elapsed * (this.reducedMotion ? 0.42 : 0.74);
    const coreCount = Math.max(1, Math.floor(this.options.count * 0.05));
    const pointerWeight = this.options.pointerInfluence ? 1 : 0;

    this.pointerCurrent.lerp(this.pointerTarget, 0.048);
    this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, this.pointerCurrent.x * 12 * pointerWeight, 0.035);
    this.camera.position.y = THREE.MathUtils.lerp(
      this.camera.position.y,
      this.options.cameraY - this.pointerCurrent.y * 8 * pointerWeight,
      0.035,
    );
    this.camera.lookAt(this.pointerCurrent.x * 4, -this.pointerCurrent.y * 2, 0);

    for (let index = 0; index < this.options.count; index += 1) {
      const ratio = index / this.options.count;
      const isCore = index < coreCount;
      let scale = 1;
      let spin = 0;

      if (!isCore) {
        const radius = 30 + ratio * (this.isMobile ? 260 : 500);
        const angle = index * 137.5 + swirlTime * 0.15;
        const wave = Math.sin(radius * 0.02 - swirlTime) * 30;

        this.target.x = Math.cos(angle) * radius + this.pointerCurrent.x * 10 * (1 - ratio) * pointerWeight;
        this.target.y = wave * (1 - ratio) + Math.sin(index) * 10;
        this.target.z = Math.sin(angle) * radius;

        this.color.setRGB(0.12, 0.38, 1);
        this.color.multiplyScalar(0.72 + (1 - ratio) * 0.2);
        scale = 0.9 + (1 - ratio) * 0.14;
        spin = swirlTime * 0.14 + index * 0.0024;
      } else {
        const phi = Math.acos(1 - (2 * (index + 0.5)) / coreCount);
        const theta = GOLDEN_ANGLE * index;
        const pulse =
          15 + Math.sin(swirlTime * 3.2 + index * 0.11) * (this.reducedMotion ? 1.4 : 3.1);
        const rotY = swirlTime * 0.8 + this.pointerCurrent.x * 0.45 * pointerWeight;
        const x = pulse * Math.cos(theta) * Math.sin(phi);
        const y = pulse * Math.sin(theta) * Math.sin(phi);
        const z = pulse * Math.cos(phi);
        const energy = 0.5 + 0.5 * Math.sin(swirlTime * 5.4 + index * 0.56);

        this.target.x = x * Math.cos(rotY) - z * Math.sin(rotY);
        this.target.y = y - this.pointerCurrent.y * 2.6 * pointerWeight;
        this.target.z = x * Math.sin(rotY) + z * Math.cos(rotY);

        this.color.setRGB(1, 0.82 + energy * 0.18, 0.14);
        this.color.multiplyScalar(1.12 + energy * 0.24);
        scale = 1.12 + energy * 0.48;
        spin = swirlTime * 0.92 + index * 0.018;
      }

      this.positions[index].lerp(this.target, this.reducedMotion ? 0.03 : this.isMobile ? 0.052 : 0.072);
      this.dummy.position.copy(this.positions[index]);
      this.dummy.rotation.set(spin * 0.4, spin, spin * 0.24);
      this.dummy.scale.setScalar(scale);
      this.dummy.updateMatrix();

      this.mesh.setMatrixAt(index, this.dummy.matrix);
      this.mesh.setColorAt(index, this.color);
    }

    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  };
}
