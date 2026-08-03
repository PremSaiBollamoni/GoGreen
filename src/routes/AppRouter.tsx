import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/features/home/HomePage';
import { AboutPage } from '@/features/about/AboutPage';
import { TechnologyPage } from '@/features/technology/TechnologyPage';
import { ProductsPage } from '@/features/products/ProductsPage';
import { ManufacturingPage } from '@/features/manufacturing/ManufacturingPage';
import { ExportsPage } from '@/features/exports/ExportsPage';
import { OurTeamPage } from '@/features/team/OurTeamPage';
import { ContactPage } from '@/features/contact/ContactPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/manufacturing" element={<ManufacturingPage />} />
      <Route path="/exports" element={<ExportsPage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
