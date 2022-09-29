import { React, useEffect, useRef, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
extend({ DragControls });

const Draggable = (props) => {
    const { camera, gl, scene } = useThree();
    const groupRef = useRef();
    const controlRef = useRef();

    const [children, setChildren] = useState([]);

    useEffect(() => {
        setChildren(groupRef.current.children);
    }, []);

    useEffect(() => {
        // disabled orbitControl
        controlRef.current.addEventListener("hoveron", (e) => {
            scene.orbitControls.enabled = false;
        });
        //enabled orbitControl
        controlRef.current.addEventListener(
            "hoveroff",
            (e) => (scene.orbitControls.enabled = true)
        );
    }, [children]);

    return (
        <group ref={groupRef}>
            <dragControls
                transformGroup={props.transformGroup}
                ref={controlRef}
                args={[children, camera, gl.domElement]}
            />
            {props.children}
        </group>
    );
};

export default Draggable;
