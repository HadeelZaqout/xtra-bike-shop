import { Link } from 'wouter';

export default function MobileMenuOffcanvas() {
  return (
    <div className="offcanvas offcanvas-start offcanvas-menu" tabIndex={-1} id="menuOffcanvas">
      <div className="offcanvas-header">
        <span className="brand-logo"><i className="bi bi-bicycle"></i> XTRA</span>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
          <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
          <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/shop">Shop</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/faq">FAQ</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
        </ul>
        <Link href="/services" className="btn-help mt-4 d-inline-flex"><i className="bi bi-bicycle"></i> Help &amp; Service</Link>
      </div>
    </div>
  );
}
