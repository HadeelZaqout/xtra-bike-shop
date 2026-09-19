import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="site-footer" id="siteFooter">
      <div className="footer-bar">
        <div className="container-xl-custom row g-3">
          <div className="col-md-4 footer-bar-item"><i className="bi bi-envelope-fill me-2 text-orange"></i>help@xtrabicycle.com</div>
          <div className="col-md-4 footer-bar-item"><i className="bi bi-telephone-fill me-2 text-orange"></i>+1 800 2345 6789</div>
          <div className="col-md-4 footer-bar-item"><i className="bi bi-geo-alt-fill me-2 text-orange"></i>#2354, Beverly Hills, LA</div>
        </div>
      </div>

      <div className="container-xl-custom section-pad pb-4">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6" data-aos="fade-up">
            <h6 className="footer-heading">Office</h6>
            <ul className="list-unstyled footer-office-list">
              <li><span className="oi"><i className="bi bi-geo-alt-fill"></i></span> 121 King Street, NewYork</li>
              <li><span className="oi"><i className="bi bi-telephone-fill"></i></span> +1 (800) 333 44 55</li>
              <li><span className="oi"><i className="bi bi-envelope-fill"></i></span> xtrabike@gmail.com</li>
              <li><span className="oi"><i className="bi bi-printer-fill"></i></span> +1 (800) 333 99 88</li>
              <li><span className="oi"><i className="bi bi-twitter-x"></i></span> @xtra_bikeshop</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h6 className="footer-heading">News</h6>
            <Link className="footer-news-item text-decoration-none" href="/blog">
              <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr10-600x392.png" alt="News" />
              <div>
                <h6>Top 7 Must have Accessories for...</h6>
                <span className="meta"><i className="bi bi-clock"></i> 10 June 2024 &nbsp; <i className="bi bi-eye"></i> 110</span>
              </div>
            </Link>
            <Link className="footer-news-item text-decoration-none" href="/blog">
              <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr11-600x392.png" alt="News" />
              <div>
                <h6>How to Choose the Perfect Bike for You...</h6>
                <span className="meta"><i className="bi bi-clock"></i> 10 June 2024 &nbsp; <i className="bi bi-eye"></i> 37</span>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h6 className="footer-heading">Shortcuts</h6>
            <div className="row">
              <div className="col-6">
                <ul className="footer-links">
                  <li><Link href="/"><i className="bi bi-chevron-right small"></i> Home</Link></li>
                  <li><Link href="/shop"><i className="bi bi-chevron-right small"></i> City Store</Link></li>
                  <li><Link href="/blog"><i className="bi bi-chevron-right small"></i> News</Link></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Clients</a></li>
                  <li><Link href="/contact"><i className="bi bi-chevron-right small"></i> Consultation</Link></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Publicity</a></li>
                  <li><Link href="/contact"><i className="bi bi-chevron-right small"></i> Support</Link></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="footer-links">
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Maps</a></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Careers</a></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Employees</a></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Teams</a></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Benefits</a></li>
                  <li><a href="#"><i className="bi bi-chevron-right small"></i> Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <h6 className="footer-heading">Working Hours</h6>
            <div className="footer-hours">
              <p className="text-muted">Our support available to help you 24 hours a day, seven days a week.</p>
              <p><span>Monday to Friday</span> <strong>8AM – 4PM</strong></p>
              <p><span>Saturday</span> <strong>8AM – 1PM</strong></p>
              <p><span>Sunday</span> <strong>Closed</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-xl-custom d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <span>Copyright &copy; 2026 Xtra Theme. All Rights Reserved.</span>
          <div className="payment-badges">
            <span>MC</span><span>PayPal</span><span>AMEX</span><span>BTC</span><span>VISA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
