const Name = ({ className }) => {
    
    return (
        <h1 className={`mansalva-regular ${className}`}>
            Cheyenne Chau
        </h1>
    )
}

export default Name;



























// // components/Name.jsx
// import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';
// import { Environment, Text3D, ContactShadows, Float } from '@react-three/drei';
// // If you want bloom: npm i @react-three/postprocessing
// // import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import fontUrl from '/fonts/helvetiker_regular.typeface.json?url';
// import { Suspense } from 'react';

// export default function Name() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 10], fov: 45 }}
//       gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
//       shadows
//       dpr={[1, 2]}
//     >
//         <Suspense fallback={null}>
//       {/* Ambient + a soft key light to kick some specular */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1.2} />

//       {/* HDRI reflections (pick any preset you like: 'city', 'sunset', 'dawn', 'studio', 'apartment') */}
//       <Environment preset="studio" background={false} />

//       {/* Slight float makes it feel alive */}
//       <Float speed={1} rotationIntensity={0.1} floatIntensity={0.6}>
//         <Text3D
//           font={fontUrl}
//           size={2}
//           height={0.45}
//           curveSegments={24}
//           bevelEnabled
//           bevelThickness={0.08}
//           bevelSize={0.06}
//           bevelOffset={0}
//           bevelSegments={8}
//         >
//           cheyenne
//           <meshPhysicalMaterial
//             color="#111111"          // 'black chrome' base
//             metalness={1}
//             roughness={0.08}         // lower = sharper reflections
//             envMapIntensity={1.6}    // punchier reflections
//             clearcoat={1}
//             clearcoatRoughness={0.1}
//             reflectivity={1}
//             ior={1.45}
//           />
//         </Text3D>
//       </Float>

//       {/* Soft ground contact shadow for depth */}
//       <ContactShadows
//         position={[0, -2.4, 0]}
//         opacity={0.35}
//         blur={2.5}
//         far={10}
//         resolution={1024}
//         frames={1}
//       />

//       {/* Optional bloom for glossy highlight pop
//       <EffectComposer>
//         <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.2} />
//       </EffectComposer>
//       */}
//       </Suspense>
//     </Canvas>
//   );
// }

















// import { Canvas } from "@react-three/fiber";
// import { Text3D } from "@react-three/drei";

// export default function Name() {
//   return (
//     <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <Text3D font="/fonts/helvetiker_regular.typeface.json" size={2} height={0.5}>
//         cheyenne
//         <meshPhysicalMaterial
//           metalness={1}
//           roughness={0.2}
//           envMapIntensity={1.5}
//           color="black"
//         />
//       </Text3D>
//     </Canvas>
//   );
// }
