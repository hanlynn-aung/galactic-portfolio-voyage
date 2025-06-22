
import { Text, Plane } from '@react-three/drei';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface AboutSectionProps {
  onClose: () => void;
}

export const AboutSection = ({ onClose }: AboutSectionProps) => {
  return (
    <>
      <group position={[0, 0, 5]}>
        <Plane args={[8, 6]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#000022" 
            transparent 
            opacity={0.9}
            emissive="#001133"
          />
        </Plane>
        
        <Text
          position={[0, 2, 0.1]}
          fontSize={0.8}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/roboto-mono.woff"
        >
          ABOUT ME
        </Text>
        
        <Text
          position={[0, 0.5, 0.1]}
          fontSize={0.3}
          color="#ccffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/roboto-mono.woff"
        >
          Welcome to my digital universe! I'm a passionate developer
          who believes in creating immersive experiences that push
          the boundaries of web technology. My journey through the
          vast cosmos of code has led me to specialize in 3D web
          experiences, interactive design, and cutting-edge frontend
          development.
        </Text>
        
        <Text
          position={[0, -1.5, 0.1]}
          fontSize={0.25}
          color="#88ccff"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/roboto-mono.woff"
        >
          Technologies: React • Three.js • TypeScript • WebGL
          Always exploring new galaxies of possibility...
        </Text>
      </group>

      {createPortal(
        <button
          onClick={onClose}
          className="absolute top-1/4 right-1/4 bg-red-500/80 hover:bg-red-500 
                     border border-red-400 rounded-full p-2 transition-colors z-50"
        >
          <X className="w-4 h-4 text-white" />
        </button>,
        document.body
      )}
    </>
  );
};
