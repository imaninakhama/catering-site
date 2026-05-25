import { useState, useEffect } from 'react';
import useRouter from './hooks/useRouter';  // if default export
import Nav from './components/Nav';
import SiteFooter from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagingPage';
import BistroPage from './pages/SnackBistro';    // fixed spelling
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import { PARCH } from './data/constants';  // fixed import

const pageAnimationStyles = `
.page-enter {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;


export default function App() {
  const { route, navigate } = useRouter();
  const [welcomed, setWelcomed] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const [prevRoute, setPrevRoute] = useState(route);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);
  useEffect(() => {
    if (route !== prevRoute) { setPageKey(k => k + 1); setPrevRoute(route); }
  }, [route, prevRoute]);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => { setWelcomed(true); navigate("/"); }, 800);
  };
  const goTo = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!welcomed) return <WelcomeScreen mounted={mounted} leaving={leaving} onEnter={handleEnter} />;

  const pages = {
    "/about": <AboutPage />,
    "/packages": <PackagesPage />,
    "/bistro": <BistroPage goTo={goTo} />,
    "/gallery": <GalleryPage />,
    "/contact": <ContactPage />
  };

  return (
    <div className="min-h-screen font-serif" style={{ background: PARCH, color: "#2A1A0A" }}>
      <style>{pageAnimationStyles}</style>
      <Nav current={route} goTo={goTo} />
      <div key={pageKey} className="page-enter">
        {pages[route] || <HomePage goTo={goTo} />}
      </div>
      <SiteFooter goTo={goTo} />
    </div>
  );
}