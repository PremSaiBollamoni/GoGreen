export const EFFICIENCY_METRICS = [
  {
    label: 'Vine Growth Rate',
    value: '3×',
    detail: 'vs. open-field plantation cultivation',
  },
  {
    label: 'Growing Volume',
    value: '350 m³',
    detail: 'per pilot-proven dome unit',
  },
  {
    label: 'Control Surfaces',
    value: '4',
    detail: 'temperature, humidity, light & rotation',
  },
] as const;

export const SENSOR_SUITE = [
  'Ambient temperature & humidity',
  'Light intensity (PAR)',
  'Soil moisture, per trellis column',
  'Rotation position & drive load',
  'Mobile-device climate override',
] as const;
