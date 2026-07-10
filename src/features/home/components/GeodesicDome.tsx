import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

const RING_COUNT = 5;
const SEG_COUNT = 14;
const RADIUS = 230;
const CX = 250;
const CY = 250;

const RING_FILLS = ['#8fd47f', '#6fbe63', '#4f9c53', '#2f6b44', '#173d29'];

interface Facet {
  points: string;
  centroid: { x: number; y: number };
  ring: number;
  key: string;
}

function polar(r: number, thetaDeg: number) {
  const t = (thetaDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(t), y: CY - r * Math.sin(t) };
}

function buildFacets(): Facet[] {
  const facets: Facet[] = [];
  for (let i = 0; i < RING_COUNT; i++) {
    const r0 = (RADIUS * i) / RING_COUNT;
    const r1 = (RADIUS * (i + 1)) / RING_COUNT;
    for (let j = 0; j < SEG_COUNT; j++) {
      const t0 = 180 - (j * 180) / SEG_COUNT;
      const t1 = 180 - ((j + 1) * 180) / SEG_COUNT;
      const p1 = polar(r0, t0);
      const p2 = polar(r0, t1);
      const p3 = polar(r1, t0);
      const p4 = polar(r1, t1);

      const pushTri = (a: typeof p1, b: typeof p1, c: typeof p1, suffix: string) => {
        facets.push({
          points: `${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`,
          centroid: { x: (a.x + b.x + c.x) / 3, y: (a.y + b.y + c.y) / 3 },
          ring: i,
          key: `${i}-${j}-${suffix}`,
        });
      };

      if (i === 0) {
        pushTri(p1, p3, p4, 'a');
      } else {
        pushTri(p1, p3, p4, 'a');
        pushTri(p1, p4, p2, 'b');
      }
    }
  }
  return facets;
}

export function GeodesicDome() {
  const containerRef = useRef<SVGSVGElement>(null);
  const facets = useMemo(buildFacets, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = gsap.utils.toArray<SVGPolygonElement>('.dome-facet', containerRef.current);
    if (prefersReducedMotion) {
      gsap.set(els, { opacity: 1, scale: 1, x: 0, y: 0 });
      return;
    }

    gsap.set(els, {
      transformOrigin: '50% 50%',
      opacity: 0,
      scale: 0.15,
      x: (i: number) => (facets[i].centroid.x - CX) * 0.6,
      y: (i: number) => (facets[i].centroid.y - (CY - RADIUS * 0.5)) * 0.6,
    });
    const tween = gsap.to(els, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: { each: 0.009, from: 'random' },
      delay: 0.25,
    });
    return () => {
      tween.kill();
    };
  }, [facets]);

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 500 270"
      className="w-full max-w-xl"
      role="img"
      aria-label="Animated illustration of a triangulated geodesic dome assembling from individual panels"
    >
      {facets.map((f) => (
        <polygon
          key={f.key}
          className="dome-facet"
          style={{ transformBox: 'fill-box' }}
          points={f.points}
          fill={RING_FILLS[f.ring]}
          fillOpacity={0.92}
          stroke="#0b1f14"
          strokeOpacity={0.35}
          strokeWidth={0.75}
        />
      ))}
      <line x1={20} y1={CY} x2={480} y2={CY} stroke="#b99a5b" strokeOpacity={0.5} strokeWidth={1} />
    </svg>
  );
}
