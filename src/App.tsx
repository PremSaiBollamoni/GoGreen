import { BrowserRouter } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AppRouter } from '@/routes/AppRouter';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { LenisProvider } from '@/context/LenisContext';

function App() {
  return (
    <LenisProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </LenisProvider>
  );
}

export default App;
