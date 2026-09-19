import { Link } from 'wouter';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  return (
    <>
      <section className="page-hero">
        <div className="container-xl-custom">
          <div className="breadcrumb-pill" data-aos="fade-up">
            <Link href="/" className="text-decoration-none text-white d-inline-flex"><i className="bi bi-house-door-fill"></i></Link>
            <i className="bi bi-bicycle"></i>
            <span>Shop</span>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-xl-custom text-center mb-5">
          <h1 data-aos="fade-up">Shop Our <span className="text-orange">Bikes</span></h1>
          <p className="text-muted mx-auto" style={{maxWidth: '560px'}} data-aos="fade-up">Browse our full lineup of bestselling bikes, from electric commuters to trail-ready hybrids.</p>
        </div>

        <div className="container-xl-custom">
          <div className="row g-4">
            <div className="col-lg-3" data-aos="fade-right">
              <div className="shop-sidebar">
                <h6 className="footer-heading">Categories</h6>
                <label className="filter-check"><input type="checkbox" defaultChecked /> Electric bicycles</label>
                <label className="filter-check"><input type="checkbox" /> Children bicycles</label>
                <label className="filter-check"><input type="checkbox" /> Mountain bikes</label>
                <label className="filter-check"><input type="checkbox" /> Road bikes</label>

                <h6 className="footer-heading">Brand</h6>
                <label className="filter-check"><input type="checkbox" /> Cannondale</label>
                <label className="filter-check"><input type="checkbox" /> Bianchi</label>
                <label className="filter-check"><input type="checkbox" /> Trek</label>

                <h6 className="footer-heading">Price</h6>
                <label className="filter-check"><input type="checkbox" defaultChecked /> Under $800</label>
                <label className="filter-check"><input type="checkbox" defaultChecked /> $800 – $1,500</label>
                <label className="filter-check"><input type="checkbox" /> $1,500+</label>
              </div>
            </div>

            <div className="col-lg-9" data-aos="fade-left">
              <div className="shop-toolbar">
                <span className="text-muted small">Showing all {products.length} results</span>
                <select className="form-control form-control-xtra w-auto">
                  <option>Sort by popularity</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                  <option>Sort by newest</option>
                </select>
              </div>

              <div className="row g-4" id="productGrid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="pagination-xtra">
                <a href="#" className="active">1</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
