<div align="center">
  <img src=".github/assets/banner.svg" alt="GoGreen Agritech Solutions — geodesic dome greenhouses, engineered and exported worldwide" width="100%" />
</div>

<div align="center">

[![React](https://img.shields.io/badge/React-19-0b1f14?style=for-the-badge&logo=react&logoColor=6fbe63)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-0b1f14?style=for-the-badge&logo=typescript&logoColor=6fbe63)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-0b1f14?style=for-the-badge&logo=vite&logoColor=6fbe63)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-0b1f14?style=for-the-badge&logo=tailwindcss&logoColor=6fbe63)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0b1f14?style=for-the-badge&logo=framer&logoColor=6fbe63)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-proprietary-0b1f14?style=for-the-badge)](#08--license)

</div>

<br />

<img src=".github/assets/chip-pitch.svg" height="46" alt="01 THE PITCH" />

Real vanilla vines grow **three times faster** inside a patented geodesic
dome than in an open field. GoGreen Agritech Solutions builds those domes —
along with the automated rotating trellis systems that spin each plant
toward the light — at Centurion University in India, and exports them to
ten-plus countries under a buyback agreement with an Australian technology
partner.

This repo is that company's website: a from-scratch build where every
design decision — the palette, the type, the section rhythm — is pulled
from the product itself, not a template.

<div align="center">
  <img src=".github/assets/statband.svg" alt="10+ export destinations, 3x vine growth rate, 350 cubic metre dome volume, 126 facets in the hero dome" width="100%" />
</div>

<div align="center">
  <img src=".github/assets/palette.svg" alt="Color palette: deepest, forest, canopy, sprout, mist, paper, gold" width="100%" />
</div>

<br />

<img src=".github/assets/chip-signature.svg" height="46" alt="02 THE SIGNATURE MOVE" />

The homepage hero doesn't use a stock icon for its dome. It **is** the dome —
generated from real polar-coordinate geometry (five concentric rings ×
fourteen radial segments, triangulated like an actual geodesic frame), then
assembled facet-by-facet with a staggered GSAP entrance on load. Open
[`GeodesicDome.tsx`](src/features/home/components/GeodesicDome.tsx) and
you'll find math, not an `<img>` tag.

```
ring 0 ──▶ apex, 14 facets, single point of origin
ring 1 ──▶ 28 facets, first full band
ring 2 ──▶ 28 facets
ring 3 ──▶ 28 facets
ring 4 ──▶ 28 facets, base ring, 126 triangles total
```

<br />

<img src=".github/assets/chip-inside.svg" height="46" alt="03 WHAT'S INSIDE" />

<div align="center">
  <img src=".github/assets/pipeline.svg" alt="Home → About → Technology → Products → Manufacturing → Exports → Leadership → Contact" width="100%" />
</div>

<details open>
<summary><b>🏠 Home</b> — the dome hero, live stats, and a preview rail of every section below</summary>
<br>
Everything the site does, condensed into one scroll: the assembling geodesic dome, headline stats pulled straight from the pilot program, and a preview of every page that follows.
</details>

<details>
<summary><b>🧭 About</b> — mission, timeline, and the ecosystem behind the company</summary>
<br>
Mission & values, a founding timeline, the five-company Centurion / Gram Tarang ecosystem, and UN SDG alignment — the credibility case for a university-incubated export venture.
</details>

<details>
<summary><b>⚙️ Technology</b> — the engineering behind Controlled Environment Agriculture</summary>
<br>
Four subsystems, explained as a system: climate control, the rotating trellis, the automation partner, and the patented dome geometry itself.
</details>

<details>
<summary><b>📦 Products</b> — full specification sheets, not marketing copy</summary>
<br>
The Dome Frame, Rotating Trellis, and Automation Control System, each on its own alternating light/dark section with a real spec list and an enquiry CTA.
</details>

<details>
<summary><b>🏭 Manufacturing</b> — the real eleven-stage fabrication line</summary>
<br>
Stock intake through dispatch crate, floor equipment with quantities, and raw materials down to their actual HS codes.
</details>

<details>
<summary><b>🌍 Exports</b> — where every unit ships, and why</summary>
<br>
Destination markets, the Advent Group (Australia) partnership terms, and the import → fabricate → export trade flow that makes the whole business model work.
</details>

<details>
<summary><b>👥 Leadership</b> — full director biographies</summary>
<br>
Not headshots and job titles — real multi-paragraph biographies pulled from the company's own project reports.
</details>

<details>
<summary><b>✉️ Contact</b> — a form that actually validates</summary>
<br>
React Hook Form + Zod, a business/career toggle, and a genuine success state — ready to wire to a live endpoint.
</details>

<br>

<img src=".github/assets/chip-stack.svg" height="46" alt="04 TECH STACK" />
<br><br>

<div align="center">

![React](https://img.shields.io/badge/React_19-0b1f14?style=flat-square&logo=react&logoColor=6fbe63)
![TypeScript](https://img.shields.io/badge/TypeScript-0b1f14?style=flat-square&logo=typescript&logoColor=6fbe63)
![Vite](https://img.shields.io/badge/Vite_8-0b1f14?style=flat-square&logo=vite&logoColor=6fbe63)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-0b1f14?style=flat-square&logo=tailwindcss&logoColor=6fbe63)
![React Router](https://img.shields.io/badge/React_Router_7-0b1f14?style=flat-square&logo=reactrouter&logoColor=6fbe63)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0b1f14?style=flat-square&logo=framer&logoColor=6fbe63)
![GSAP](https://img.shields.io/badge/GSAP-0b1f14?style=flat-square&logo=greensock&logoColor=6fbe63)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-0b1f14?style=flat-square&logo=reacthookform&logoColor=6fbe63)
![Zod](https://img.shields.io/badge/Zod-0b1f14?style=flat-square&logo=zod&logoColor=6fbe63)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-0b1f14?style=flat-square&logo=reactquery&logoColor=6fbe63)
![Axios](https://img.shields.io/badge/Axios-0b1f14?style=flat-square&logo=axios&logoColor=6fbe63)

</div>

<br />

<img src=".github/assets/chip-started.svg" height="46" alt="05 GETTING STARTED" />

```bash
npm install          # install dependencies
npm run dev           # start the dev server
npx tsc --noEmit        # type-check
npm run build             # production build
```

<br />

<img src=".github/assets/chip-structure.svg" height="46" alt="06 PROJECT STRUCTURE" />

```
src/
├── assets/               # logos, icons, images, fonts
├── components/
│   ├── common/            # PageHero, ScrollToTop, PlaceholderPage
│   ├── layout/             # Header, Footer
│   ├── ui/                  # Button, Container, Eyebrow, StatBlock, SectionNumeral…
│   ├── animations/          # Reveal — the one scroll-reveal pattern, used everywhere
│   └── forms/                # TextField, TextAreaField
├── features/
│   ├── home/                 # geodesic dome hero + every preview section
│   └── about/ technology/ products/ manufacturing/ exports/ leadership/ contact/
├── constants/              # company facts, products, leadership bios, export markets…
├── context/                # LenisContext — smooth-scroll provider
├── hooks/  lib/  routes/  styles/  types/
```

> Feature-based, not layer-based: each page owns its components end-to-end.
> Shared primitives live in `components/`. Nothing over ~300 lines.

<br />

<img src=".github/assets/chip-roadmap.svg" height="46" alt="07 ROADMAP" />

| Status | Item |
|---|---|
| 🔜 Next | Route-level code-splitting (current bundle: ~630 KB) |
| 🔜 Next | Wire the contact form to a live enquiry endpoint |
| 🧭 Planned | Interactive export map on the Exports page |
| 🧭 Planned | Careers & News sections |

<br />

<img src=".github/assets/cta.svg" alt="Fork it, run it, or just admire the dome." width="100%" />

<img src=".github/assets/chip-license.svg" height="46" alt="08 LICENSE" />

Proprietary — © GoGreen Agritech Solutions International Private Limited.

<div align="center">
  <br>
  <img src="src/assets/logos/gogreen-icon.png" alt="" width="40" />
  <br><br>
  <sub>Incubated at Centurion University of Technology &amp; Management, Vizianagaram, India.</sub>
</div>
