import { Canvas } from "@react-three/fiber";
import { Physics } from "use-cannon";
import { Suspense } from "react";
import Orbit from "../R3F/Orbit";
import Draggable from "../R3F/Draggable";
import Floor from "./Floor";
import Box from "./Box";

const Scene = () => {
    return (
        <>
            <Canvas className="bg-white" camera={{ position: [0, 5, 10] }}>
                <Orbit />
                <axesHelper args={[30]} />
                <pointLight position={[10, 10, 10]} />
                {/* <pointLight position={[-10, -10, -10]} /> */}
                <ambientLight position={[10, 20, 10]} intensity={0.6} />
                <Physics>
                    <Draggable transformGroup>
                        <Suspense>
                            <Box position={[3, 5, 3]} />
                        </Suspense>
                    </Draggable>

                    <Draggable transformGroup>
                        <Suspense>
                            <Box />
                        </Suspense>
                    </Draggable>

                    <Floor position={[0, -3, 0]} />
                </Physics>
            </Canvas>
        </>
    );
};

export default Scene;
