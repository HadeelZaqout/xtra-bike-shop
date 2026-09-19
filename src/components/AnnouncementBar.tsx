import { Link } from 'wouter';

export default function AnnouncementBar() {
  return (
    <div className="announce-bar text-center d-none d-md-block">
      <div className="container-xl-custom d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2"><i className="bi bi-bag-check-fill text-success"></i> <strong>envato</strong>market</div>
        <div>Limited time offer, Buy XTRA WordPress theme only <strong>$39</strong></div>
        <a href="#" className="btn-envato">Download XTRA Theme</a>
      </div>
    </div>
  );
}
