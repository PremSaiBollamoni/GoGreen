import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@/context/LenisContext';

/** Resets scroll position on route change — Lenis intercepts native scroll,
 * so window.scrollTo alone won't work once it's active. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}
