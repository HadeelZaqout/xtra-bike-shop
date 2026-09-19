import { Link } from 'wouter';

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container-xl-custom">
          <div className="breadcrumb-pill" data-aos="fade-up">
            <Link href="/" className="text-decoration-none text-white d-inline-flex"><i className="bi bi-house-door-fill"></i></Link>
            <i className="bi bi-bicycle"></i>
            <span>Blog</span>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-xl-custom text-center mb-5">
          <h1 data-aos="fade-up">Our <span className="text-orange">Blog</span></h1>
          <p className="text-muted mx-auto" style={{maxWidth: '560px'}} data-aos="fade-up">News, guides, and tips from the XTRA team to help you get the most out of every ride.</p>
        </div>
        <div className="container-xl-custom">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr10-600x392.png" alt="Top 7 Must-Have Accessories for Every Rider" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Accessories</span><span><i className="bi bi-clock"></i> 10 June 2024</span><span><i className="bi bi-eye"></i> 110</span></div>
                  <h5>Top 7 Must-Have Accessories for Every Rider</h5>
                  <p className="text-muted small mb-3">From lights to locks, here's the gear every cyclist should own before their next ride.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr11-600x392.png" alt="How to Choose the Perfect Bike for You" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Buying Guide</span><span><i className="bi bi-clock"></i> 10 June 2024</span><span><i className="bi bi-eye"></i> 37</span></div>
                  <h5>How to Choose the Perfect Bike for You</h5>
                  <p className="text-muted small mb-3">Frame size, riding style, and budget — here's how to narrow down your options.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-1.png" alt="Beginner's Guide to Bike Maintenance" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Maintenance</span><span><i className="bi bi-clock"></i> 3 June 2024</span><span><i className="bi bi-eye"></i> 82</span></div>
                  <h5>Beginner's Guide to Bike Maintenance</h5>
                  <p className="text-muted small mb-3">Keep your bike running smoothly with these simple at-home maintenance habits.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-3-1.png" alt="5 Tips for Safe Night Riding" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Safety</span><span><i className="bi bi-clock"></i> 28 May 2024</span><span><i className="bi bi-eye"></i> 64</span></div>
                  <h5>5 Tips for Safe Night Riding</h5>
                  <p className="text-muted small mb-3">Visibility and preparation are everything when the sun goes down. Here's how to stay safe.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/package-1.jpg" alt="Electric vs Traditional Bikes: What to Know" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Electric Bikes</span><span><i className="bi bi-clock"></i> 20 May 2024</span><span><i className="bi bi-eye"></i> 153</span></div>
                  <h5>Electric vs Traditional Bikes: What to Know</h5>
                  <p className="text-muted small mb-3">Weighing range, cost, and ride feel to help you decide which is right for you.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="blog-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/package-2.jpg" alt="Preparing Your Bike for Long-Distance Touring" />
                <div className="blog-card-body">
                  <div className="blog-meta"><span><i className="bi bi-folder2"></i> Touring</span><span><i className="bi bi-clock"></i> 12 May 2024</span><span><i className="bi bi-eye"></i> 45</span></div>
                  <h5>Preparing Your Bike for Long-Distance Touring</h5>
                  <p className="text-muted small mb-3">A pre-trip checklist covering tires, gearing, and packing for multi-day rides.</p>
                  <Link href="/blog" className="blog-read-more">Read more <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-xtra">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#"><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>
    </>
  );
}
