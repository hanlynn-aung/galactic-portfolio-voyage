
import { Text, Plane, Torus } from '@react-three/drei';

interface ContactSectionProps {
  onClose: () => void;
}

export const ContactSection = ({ onClose }: ContactSectionProps) => {
  return (
    <group position={[0, 0, 5]}>
      <Plane args={[8, 6]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#002200" 
          transparent 
          opacity={0.9}
          emissive="#001100"
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
        position={[0, 2.5, 0.1]}
        fontSize={0.8}
        color="#44ff44"
        anchorX="center"
        anchorY="middle"
      >
        TRANSMISSION HUB
      </Text>
      
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
      >
        Ready to collaborate on your next mission?
        Establish communication through any channel above.
      </Text>
    </group>
  );
};
