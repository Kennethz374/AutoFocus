import React from "react";
import { useBox } from "use-cannon";
import { useFrame } from "@react-three/fiber";

const Floor = (props) => {
    const [ref, api] = useBox(() => ({ args: [20, 1, 20], ...props }));
    useFrame(({ clock }) =>
        api.position.set(0, 0, Math.cos(clock.getElapsedTime()) * 5)
    );
    return (
        <mesh ref={ref} {...props} receiveShadow={true}>
            <boxGeometry args={[20, 1, 20]} />
            <meshBasicMaterial color="black" />
        </mesh>
    );
};

export default Floor;
