"use client";

import React, { useEffect, useMemo } from "react"; // Add this import
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

// Wrap the function directly with React.memo
const ParticlesBackground = React.memo(() => {
  const particlesInit = async (main) => {
    console.log("Initializing particles...");
    await loadFull(main); 
    console.log("Particles initialized.");
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded into container: ", container);
  };

  // Memoize the particles config to avoid recalculating on each render
  const memoizedParticlesConfig = useMemo(() => particlesConfig, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={memoizedParticlesConfig} // Pass the memoized config
      />
    </div>
  );
});

export default ParticlesBackground;
