import {Canvas, useFrame} from '@react-three/fiber'
import Watch from './components/watch'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
//Theatre Imports
import { ScrollControls,useScroll,Scroll} from '@react-three/drei'
import {getProject,val} from '@theatre/core';
import {
  SheetProvider, editable as e,
  PerspectiveCamera, useCurrentSheet
} from '@theatre/r3f';
function App() {

  const sheet = getProject("Product Animation").sheet("Scene");
  return (
    <>
    <Canvas gl={{preserveDrawingBuffer:true,phisicallyCorrectLight:true}}>

      <ScrollControls pages={5}>
      <SheetProvider sheet={sheet}>

    
      <Scene />
      <Scroll html>
          <div>
            <h1>Here's our H1 Element</h1>
          </div>
      </Scroll>
      </SheetProvider>

      </ScrollControls>
      

    </Canvas>
    
    </>
  )
}

const Scene = () =>{
  
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  useFrame(()=>{
    //Try to understand and explain this twol lines
    const sequenceLenght = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLenght;

  },[])

  return(
    <>
       <color attach='background' args={['lightblue']} />
      <PerspectiveCamera theatreKey='Camara' makeDefault={true}
      position={[0,0,0]}
      fov={90} near={0.1} far={70} />

  <directionalLight position={[3.3, 4.0, 4.4]} intensity={4} />
<Watch />
    </>
  )
}

export default App
