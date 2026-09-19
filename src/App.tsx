import { useEffect } from 'react';
import AOS from 'aos';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SocialDock from './components/SocialDock';
import CartOffcanvas from './components/CartOffcanvas';
import WishlistModal from './components/WishlistModal';
import CartToast from './components/CartToast';
import MobileMenuOffcanvas from './components/MobileMenuOffcanvas';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import { ShopProvider } from './context/ShopContext';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/shop" component={Shop} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

function Preloader() {
  useEffect(() => {
    const handleLoad = () => {
      const pre = document.getElementById('preloader');
      if (pre) {
        setTimeout(() => pre.classList.add('hide'), 350);
      }
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div id="preloader">
      <div className="preloader-spinner"></div>
    </div>
  );
}

function AOSInit() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }, []);
  return null;
}

function App() {
  return (
    <ShopProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Preloader />
        <AOSInit />
        
        <AnnouncementBar />
        <Navbar />
        <MobileMenuOffcanvas />
        
        <Router />

        <Footer />
        <FloatingButtons />
        <SocialDock />
        <CartOffcanvas />
        <WishlistModal />
        <CartToast />

      </WouterRouter>
    </ShopProvider>
  );
}

export default App;
