import { PageHero } from '@/components/common/PageHero';
import { PRODUCTS } from '@/constants/products';
import { ProductDetail } from './components/ProductDetail';

export function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="PRODUCTS"
        eyebrow="Products"
        title="Three systems, engineered to run as one growing environment."
        subtitle="Every dome we ship pairs structural frame, rotating trellis and automation control into a single, exportable unit."
      />
      {PRODUCTS.map((product, i) => (
        <ProductDetail key={product.code} product={product} index={i} />
      ))}
    </>
  );
}
