import {Canvas} from '@react-three/fiber'
import Watch from './components/watch'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
function App() {

  return (
    <>
    <Canvas gl={{preserveDrawingBuffer:true,phisicallyCorrectLight:true}}>

      <color attach='background' args={['lightblue']} />

      <OrbitControls />

      <directionalLight position={[3.3, 4.0, 4.4]} intensity={4} />
      <Watch />
    </Canvas>
    
    </>
  )
}

const Scene = () =>{
  return(
    <>
    
    </>
  )
}

export default App
