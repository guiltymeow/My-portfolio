"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useScreenSize from "../hooks/useScreenSize"; 

export default function Roboface(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/Roboface.glb");


  const screenSize = useScreenSize();


  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    if (screenSize) {
     
      const widthFactor = screenSize[0] / 1920;  

    
      const newScale = 0.3 * Math.min(widthFactor, 1.5); 

    
      setScale(newScale);
    }
  }, [screenSize]); 

  // Rotate the model continuously
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; 
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[scale, scale, scale]} 
      position={[0, -0.5, 0]} 
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.03, 9.154, 0.389]} rotation={[Math.PI / 2, 0, 0]} scale={0.036}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_19.geometry}
              material={materials.skull__top}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_20.geometry}
              material={materials.teath1}
              position={[379.97, 0, 523.015]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[50.916, 70.402, 50.916]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_21.geometry}
              material={materials.skull_jaw}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.material_12}
            position={[-0.015, 0.065, -3.975]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.wire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.accessories}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.material}
            position={[0.002, 11.77, 8.751]}
            rotation={[-1.833, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.accessories}
            position={[0.848, 14.4, -4.35]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={0.143}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.material}
            position={[0, 13.754, -8.335]}
            rotation={[2.094, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.accessories}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.accessories}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.material}
            position={[2.336, -3.649, 0.094]}
            rotation={[0.015, 0, 0.262]}
            scale={1.277}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.wire}
            position={[0, 0, -0.038]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.top_head}
            position={[-140.551, -76.592, 3.021]}
            scale={0.521}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.wire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.wire}
            position={[0.033, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.accessories}
            position={[0, 14.664, -2.777]}
            scale={[0.598, 0.598, 0.974]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.spin}
            position={[0, 0.461, 3.632]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.neck}
            position={[-143.718, -78.627, 3.027]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.head_top_and_back_neck}
            position={[-143.718, -78.627, 3.193]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.neck}
            position={[-143.718, -78.627, 3.084]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.head_top_and_back_neck}
            position={[-140.574, -76.623, 3.021]}
            scale={0.521}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.back_head}
            position={[-145.661, 13.9, 90.154]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.54}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.top_head}
            position={[-143.718, -78.597, 2.958]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.material}
            position={[3.813, 9.252, -0.185]}
            rotation={[0.063, 0.051, -Math.PI / 2]}
            scale={[1.019, 0.164, 1.019]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.face1}
            position={[-143.718, -78.774, 3.099]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.face1}
            position={[-143.718, -78.627, 3.103]}
            scale={0.533}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models/Roboface.glb")