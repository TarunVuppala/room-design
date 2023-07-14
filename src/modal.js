import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

const Model = () => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, './wall.blend');

    useEffect(() => {
        modelRef.current.add(gltf.scene);
    }, [gltf.scene]);

    return (
        <>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere repellendus itaque laborum minus quam error ducimus architecto dolor officiis voluptate recusandae quos, rem, sequi tempore beatae, at illum in debitis. Dolore enim amet sit beatae praesentium aliquid aut soluta quaerat voluptatem officiis, atque tempore nostrum exercitationem dolorum nemo? Dolore, autem dolorem. Odio aliquam magni labore beatae repellat. Asperiores laboriosam impedit odio atque voluptates veniam quasi iusto rerum adipisci hic! Beatae reprehenderit placeat non nulla at repudiandae culpa explicabo rem unde praesentium. Reprehenderit expedita aliquid quibusdam illum distinctio, repellendus a non, voluptate eligendi harum, veritatis architecto mollitia culpa! Vel, rerum?</div>
            <group ref={modelRef} />
        </>
    );
};

export default Model;