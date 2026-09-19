export default function CartToast() {
  return (
    <div className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3" style={{zIndex: 1200}}>
      <div id="cartToast" className="toast toast-xtra" role="status">
        <div className="d-flex align-items-center p-3">
          <div className="me-2" style={{width:'30px', height:'30px', borderRadius:'50%', background:'#1fae5b', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
            <i className="bi bi-check-lg small"></i>
          </div>
          <div className="toast-body p-0 flex-grow-1" id="cartToastMsg">Added to cart.</div>
          <a href="#" className="btn-xtra btn-sm ms-2" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">View cart</a>
          <button type="button" className="btn-close btn-close-white ms-2" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>
  );
}
