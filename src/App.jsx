import {Canvas} from '@react-three/fiber'
import Watch from './components/watch'
import { OrbitControls } from '@react-three/drei'
function App() {

  return (
    <>
    <Canvas>
      <color attach='background' args={['lightblue']} />
      <OrbitControls />
      <ambientLight intensity={1} />
      <Watch />
    </Canvas>
    
    </>
  )
}

export default App
