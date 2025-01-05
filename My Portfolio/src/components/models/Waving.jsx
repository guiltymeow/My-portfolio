"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Waving(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Waving.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {

    if (actions) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}
    scale={[4, 4, 4]}
    position={[0, -6, 0]}

    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="d6f42ede6cb54a05919bfed49102f473fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Light"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[735.889, 495.831, 692.579]}
                  rotation={[-Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_8" />
                </group>
                <group name="Armature">
                  <group name="Object_10">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials["mat0.003"]}
                      skeleton={nodes.Object_91.skeleton}
                    />
                    <skinnedMesh
                      name="Object_93"
                      geometry={nodes.Object_93.geometry}
                      material={materials["mat0.001"]}
                      skeleton={nodes.Object_93.skeleton}
                    />
                    <skinnedMesh
                      name="Object_95"
                      geometry={nodes.Object_95.geometry}
                      material={materials.mat0}
                      skeleton={nodes.Object_95.skeleton}
                    />
                    <skinnedMesh
                      name="Object_97"
                      geometry={nodes.Object_97.geometry}
                      material={materials["mat0.004"]}
                      skeleton={nodes.Object_97.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials["mat0.002"]}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_101"
                      geometry={nodes.Object_101.geometry}
                      material={materials["mat0.005"]}
                      skeleton={nodes.Object_101.skeleton}
                    />
                    <group name="Object_90" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_92" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_94" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_96" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_98" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_100" rotation={[-Math.PI / 2, 0, 0]} />
                  </group>
                </group>
                <group name="Mesh_0074rip" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Mesh_0085rip" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Mesh_0082rip" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Mesh_0072rip" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Mesh_0088rip" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Mesh_0073rip" rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Waving.glb");
