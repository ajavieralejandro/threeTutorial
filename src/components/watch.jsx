import { useGLTF } from "@react-three/drei";

const Watch = () =>{
    const model = useGLTF('./steampunk.glb');

    return(
        <>
        <mesh>
            <primitive object={model.scene} />
        </mesh>
        </>
    )
}

export default Watch;