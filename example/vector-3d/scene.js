const stage = document.getElementById("vector-stage");
const status = document.getElementById("vector-status");
const sliders = ["x", "y", "z"].map((axis) => ({
  input: document.getElementById(`vector-${axis}`),
  output: document.getElementById(`vector-${axis}-value`),
}));

try {
  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101c29);

  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  let azimuth = Math.PI / 4;
  let elevation = Math.PI / 5;
  let distance = 9;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  stage.appendChild(renderer.domElement);
  status.remove();

  const grid = new THREE.GridHelper(8, 8, 0x577184, 0x344b5e);
  scene.add(grid);
  scene.add(new THREE.AxesHelper(3.5));

  const arrow = new THREE.ArrowHelper(
    new THREE.Vector3(2, 2, 1).normalize(),
    new THREE.Vector3(0, 0, 0),
    3,
    0xffcb66,
    0.35,
    0.2
  );
  scene.add(arrow);

  function render() {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    camera.aspect = width / height;
    camera.position.set(
      distance * Math.sin(azimuth) * Math.cos(elevation),
      distance * Math.sin(elevation),
      distance * Math.cos(azimuth) * Math.cos(elevation)
    );
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    renderer.render(scene, camera);
  }

  function updateVector() {
    const [x, y, z] = sliders.map(({ input, output }) => {
      output.value = input.value;
      return Number(input.value);
    });
    const vector = new THREE.Vector3(x, y, z);
    const length = vector.length();
    arrow.visible = length > 0;
    if (length > 0) {
      arrow.setDirection(vector.normalize());
      arrow.setLength(length, Math.min(0.35, length * 0.25), Math.min(0.2, length * 0.15));
    }
    document.getElementById("vector-coordinates").textContent = `(${x}, ${y}, ${z})`;
    document.getElementById("vector-length").textContent = length.toFixed(2);
    render();
  }

  sliders.forEach(({ input }) => input.addEventListener("input", updateVector));

  let lastPointer = null;
  renderer.domElement.addEventListener("pointerdown", (event) => {
    lastPointer = { x: event.clientX, y: event.clientY };
    renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener("pointermove", (event) => {
    if (!lastPointer) return;
    azimuth -= (event.clientX - lastPointer.x) * 0.008;
    elevation = THREE.MathUtils.clamp(
      elevation + (event.clientY - lastPointer.y) * 0.008,
      -Math.PI / 2 + 0.08,
      Math.PI / 2 - 0.08
    );
    lastPointer = { x: event.clientX, y: event.clientY };
    render();
  });
  renderer.domElement.addEventListener("pointerup", () => { lastPointer = null; });
  renderer.domElement.addEventListener("pointercancel", () => { lastPointer = null; });
  renderer.domElement.addEventListener("wheel", (event) => {
    event.preventDefault();
    distance = THREE.MathUtils.clamp(distance + event.deltaY * 0.01, 5, 16);
    render();
  }, { passive: false });

  new ResizeObserver(render).observe(stage);
  updateVector();
} catch (error) {
  stage.replaceChildren(status);
  status.textContent = "3D 장면을 불러올 수 없습니다. 연결 상태나 브라우저의 WebGL 지원을 확인해 주세요.";
  console.error("Vector scene failed to initialize:", error);
}
