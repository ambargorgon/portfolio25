declare module '*.glb';
declare module '*.gltf';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { BufferGeometryNode, MaterialNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: BufferGeometryNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}
