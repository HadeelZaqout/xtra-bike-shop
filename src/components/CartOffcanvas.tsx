import { useShop } from '../context/ShopContext';
import { products } from '../data/products';

export default function CartOffcanvas() {
  const { state, changeQty } = useShop();

  const cartIds = Object.keys(state.cart);
  const subtotal = cartIds.reduce((sum, id) => {
    const product = products.find(p => p.id === id);
    return sum + ((product?.price || 0) * state.cart[id]);
  }, 0);

  return (
    <div className="offcanvas offcanvas-end offcanvas-cart" tabIndex={-1} id="cartOffcanvas">
      <div className="offcanvas-header">
        <h5 className="mb-0"><i className="bi bi-cart3 text-orange me-2"></i>Your Cart</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <div id="cartItems">
          {cartIds.length === 0 ? (
            <p className="text-muted text-center mt-5" id="cartEmptyMsg">Your cart is empty.</p>
          ) : (
            cartIds.map(id => {
              const p = products.find(pr => pr.id === id);
              if (!p) return null;
              const qty = state.cart[id];
              return (
                <div key={id} className="cart-item">
                  <img src={p.image} alt={p.name} />
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">{p.name}</div>
                    <div className="text-orange small mb-2">${p.price.toLocaleString()}</div>
                    <div className="qty-control">
                      <button aria-label="decrease" onClick={() => changeQty(id, -1)}>−</button>
                      <span>{qty}</span>
                      <button aria-label="increase" onClick={() => changeQty(id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className={`border-top border-secondary-subtle pt-3 mt-3 ${cartIds.length === 0 ? 'd-none' : ''}`} id="cartSummary">
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Subtotal</span>
            <strong id="cartSubtotal">${subtotal.toLocaleString()}</strong>
          </div>
          <a href="#" className="btn-xtra w-100 justify-content-center">Checkout</a>
        </div>
      </div>
    </div>
  );
}
