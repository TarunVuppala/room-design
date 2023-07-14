import React, { useEffect, useRef } from 'react';
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

  const zoomIn = () => {
    camera.current.position.z -= 0.1;
  };

  const zoomOut = () => {
    camera.current.position.z += 0.1;
  };

  const rotateLeft = () => {
    scene.current.rotation.y += Math.PI / 9; // Rotate left by 45 degrees
  };

  const rotateRight = () => {
    scene.current.rotation.y -= Math.PI / 9; // Rotate right by 45 degrees
  };

  const rotateUp = () => {
    camera.current.position.y += 1;
    // scene.current.rotation.x += Math.PI / 9; // Rotate up by 45 degrees
    // camera.current.position.y += Math.PI / 9;
    // camera.current.position.x += Math.PI / 9;
  };

  const rotateDown = () => {
    camera.current.position.y -= 1;
    // scene.current.rotation.x -= Math.PI / 9; // Rotate down by 45 degrees
    // camera.current.position.y -= Math.PI / 9;
    // camera.current.position.x -= Math.PI / 9;
  };

  useEffect(() => {
    const container = containerRef.current;

    // Create a scene
    scene.current = new THREE.Scene();

    // Create a camera
    camera.current = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000);
    camera.current.position.z = 7;
    camera.current.position.x = 5;
    camera.current.position.y = 2;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Load the room model
    const loader = new GLTFLoader();
    loader.load(room, (gltf) => {
      scene.current.add(gltf.scene);

      // Add lighting to the model
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide; // Enable double-sided rendering
          child.material.metalness = 0.5; // Adjust the material's metalness property
          child.material.roughness = 0.8; // Adjust the material's roughness property
        }
      });
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
    <div>
      <div className="d-flex justify-content-center align-items-center m-0">
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
