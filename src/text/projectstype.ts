// ./projects/index.ts

export interface GalleryItem {
    type: "image" | "video";
    src: string;
  }
  
  export interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    about: string;
    rol: string;
    date: string;
    team: string;
    target: string;
    tags: string[];
    gallery?: GalleryItem[];
    codeUrl?: string;
    videoUrl?: string;
    prototypeUrl?: string;
    linkUrl?: string;
    reverse?: boolean;
  }
  