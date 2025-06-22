
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box, Torus } from '@react-three/drei';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

export const PortfolioScene = () => {
  const groupRef = useRef<any>();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Hub */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Torus args={[3, 0.1, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#00ffff" emissive="#003333" />
        </Torus>
      </Float>

      {/* About Section Planet */}
      <Float speed={1.5} rotationIntensity={0.3}>
        <group position={[-8, 3, -5]}>
          <Sphere args={[1.5]} onClick={() => setActiveSection('about')}>
            <meshStandardMaterial 
              color="#4444ff" 
              emissive="#001166" 
              transparent 
              opacity={0.8}
            />
          </Sphere>
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            ABOUT
          </Text>
        </group>
      </Float>

      {/* Projects Section */}
      <Float speed={1.8} rotationIntensity={0.4}>
        <group position={[8, -2, -3]}>
          <Box args={[2, 2, 2]} onClick={() => setActiveSection('projects')}>
            <meshStandardMaterial 
              color="#ff4444" 
              emissive="#660011" 
              transparent 
              opacity={0.8}
              wireframe
            />
          </Box>
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            PROJECTS
          </Text>
        </group>
      </Float>

      {/* Contact Section */}
      <Float speed={1.3} rotationIntensity={0.2}>
        <group position={[0, -6, -8]}>
          <Torus args={[1.5, 0.5, 8, 20]} onClick={() => setActiveSection('contact')}>
            <meshStandardMaterial 
              color="#44ff44" 
              emissive="#001100" 
              transparent 
              opacity={0.8}
            />
          </Torus>
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/roboto-mono.woff"
          >
            CONTACT
          </Text>
        </group>
      </Float>

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#004466" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00ccff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff4400" />

      {/* Conditional Section Rendering */}
      {activeSection === 'about' && <AboutSection onClose={() => setActiveSection(null)} />}
      {activeSection === 'projects' && <ProjectsSection onClose={() => setActiveSection(null)} />}
      {activeSection === 'contact' && <ContactSection onClose={() => setActiveSection(null)} />}
    </group>
  );
};
