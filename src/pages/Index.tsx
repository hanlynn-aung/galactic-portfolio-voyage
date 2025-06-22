
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Environment } from '@react-three/drei';
import { PortfolioScene } from '@/components/PortfolioScene';
import { Navigation } from '@/components/Navigation';
import { HUD } from '@/components/HUD';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Three.js Canvas - completely isolated */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars 
              radius={300} 
              depth={60} 
              count={5000} 
              factor={7} 
              saturation={0} 
              fade 
              speed={0.5}
            />
            <Environment preset="night" />
            <PortfolioScene />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={50}
              autoRotate={false}
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading Screen - separate overlay */}
      <Suspense fallback={<LoadingScreen />}>
        <div style={{ display: 'none' }} />
      </Suspense>

      {/* HTML Overlays - completely separate from Canvas */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full pointer-events-none">
          <HUD />
          <div className="pointer-events-auto">
            <Navigation />
          </div>
          
          {/* Welcome Message */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 max-w-md">
              <h1 className="text-4xl font-bold text-cyan-400 mb-4 font-mono">
                WELCOME TO MY UNIVERSE
              </h1>
              <p className="text-cyan-300 text-lg mb-6">
                Navigate through the stars to explore my portfolio
              </p>
              <div className="text-cyan-500 text-sm animate-pulse">
                Use mouse to control • Click and drag to explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
