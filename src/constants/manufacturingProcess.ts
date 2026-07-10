export const MANUFACTURING_STEPS = [
  {
    order: 1,
    name: 'Receive Stock',
    detail: 'Imported steel, aluminium & agri-plastic intake',
    icon: 'truck',
  },
  {
    order: 2,
    name: 'Store Materials',
    detail: 'Hydraulic trolley to material stand',
    icon: 'warehouse',
  },
  { order: 3, name: 'Cut & Sort', detail: 'Band saw / fiber laser cutting', icon: 'scissors' },
  { order: 4, name: 'Press & Punch', detail: '20-tonne hydraulic press', icon: 'hammer' },
  { order: 5, name: 'Deburr', detail: 'Sanding for panel-edge precision', icon: 'sparkles' },
  {
    order: 6,
    name: 'Angle Bend',
    detail: 'Frame geometry formed to spec',
    icon: 'corner-down-right',
  },
  { order: 7, name: 'Letter Punch', detail: 'Component identification marks', icon: 'stamp' },
  {
    order: 8,
    name: 'Final Inspection',
    detail: 'Quality control checkpoint',
    icon: 'circle-check',
  },
  { order: 9, name: 'Package', detail: 'Dome box assembly', icon: 'package' },
  {
    order: 10,
    name: 'Inventory & Store',
    detail: 'Recorded to product store',
    icon: 'clipboard-list',
  },
  { order: 11, name: 'Dispatch', detail: 'Crated for global export', icon: 'ship' },
] as const;
