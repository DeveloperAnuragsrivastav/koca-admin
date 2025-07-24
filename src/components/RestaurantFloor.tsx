
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TableProps {
  position: [number, number, number];
  tableNumber: number;
  isSelected: boolean;
  isAvailable: boolean;
  onSelect: (tableNumber: number) => void;
}

function Table({ position, tableNumber, isSelected, isAvailable, onSelect }: TableProps) {
  const tableRef = useRef<THREE.Mesh>(null);
  const chairRefs = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    if (isSelected && tableRef.current) {
      tableRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.1;
    }
  });

  const handleClick = () => {
    if (isAvailable) {
      onSelect(tableNumber);
    }
  };

  const tableColor = isSelected ? '#FFD700' : isAvailable ? '#8B4513' : '#666666';
  const chairColor = isSelected ? '#FFD700' : '#654321';

  return (
    <group onClick={handleClick}>
      {/* Table */}
      <mesh ref={tableRef} position={position}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 16]} />
        <meshStandardMaterial 
          color={tableColor} 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>
      
      {/* Chairs around the table */}
      {[0, 1, 2, 3].map((chairIndex) => {
        const angle = (chairIndex * Math.PI) / 2;
        const chairX = position[0] + Math.cos(angle) * 1.2;
        const chairZ = position[2] + Math.sin(angle) * 1.2;
        
        return (
          <group key={chairIndex}>
            {/* Chair seat */}
            <mesh 
              ref={(el) => {
                if (el) chairRefs.current[chairIndex] = el;
              }}
              position={[chairX, position[1] - 0.3, chairZ]}
            >
              <boxGeometry args={[0.4, 0.1, 0.4]} />
              <meshStandardMaterial color={chairColor} />
            </mesh>
            {/* Chair back */}
            <mesh position={[chairX, position[1] + 0.1, chairZ]}>
              <boxGeometry args={[0.4, 0.8, 0.1]} />
              <meshStandardMaterial color={chairColor} />
            </mesh>
          </group>
        );
      })}
      
      {/* Table number text */}
      <Text
        position={[position[0], position[1] + 0.2, position[2]]}
        fontSize={0.3}
        color={isSelected ? '#000000' : '#FFFFFF'}
        anchorX="center"
        anchorY="middle"
      >
        {tableNumber}
      </Text>
    </group>
  );
}

interface RestaurantFloorProps {
  selectedTable: number | null;
  onTableSelect: (tableNumber: number) => void;
  availableTables: number[];
}

const RestaurantFloor = ({ selectedTable, onTableSelect, availableTables }: RestaurantFloorProps) => {
  const tables = [
    { number: 1, position: [-3, 0, -2] as [number, number, number] },
    { number: 2, position: [0, 0, -2] as [number, number, number] },
    { number: 3, position: [3, 0, -2] as [number, number, number] },
    { number: 4, position: [-3, 0, 0] as [number, number, number] },
    { number: 5, position: [3, 0, 0] as [number, number, number] },
    { number: 6, position: [-3, 0, 2] as [number, number, number] },
    { number: 7, position: [0, 0, 2] as [number, number, number] },
    { number: 8, position: [3, 0, 2] as [number, number, number] },
  ];

  return (
    <div className="w-full h-96 bg-black rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 8, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={0.8} />
        
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
          <planeGeometry args={[12, 8]} />
          <meshStandardMaterial color="#2C1810" />
        </mesh>
        
        {/* Tables */}
        {tables.map((table) => (
          <Table
            key={table.number}
            position={table.position}
            tableNumber={table.number}
            isSelected={selectedTable === table.number}
            isAvailable={availableTables.includes(table.number)}
            onSelect={onTableSelect}
          />
        ))}
        
        <OrbitControls 
          enablePan={false} 
          minDistance={5} 
          maxDistance={15}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default RestaurantFloor;
