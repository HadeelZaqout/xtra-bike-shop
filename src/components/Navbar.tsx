import * as bootstrap from 'bootstrap';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { useShop } from '../context/ShopContext';

export default function Navbar() {
  const [location] = useLocation();
  const { state } = useShop();
  const navRef = useRef<HTMLElement>(null);

  const cartCount = Object.values(state.cart).reduce((a, b) => a + b, 0);
  const wishlistCount = state.wishlist.size;

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const scrolled = window.scrollY > 40;
        if (scrolled) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      const dropdowns = document.querySelectorAll('.nav-item.dropdown');
      dropdowns.forEach((item) => {
        const toggle = item.querySelector('.dropdown-toggle');
        const menu = item.querySelector('.dropdown-menu');
        if (!toggle || !menu) return;
        let closeTimer: NodeJS.Timeout;
        const dd = bootstrap.Dropdown.getOrCreateInstance(toggle);
        
        const handleMouseEnter = () => {
          clearTimeout(closeTimer);
          dd.show();
        };
        const handleMouseLeave = () => {
          closeTimer = setTimeout(() => dd.hide(), 150);
        };
        
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
          item.removeEventListener('mouseenter', handleMouseEnter);
          item.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    }
  }, []);

  const handleNestedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const submenu = e.currentTarget.nextElementSibling;
    submenu?.classList.toggle('show');
  };

  const handleNestedEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth >= 992) {
      e.currentTarget.nextElementSibling?.classList.add('show');
    }
  };

  const handleDropendLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    if (window.innerWidth >= 992) {
      const submenu = e.currentTarget.querySelector('.dropdown-submenu-xtra');
      submenu?.classList.remove('show');
    }
  };

  return (
    <header className="xtra-navbar" id="mainNav" ref={navRef}>
      <div className="container-xl-custom d-flex align-items-center justify-content-between">
        <Link href="/" className="brand-logo"><i className="bi bi-bicycle"></i> XTRA</Link>

        <nav className="d-none d-lg-flex align-items-center">
          <ul className="nav align-items-center mb-0">
            <li className="nav-item"><Link href="/" className={`xtra-nav-link ${location === '/' ? 'active' : ''}`}>Home</Link></li>
            <li className="nav-item dropdown">
              <a className="xtra-nav-link dropdown-toggle" href="/#about" data-bs-toggle="dropdown">About</a>
              <ul className="dropdown-menu dropdown-menu-xtra">
                <li><a className="dropdown-item" href="/#about">Submenu 1</a></li>
                <li className="dropend" onMouseLeave={handleDropendLeave}>
                  <a className="dropdown-item d-flex justify-content-between align-items-center" href="/#about" id="ddNested" data-bs-toggle="dropdown" onClick={handleNestedClick} onMouseEnter={handleNestedEnter}>Dropdown menu <i className="bi bi-chevron-right small"></i></a>
                  <ul className="dropdown-menu dropdown-submenu-xtra dropdown-menu-xtra">
                    <li><a className="dropdown-item" href="/#about">Nested link 1</a></li>
                    <li><a className="dropdown-item" href="/#about">Nested link 2</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="/#about">Submenu 2</a></li>
              </ul>
            </li>
            <li className="nav-item"><Link href="/services" className={`xtra-nav-link ${location === '/services' ? 'active' : ''}`}>Services</Link></li>
            <li className="nav-item"><Link href="/blog" className={`xtra-nav-link ${location === '/blog' ? 'active' : ''}`}>Blog</Link></li>
            <li className="nav-item"><Link href="/shop" className={`xtra-nav-link ${location === '/shop' ? 'active' : ''}`}>Shop</Link></li>
            <li className="nav-item"><Link href="/faq" className={`xtra-nav-link ${location === '/faq' ? 'active' : ''}`}>FAQ</Link></li>
            <li className="nav-item"><Link href="/contact" className={`xtra-nav-link ${location === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>
        </nav>

        <div className="d-flex align-items-center gap-2 gap-md-3">
          <Link href="/services" className="btn-help d-none d-md-inline-flex"><i className="bi bi-bicycle"></i> Help &amp; Service</Link>
          <button className="icon-btn" id="wishlistBtn" aria-label="Wishlist">
            <i className="bi bi-heart"></i>
            <span className="icon-badge" id="wishlistCount">{wishlistCount}</span>
          </button>
          <button className="icon-btn" id="cartBtn" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-label="Cart">
            <i className="bi bi-cart3"></i>
            <span className="icon-badge" id="cartCount">{cartCount}</span>
          </button>
          <button className="icon-btn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-label="Menu">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
