"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import * as THREE from 'three';


const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="forest" />
    </Canvas>
  );
};

export default RenderModel;
