import { Link } from 'wouter';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container-xl-custom">
          <div className="breadcrumb-pill" data-aos="fade-up">
            <Link href="/" className="text-decoration-none text-white d-inline-flex"><i className="bi bi-house-door-fill"></i></Link>
            <i className="bi bi-bicycle"></i>
            <span>Services</span>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-xl-custom text-center">
          <h1 className="mb-3" data-aos="fade-up">Our Popular <span className="text-orange">Bike Services</span></h1>
          <p className="text-muted mx-auto mb-5" style={{maxWidth: '620px'}} data-aos="fade-up">At Velocity Cycles, we take pride in delivering top notch services to keep your bike in peak condition</p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-aos="fade-up">
              <div className="service-card">
                <div className="service-icon-circle"><i className="bi bi-bicycle"></i></div>
                <h4>Tune-Up Packages</h4>
                <p>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card">
                <div className="service-icon-circle"><i className="bi bi-tools"></i></div>
                <h4>Checks &amp; Setup</h4>
                <p>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <div className="service-icon-circle"><i className="bi bi-gear-fill"></i></div>
                <h4>Chain Cleaning</h4>
                <p>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components.</p>
              </div>
            </div>
          </div>

          <div className="mt-5" data-aos="fade-up">
            <Link href="/contact" className="btn-xtra">Order your Services <i className="bi bi-arrow-right"></i></Link>
          </div>

          <div className="ride-connect-panel text-start" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <h2 className="mb-3">Ride. Learn. <span className="text-orange">Connect.</span></h2>
                <p className="text-muted mb-0">At Velocity Cycles, we take pride in delivering top notch services to keep your bike in peak condition.</p>
              </div>
              <div className="col-lg-7">
                <div className="row row-cols-3 g-4 text-center">
                  <div className="col mini-icon-item">
                    <div className="mini-icon-circle"><i className="bi bi-bicycle"></i></div>
                    <h6>Tune-Up Packages</h6>
                  </div>
                  <div className="col mini-icon-item">
                    <div className="mini-icon-circle"><i className="bi bi-tools"></i></div>
                    <h6>Checks &amp; Setup</h6>
                  </div>
                  <div className="col mini-icon-item">
                    <div className="mini-icon-circle"><i className="bi bi-gear-fill"></i></div>
                    <h6>Chain Cleaning</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
