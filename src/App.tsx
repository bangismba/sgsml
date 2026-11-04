import { useState, useEffect, type ComponentType } from 'react';
import { PAGES } from './data';
import useTheme from './hooks/useTheme';
import Navbar from './pages/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [theme, toggle] = useTheme();

  const get = () =>
    PAGES.some((p) => p[0] === location.hash.slice(1))
      ? location.hash.slice(1)
      : 'home';

  const [page, setPage] = useState(get);

  useEffect(() => {
    const h = () => {
      setPage(get());
      window.scrollTo(0, 0);
    };
    addEventListener('hashchange', h);
    return () => removeEventListener('hashchange', h);
  }, []);

  const go = (p: string) => {
    location.hash = p;
  };

  const View: ComponentType<{ go: (p: string) => void }> = (
    {
      home: Home,
      about: About,
      services: Services,
      projects: Projects,
      equipment: Equipment,
      contact: Contact,
    } as Record<string, ComponentType<{ go: (p: string) => void }>>
  )[page];

  return (
    <>
      <Navbar page={page} go={go} theme={theme} toggle={toggle} />
      <main>
        <View go={go} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;