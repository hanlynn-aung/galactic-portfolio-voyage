
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Text, Float, Environment } from '@react-three/drei';
import { PortfolioScene } from '@/components/PortfolioScene';
import { Navigation } from '@/components/Navigation';
import { HUD } from '@/components/HUD';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Background starfield */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
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
          </Suspense>
        </Canvas>
      </div>

      {/* Main 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={<LoadingScreen />}>
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

      {/* HUD Overlay */}
      <HUD />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Welcome Message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
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
  );
};

export default Index;
