declare module '*.glb';
declare module '*.gltf';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { BufferGeometryNode, MaterialNode } from '@react-three/fiber';

declare namespace JSX {
  interface IntrinsicElements {
    meshLineMaterial: React.ComponentProps<'mesh'> & {
      color?: string | number | THREE.Color;
      lineWidth?: number;
      resolution?: [number, number];
      map?: THREE.Texture;
      repeat?: [number, number];
      depthTest?: boolean;
      useMap?: boolean;
    };
    meshLineGeometry: React.ComponentProps<'mesh'> & {
      points: THREE.Vector3[];
    };
  }
}
