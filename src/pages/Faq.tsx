import { Link } from 'wouter';

export default function Faq() {
  const handleFaqSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    const msg = document.getElementById('faqFormMsg');
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
            <span>FAQ</span>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-xl-custom">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="mb-4">Common <span className="text-orange">Questions</span></h1>
              <p className="text-muted mb-4">Please read questions bellow and if you can not find your answer please send us your question, we will answer you as soon as possible.</p>
              <div className="faq-eyebrow-pill"><span className="oi"><i className="bi bi-question-lg"></i></span> F.A.Qs</div>

              <div className="accordion accordion-xtra mt-5" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">Can I test ride a bike before buying it?</button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Absolutely! Test rides are available for most models in our store to ensure the right fit and comfort before you decide.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Do you sell used or refurbished bikes?</button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">We occasionally carry certified pre-owned and refurbished bikes. Check with our in-store team for current availability.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">How do I choose the right size bike?</button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Our team measures your height, inseam, and riding style to recommend the ideal frame size for comfort and control.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">What brands of bikes do you carry?</button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">We stock top brands including Trek, Giant, Specialized, Cannondale, and more.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">What's your return or exchange policy on bikes?</button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">We allow returns or exchanges within 14 days of purchase, provided the bike is in like-new condition.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="faq-bubble-wrap mb-5">
                <div className="faq-bubble">
                  <span className="quote-open">&ldquo;</span>
                  BIKE SHOP FAQ
                  <div className="faq-bubble-icon"><i className="bi bi-bicycle"></i></div>
                </div>
              </div>

              <div className="contact-form-panel">
                <h4 className="mb-4">Still have a question?</h4>
                <form id="faqForm" onSubmit={handleFaqSubmit}>
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-xtra" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <select className="form-control form-control-xtra">
                      <option>Business Department</option>
                      <option>Support Department</option>
                      <option>Sales Department</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea className="form-control form-control-xtra" rows={4} placeholder="Your Question"></textarea>
                  </div>
                  <button type="submit" className="btn-xtra">Ask</button>
                  <p className="text-success small mt-3 d-none" id="faqFormMsg"><i className="bi bi-check-circle-fill"></i> Thanks! We'll get back to you soon.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
