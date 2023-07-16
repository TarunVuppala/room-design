import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faSearchMinus, faUndo, faRedo, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import room from './room1.glb';

const Room3D = () => {
  const containerRef = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const controls = useRef(null);
  const targetRotation = useRef(new THREE.Euler(0, 0, 0));
  const targetZoom = useRef(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const zoomOut = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    targetZoom.current -= 0.3;
  };

  const zoomIn = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    targetZoom.current += 0.3;
  };

  const rotationStep = Math.PI / 9;

  const rotateLeft = () => {
    targetRotation.current.y += rotationStep;
  };

  const rotateRight = () => {
    targetRotation.current.y -= rotationStep;
  };

  const rotateUp = () => {
    targetRotation.current.x += rotationStep;
  };

  const rotateDown = () => {
    targetRotation.current.x -= rotationStep;
  };

  useEffect(() => {
    const container = containerRef.current;

    // Create a scene
    scene.current = new THREE.Scene();

    // Create a camera
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.current.position.set(2, 3, 7);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Load the room model
    const loader = new GLTFLoader();
    loader.load(room, (gltf) => {
      scene.current.add(gltf.scene);

      // Modify materials
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide; // Enable double-sided rendering
          child.material.metalness = 0.5; // Adjust the material's metalness property
          child.material.roughness = 0.8; // Adjust the material's roughness property
        }
      });

      scene.current.add(gltf.scene);
    });

    // Create lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Adjust the ambient light intensity
    scene.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Adjust the directional light intensity
    directionalLight.position.set(10, 10, 10);
    scene.current.add(directionalLight);

    // Create controls
    controls.current = new OrbitControls(camera.current, renderer.domElement);
    controls.current.enableZoom = false; // Disable zooming with mouse controls
    controls.current.enableRotate = false; // Disable object rotation with mouse controls

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smoothly interpolate the rotation towards the target rotation
      scene.current.rotation.x += (targetRotation.current.x - scene.current.rotation.x) * 0.05;
      scene.current.rotation.y += (targetRotation.current.y - scene.current.rotation.y) * 0.05;
      scene.current.rotation.z += (targetRotation.current.z - scene.current.rotation.z) * 0.05;

      // Smoothly interpolate the zoom towards the target zoom
      const currentZoom = camera.current.zoom;
      camera.current.zoom += (targetZoom.current - currentZoom) * 0.05;
      camera.current.updateProjectionMatrix();

      // Check if zoom transition is completed
      if (Math.abs(targetZoom.current - currentZoom) < 0.01) {
        camera.current.zoom = targetZoom.current;
        camera.current.updateProjectionMatrix();
        setIsAnimating(false);
      }

      renderer.render(scene.current, camera.current);
    };

    animate();

    // Cleanup on unmount
    return () => {
      controls.current.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ marginTop: '60px' }}>
      <div className="d-flex justify-content-center align-items-center m-0 bg-light">
        <button className="btn btn-sm btn-primary me-2" onClick={zoomIn}>
          <FontAwesomeIcon icon={faSearchPlus} /> Zoom In
        </button>
        <button className="btn btn-sm btn-primary me-2" onClick={zoomOut}>
          <FontAwesomeIcon icon={faSearchMinus} /> Zoom Out
        </button>
        <button className="btn btn-sm btn-primary me-2" onClick={rotateLeft}>
          <FontAwesomeIcon icon={faUndo} /> Rotate Left
        </button>
        <button className="btn btn-sm btn-primary me-2" onClick={rotateRight}>
          <FontAwesomeIcon icon={faRedo} /> Rotate Right
        </button>
        <button className="btn btn-sm btn-primary me-2" onClick={rotateUp}>
          <FontAwesomeIcon icon={faArrowUp} /> Rotate Up
        </button>
        <button className="btn btn-sm btn-primary me-2" onClick={rotateDown}>
          <FontAwesomeIcon icon={faArrowDown} /> Rotate Down
        </button>
      </div>
      <div className="m-0 p-0" ref={containerRef}></div>
    </div>
  );
};

export default Room3D;
