export default function WishlistModal() {
  return (
    <div className="modal fade" id="wishlistModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-content-xtra text-center p-4">
          <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="modal"></button>
          <div className="mx-auto mb-3" style={{width:'64px', height:'64px', borderRadius:'50%', background:'#1fae5b', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem'}}>
            <i className="bi bi-check-lg"></i>
          </div>
          <h5 id="wishlistProductName">Product</h5>
          <p className="text-muted">Product has been added to your list.</p>
          <a href="#" className="btn-xtra mx-auto">View wishlist page <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}
