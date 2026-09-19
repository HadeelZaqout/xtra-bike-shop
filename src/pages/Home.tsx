import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    const msg = document.getElementById('newsletterMsg');
    if (msg) {
      msg.classList.remove('d-none');
      setTimeout(() => msg.classList.add('d-none'), 4000);
    }
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="container-xl-custom">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <h1 className="mb-4">XTRA Bicycle is not just <br className="d-none d-lg-block" />a <span className="text-orange">Regular Bicycle</span></h1>
              <p className="lead mb-4">A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted.</p>
              <div className="hero-price mb-4"><span className="dollar">$</span> 1749</div>
              <div className="d-flex align-items-center gap-3 flex-wrap mb-4 mb-lg-0">
                <Link href="/shop" className="btn-xtra">See full details</Link>
                <em className="text-muted" style={{fontStyle: 'italic', fontSize: '0.9rem'}}>OR</em>
                <Link href="/shop" className="hero-colors-link">Bike have different colors</Link>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="hero-img-wrap">
                <div className="hero-photo-panel">
                  <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/hero-bg-nature.png" alt="Nature background" />
                </div>
                <img className="bike-img" src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-1.png" alt="XTRA electric bicycle" />
                <span className="feature-tag tag-1"><span className="tag-thumb"></span> Comfortable Seat</span>
                <span className="feature-tag tag-2"><span className="tag-thumb"></span> High-Quality Wheels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="revolution section-pad" id="about">
        <div className="container-xl-custom">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="revolution-img">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-3-1.png" alt="Revolution bicycle" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="mb-4">XTRA Bicycle — It's Not Just a Bike, It's a <span className="text-orange">Revolution</span></h2>
              <p className="text-muted mb-4">A bicycle, also called a pedal cycle, bike or cycle, is a human powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
              <div className="row row-cols-2 g-3">
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Free test rides</div></div>
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Expert repairs</div></div>
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Custom builds</div></div>
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Gear upgrades</div></div>
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Electric bikes</div></div>
                <div className="col"><div className="check-pill"><span className="check-circle"><i className="bi bi-check-lg"></i></span> Free Shipping</div></div>
              </div>
            </div>
          </div>

          <div className="ride-cta-banner" data-aos="fade-up">
            <h3>It's a great day for a ride.</h3>
            <p>A bicycle, also called a pedal cycle, bike or cycle, is a human powered</p>
            <Link href="/shop" className="btn-dark-pill">Explore Products</Link>
          </div>
        </div>
      </section>

      <section className="bestsellers section-pad" id="shop-preview">
        <div className="marquee-wrap mb-n5">
          <div className="marquee-track">
            <span>MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; </span>
            <span>MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; </span>
            <span>MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; </span>
            <span>MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; MEET OUR BESTSELLERS &nbsp; </span>
          </div>
        </div>

        <div className="container-xl-custom position-relative">
          <h2 className="text-center mb-5" data-aos="fade-up">Meet our <span className="text-orange">Bestsellers</span></h2>

          <div className="row g-4" id="productGrid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link href="/shop" className="view-all-link"><span className="vlink-icon"><i className="bi bi-bicycle"></i></span> View all products</Link>
          </div>
        </div>
      </section>

      <section className="categories section-pad">
        <div className="container-xl-custom">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <Link href="/shop" className="category-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/package-1.jpg" alt="Electric bicycles" />
                <div className="category-overlay">
                  <div className="category-text flex-grow-1">
                    <div className="category-count">+120 bicycles</div>
                    <div className="category-title">Electric bicycles</div>
                  </div>
                  <div className="category-arrow"><i className="bi bi-chevron-right"></i></div>
                </div>
              </Link>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="120">
              <Link href="/shop" className="category-card">
                <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/package-2.jpg" alt="Children bicycles" />
                <div className="category-overlay">
                  <div className="category-text flex-grow-1">
                    <div className="category-count">+120 bicycles</div>
                    <div className="category-title">Children bicycles</div>
                  </div>
                  <div className="category-arrow"><i className="bi bi-chevron-right"></i></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section-pad">
        <div className="container-xl-custom">
          <div className="testimonial-split">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-6">
                <div className="p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
                  <h2 className="mb-4" data-aos="fade-up">What say <span className="text-orange">Pro People</span></h2>

                  <div id="tSlides">
                    <div className={`t-slide ${slideIdx === 0 ? 'active' : ''}`} data-index="0">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img className="testimonial-avatar" src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/t6.jpg" alt="Antonio Benz" />
                        <div>
                          <div className="t-name">Antonio Benz</div>
                          <div className="t-role">Bike designer</div>
                        </div>
                      </div>
                      <p className="t-quote mb-3">A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
                    </div>
                    <div className={`t-slide ${slideIdx === 1 ? 'active' : ''}`} data-index="1">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img className="testimonial-avatar" src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/t4.jpg" alt="Sarah Lisgun" />
                        <div>
                          <div className="t-name">Sarah Lisgun</div>
                          <div className="t-role">Bike Rider</div>
                        </div>
                      </div>
                      <p className="t-quote mb-3">A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="quote-mark">&ldquo;</span>
                    <div className="d-flex gap-2">
                      <button className="t-nav-btn" id="tPrev" aria-label="Previous" onClick={() => setSlideIdx((prev) => (prev - 1 + 2) % 2)}><i className="bi bi-arrow-left"></i></button>
                      <button className="t-nav-btn" id="tNext" aria-label="Next" onClick={() => setSlideIdx((prev) => (prev + 1) % 2)}><i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-panel h-100 p-5">
                  <img src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-1.png" alt="Featured bike" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-bikes section-pad">
        <div className="marquee-wrap mb-n5">
          <div className="marquee-track">
            <span>YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; </span>
            <span>YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; </span>
            <span>YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; </span>
            <span>YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; YOUR SPECIAL BIKES &nbsp; </span>
          </div>
        </div>
        <div className="container-xl-custom text-center position-relative">
          <h2 className="mb-3" data-aos="fade-up">Get your own <span className="text-orange">Special Bike</span></h2>
          <p className="text-muted mb-4" data-aos="fade-up">Subscribe to our newsletter to get new Bike Offers</p>
          <form className="newsletter-form" id="newsletterForm" data-aos="fade-up" onSubmit={handleNewsletter}>
            <input type="email" required placeholder="Enter your email ..." />
            <button type="submit" className="btn-xtra text-uppercase"><i className="bi bi-envelope"></i> Join now</button>
          </form>
          <p className="text-success small mt-3 d-none" id="newsletterMsg"><i className="bi bi-check-circle-fill"></i> Thanks! You are subscribed.</p>
        </div>
      </section>
    </>
  );
}
