import { Link } from 'wouter';

export default function Contact() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    const msg = document.getElementById('contactFormMsg');
    if (msg) {
      msg.classList.remove('d-none');
      setTimeout(() => msg.classList.add('d-none'), 4000);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container-xl-custom">
          <div className="breadcrumb-pill" data-aos="fade-up">
            <Link href="/" className="text-decoration-none text-white d-inline-flex"><i className="bi bi-house-door-fill"></i></Link>
            <i className="bi bi-bicycle"></i>
            <span>Contact</span>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-xl-custom text-center mb-5">
          <h1 data-aos="fade-up">Get in <span className="text-orange">Touch</span></h1>
          <p className="text-muted mx-auto" style={{maxWidth: '560px'}} data-aos="fade-up">Have a question about a bike, a service, or your order? Reach out and our team will get back to you shortly.</p>
        </div>

        <div className="container-xl-custom">
          <div className="row g-5">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="contact-card">
                <span className="oi"><i className="bi bi-twitter-x"></i></span>
                <div>
                  <h6 className="mb-0">Social media</h6>
                  <span>@xtra_theme_bike</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="oi"><i className="bi bi-facebook"></i></span>
                <div>
                  <h6 className="mb-0">Facebook</h6>
                  <span>@xtratheme</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="oi"><i className="bi bi-envelope-fill"></i></span>
                <div>
                  <h6 className="mb-0">Support</h6>
                  <span>support@yourwebsite.com</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="oi"><i className="bi bi-telephone-fill"></i></span>
                <div>
                  <h6 className="mb-0">Phone</h6>
                  <span>+1 (800) 333 44 55</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="oi"><i className="bi bi-geo-alt-fill"></i></span>
                <div>
                  <h6 className="mb-0">Office</h6>
                  <span>121 King Street, NewYork</span>
                </div>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left">
              <div className="contact-form-panel">
                <h4 className="mb-4">Send us a message</h4>
                <form id="contactForm" onSubmit={handleContactSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-xtra" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control form-control-xtra" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-xtra" placeholder="Phone" />
                    </div>
                    <div className="col-md-6">
                      <select className="form-control form-control-xtra">
                        <option>Business Department</option>
                        <option>Support Department</option>
                        <option>Sales Department</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <textarea className="form-control form-control-xtra" rows={5} placeholder="Your Question"></textarea>
                  </div>
                  <button type="submit" className="btn-xtra">Submit</button>
                  <p className="text-success small mt-3 d-none" id="contactFormMsg"><i className="bi bi-check-circle-fill"></i> Thanks! Your message has been sent.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
