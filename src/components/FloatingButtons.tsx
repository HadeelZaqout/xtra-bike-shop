import { useEffect, useState } from 'react';
import { Link } from 'wouter';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a href="#" className="fab fab-chat" aria-label="Chat"><i className="bi bi-emoji-smile"></i></a>
      <Link href="/contact" className="fab fab-mail" aria-label="Email"><i className="bi bi-envelope-fill"></i></Link>
      <button 
        className={`fab fab-top ${showTop ? 'show' : ''}`} 
        id="backToTop" 
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}
