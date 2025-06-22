
import { Text, Plane } from '@react-three/drei';

interface AboutSectionProps {
  onClose: () => void;
}

export const AboutSection = ({ onClose }: AboutSectionProps) => {
  return (
    <group position={[0, 0, 5]}>
      <Plane args={[8, 6]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#000022" 
          transparent 
          opacity={0.9}
          emissive="#001133"
        />
      </Plane>
      
      {/* Close button as 3D object */}
      <Plane args={[1, 0.5]} position={[3.5, 2.5, 0.1]} onClick={onClose}>
        <meshStandardMaterial 
          color="#ff0000" 
          transparent 
          opacity={0.8}
        />
      </Plane>
      
      <Text
        position={[3.5, 2.5, 0.2]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        CLOSE
      </Text>
      
      <Text
        position={[0, 2, 0.1]}
        fontSize={0.8}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
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
      >
        Technologies: React • Three.js • TypeScript • WebGL
        Always exploring new galaxies of possibility...
      </Text>
    </group>
  );
};
