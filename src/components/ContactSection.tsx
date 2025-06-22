
import { Text, Plane, Torus } from '@react-three/drei';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ContactSectionProps {
  onClose: () => void;
}

export const ContactSection = ({ onClose }: ContactSectionProps) => {
  return (
    <>
      <group position={[0, 0, 5]}>
        <Plane args={[8, 6]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#002200" 
            transparent 
            opacity={0.9}
            emissive="#001100"
          />
        </Plane>
        
        <Text
          position={[0, 2.5, 0.1]}
          fontSize={0.8}
          color="#44ff44"
          anchorX="center"
          anchorY="middle"
          font="/fonts/roboto-mono.woff"
        >
          TRANSMISSION HUB
        </Text>
        
        {/* Contact Icons/Links */}
        <group position={[-1.5, 0.5, 0.2]}>
          <Torus args={[0.3, 0.1, 8, 16]}>
            <meshStandardMaterial color="#44ff44" emissive="#001100" />
          </Torus>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="#ccffcc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            EMAIL
          </Text>
        </group>
        
        <group position={[1.5, 0.5, 0.2]}>
          <Torus args={[0.3, 0.1, 8, 16]}>
            <meshStandardMaterial color="#44ff44" emissive="#001100" />
          </Torus>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="#ccffcc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            GITHUB
          </Text>
        </group>
        
        <group position={[0, -0.5, 0.2]}>
          <Torus args={[0.3, 0.1, 8, 16]}>
            <meshStandardMaterial color="#44ff44" emissive="#001100" />
          </Torus>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="#ccffcc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            LINKEDIN
          </Text>
        </group>
        
        <Text
          position={[0, -2, 0.1]}
          fontSize={0.25}
          color="#88ff88"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
          font="/fonts/roboto-mono.woff"
        >
          Ready to collaborate on your next mission?
          Establish communication through any channel above.
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
