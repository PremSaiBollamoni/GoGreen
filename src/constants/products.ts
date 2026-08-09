import automationControl from '@/assets/products/automation-control.jpeg';
import domeFrame from '@/assets/products/dome-frame.jpg';
import rotatingTrellis from '@/assets/products/rotating-trellis.jpeg';

export const PRODUCTS = [
  {
    code: 'GH-DOME',
    icon: 'hexagon',
    image: domeFrame,
    name: 'Geodesic Dome Frame',
    description:
      'Galvanized steel and anodized aluminium frame with reinforced agricultural-plastic cladding, sized to a 350 m³ pilot-proven volume.',
    specs: [
      'Grade C250 galvanized steel tube',
      'Anodized aluminium round & square extrusion',
      'Steel-reinforced agricultural plastic cladding',
      'Mobile-device climate control',
      'Patented geometry, Australian-licensed design',
    ],
  },
  {
    code: 'GH-TRELLIS',
    icon: 'refresh-cw',
    image: rotatingTrellis,
    name: 'Rotating Plant Trellis',
    description:
      'Vertical, soil-filled trellis column engineered for three-dimensional root structures, rotating for uniform light exposure.',
    specs: [
      'Automated rotation drive',
      'Schneider Electric automation control',
      '3× growth rate vs. open-field cultivation',
      'Soil-filled column for full-length rooting',
      'Synced to dome climate control',
    ],
  },
  {
    code: 'GH-CTRL',
    icon: 'cpu',
    image: automationControl,
    name: 'Automation Control System',
    description:
      'The monitoring and actuation layer connecting dome climate, trellis rotation and irrigation to a single mobile interface.',
    specs: [
      'Remote monitoring via mobile device',
      'Climate & rotation synchronisation',
      'Modular sensor suite',
      'Manufactured in-house at Vizianagaram',
      'Field-serviceable, low-maintenance design',
    ],
  },
] as const;
