import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const STATES = {
  hero: { x: 1.05, y: -0.34, z: -0.55, scale: 0.96, rx: -0.08, ry: -0.24, rz: -0.18, opacity: 0.82 },
  about: { x: -2.7, y: -0.18, z: -1, scale: 0.72, rx: 0.05, ry: 0.42, rz: -0.1, opacity: 0.1 },
  experience: { x: 2.5, y: -0.35, z: -1.2, scale: 0.72, rx: -0.08, ry: -0.5, rz: 0.12, opacity: 0.03 },
  credentials: { x: -2.65, y: -0.2, z: -1.1, scale: 0.72, rx: 0.08, ry: 0.58, rz: -0.12, opacity: 0.02 },
  projects: { x: 3.8, y: -0.3, z: -1.25, scale: 0.66, rx: 0.02, ry: -0.72, rz: 0.14, opacity: 0.01 },
  contact: { x: 3.25, y: -0.72, z: -0.8, scale: 0.72, rx: 0, ry: -0.92, rz: 0.18, opacity: 0.06 },
};

export default function WorldScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    const modelGroup = new THREE.Group();
    const orbitGroup = new THREE.Group();
    root.add(modelGroup, orbitGroup);
    scene.add(root);

    const ambient = new THREE.AmbientLight(0x2f176a, 1.25);
    const magenta = new THREE.PointLight(0xff27ef, 58, 12, 1.7);
    const blue = new THREE.PointLight(0x306cff, 48, 12, 1.8);
    const violet = new THREE.PointLight(0xa870ff, 34, 10, 2);
    magenta.position.set(2.4, 2.4, 3.4);
    blue.position.set(-2.8, -0.6, 2.8);
    violet.position.set(0, -2.6, 2.2);
    scene.add(ambient, magenta, blue, violet);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0x090311,
      emissive: 0x160020,
      emissiveIntensity: 0.55,
      metalness: 0.78,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 1,
    });

    let modelMeshes = [];
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load('/models/scattering-skull-optimized.glb', (gltf) => {
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const normalizeScale = 3.6 / Math.max(size.x, size.y, size.z);
      model.position.sub(center);
      model.scale.setScalar(normalizeScale);
      model.traverse((child) => {
        if (!child.isMesh) return;
        child.material = material.clone();
        child.castShadow = false;
        child.receiveShadow = false;
        modelMeshes.push(child);
      });
      model.rotation.set(0.1, -0.2, 0.02);
      modelGroup.add(model);
      mount.classList.add('is-loaded');
    });

    const makeOrbit = (color, radiusX, radiusY, rotation) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, Math.PI * 2);
      const points = curve.getPoints(220).map((point) => new THREE.Vector3(point.x, point.y, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 }),
      );
      line.rotation.set(rotation.x, rotation.y, rotation.z);
      orbitGroup.add(line);
      return line;
    };

    const orbitPink = makeOrbit(0xff42f5, 2.45, 0.72, { x: 0.88, y: 0.08, z: -0.2 });
    const orbitBlue = makeOrbit(0x7c8cff, 2.05, 0.57, { x: 1.15, y: -0.16, z: 0.32 });

    const starCount = 360;
    const starPositions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      starPositions[index * 3] = (Math.random() - 0.5) * 18;
      starPositions[index * 3 + 1] = (Math.random() - 0.5) * 10;
      starPositions[index * 3 + 2] = -2 - Math.random() * 8;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xded6ff, size: 0.018, transparent: true, opacity: 0.72 }),
    );
    scene.add(stars);

    const mouse = { x: 0, y: 0 };
    const target = { ...STATES.hero };
    const current = { ...STATES.hero };
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const resolveState = () => {
      const sectionIds = ['skills', 'experience', 'credentials', 'projects', 'contact'];
      const guide = window.scrollY + window.innerHeight * 0.48;
      let key = 'hero';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= guide) key = id === 'skills' ? 'about' : id;
      });
      Object.assign(target, STATES[key]);
    };

    const onPointerMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 0.22;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 0.14;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(window.innerWidth, window.innerHeight);
      resolveState();
    };

    resolveState();
    window.addEventListener('scroll', resolveState, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);

    let frame = 0;
    let last = performance.now();
    const animate = (now) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      const ease = motionQuery.matches ? 1 : 1 - Math.pow(0.002, delta);
      Object.keys(current).forEach((key) => { current[key] += (target[key] - current[key]) * ease; });

      const responsiveScale = window.innerWidth < 700 ? 0.72 : window.innerWidth < 1000 ? 0.88 : 1;
      root.position.set(current.x * responsiveScale, current.y, current.z);
      root.scale.setScalar(current.scale * responsiveScale);
      root.rotation.x = current.rx + (motionQuery.matches ? 0 : mouse.y);
      root.rotation.y = current.ry + (motionQuery.matches ? 0 : mouse.x);
      root.rotation.z = current.rz;
      orbitGroup.rotation.z += motionQuery.matches ? 0 : delta * 0.12;
      orbitPink.material.opacity = current.opacity * 0.95;
      orbitBlue.material.opacity = current.opacity * 0.55;
      modelMeshes.forEach((mesh) => { mesh.material.opacity = current.opacity; });
      stars.material.opacity = current.opacity * 0.55;
      document.documentElement.style.setProperty('--world-presence', current.opacity.toFixed(3));
      stars.rotation.y += motionQuery.matches ? 0 : delta * 0.004;

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', resolveState);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      starGeometry.dispose();
      stars.material.dispose();
      orbitPink.geometry.dispose();
      orbitPink.material.dispose();
      orbitBlue.geometry.dispose();
      orbitBlue.material.dispose();
      modelMeshes.forEach((mesh) => mesh.material.dispose());
      document.documentElement.style.removeProperty('--world-presence');
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="world-canvas" aria-hidden="true"><span></span></div>;
}
