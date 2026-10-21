import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '3dmodels',
    category: '3D DESIGN · CHARACTER MODELS',
    title: '3D Models Collection',
    description:
      'A showcase of Disney-inspired 3D character models including Moana, featuring detailed modeling, texturing, and character expressions.',
    chips: ['3D Modeling', 'Character Design', 'Figma 3D', 'Disney Characters'],
    type: 'standard',
    visualType: '3dmodels',
    figmaUrl: 'https://www.figma.com/design/j9xkBo9nl1KVwyUC2dR7VF/3D-models?node-id=0-1&p=f&t=tR9tBSbFcsbxt0XW-0',
    externalUrl: 'https://www.figma.com/proto/j9xkBo9nl1KVwyUC2dR7VF/3D-models?node-id=1-2&p=f&t=tR9tBSbFcsbxt0XW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 'prms',
    category: 'ENTERPRISE UX · MICROSERVICE',
    title: 'PRMS service experience',
    description:
      'Clearer workflows for a procurement microservice inside an enterprise ERP, helping users understand requests, approvals, and supplier activity.',
    chips: ['Workflow design', 'Dashboard UI', 'React', 'INSA internship'],
    type: 'standard',
    visualType: 'prms',
  },
  {
    id: 'figma',
    category: 'UI/UX · FIGMA',
    title: 'Interface playground',
    description:
      'A growing set of sample screens, reusable components, and interaction ideas exploring hierarchy, accessibility, and friendly visual systems.',
    chips: ['Wireframes', 'Components', 'Prototyping'],
    type: 'standard',
    visualType: 'figma',
  },
  {
    id: 'adey',
    category: 'BRANDING · WEBSITE DESIGN',
    title: 'Adey Coffee & Pastry',
    description:
      'A warm website concept inspired by Ethiopian coffee culture, fresh pastries, and a welcoming contemporary café experience.',
    chips: ['Brand direction', 'Color palette', 'Typography', 'Responsive web'],
    type: 'full',
    visualType: 'adey',
    figmaUrl: 'https://www.figma.com/design/VPoGr6p4NVxmDn2fQbuF4Z/Adey-Coffee-AND-Pastery?node-id=0-1&p=f&t=zxl3KY6vfBF8cIdD-0',
    externalUrl: 'https://www.figma.com/proto/VPoGr6p4NVxmDn2fQbuF4Z/Adey-Coffee-AND-Pastery?node-id=2-56&p=f&t=diSXZariM4DNzFOs-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A416',
  },
];
