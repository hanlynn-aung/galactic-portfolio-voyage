
import { Text, Plane, Box } from '@react-three/drei';

interface ProjectsSectionProps {
  onClose: () => void;
}

export const ProjectsSection = ({ onClose }: ProjectsSectionProps) => {
  return (
    <group position={[0, 0, 5]}>
      <Plane args={[10, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#220000" 
          transparent 
          opacity={0.9}
          emissive="#330011"
        />
      </Plane>
      
      {/* Close button as 3D object */}
      <Plane args={[1, 0.5]} position={[4.5, 3.5, 0.1]} onClick={onClose}>
        <meshStandardMaterial 
          color="#ff0000" 
          transparent 
          opacity={0.8}
        />
      </Plane>
      
      <Text
        position={[4.5, 3.5, 0.2]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        CLOSE
      </Text>
      
      <Text
        position={[0, 3, 0.1]}
        fontSize={0.8}
        color="#ff4444"
        anchorX="center"
        anchorY="middle"
      >
        PROJECT ARCHIVES
      </Text>
      
      <group position={[-2.5, 1, 0.2]}>
        <Box args={[1.5, 1, 0.1]}>
          <meshStandardMaterial color="#444" wireframe />
        </Box>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#ffcccc"
          anchorX="center"
          anchorY="middle"
        >
          3D Web Experience
        </Text>
      </group>
      
      <group position={[2.5, 1, 0.2]}>
        <Box args={[1.5, 1, 0.1]}>
          <meshStandardMaterial color="#444" wireframe />
        </Box>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#ffcccc"
          anchorX="center"
          anchorY="middle"
        >
          Interactive Portfolio
        </Text>
      </group>
      
      <group position={[0, -1, 0.2]}>
        <Box args={[1.5, 1, 0.1]}>
          <meshStandardMaterial color="#444" wireframe />
        </Box>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#ffcccc"
          anchorX="center"
          anchorY="middle"
        >
          Sci-Fi Interface
        </Text>
      </group>
      
      <Text
        position={[0, -2.8, 0.1]}
        fontSize={0.25}
        color="#ff8888"
        anchorX="center"
        anchorY="middle"
        maxWidth={8}
      >
        Click on any project cube to explore the codebase
        and see live demonstrations of my work.
      </Text>
    </group>
  );
};
