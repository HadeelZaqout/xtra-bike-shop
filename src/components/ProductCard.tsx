import { useState } from 'react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }: { product: Product }) {
  const { state, addToCart, toggleWishlist } = useShop();
  const [adding, setAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
    }, 1500);

    const toastMsg = document.getElementById('cartToastMsg');
    if (toastMsg) toastMsg.textContent = `"${product.name}" has been added to your cart.`;
    const toastEl = document.getElementById('cartToast');
    if (toastEl) {
      bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3000 }).show();
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
    if (!state.wishlist.has(product.id)) { // It was not in wishlist, so we just added it
      const modalEl = document.getElementById('wishlistProductName');
      if (modalEl) modalEl.textContent = product.name;
      const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('wishlistModal')!);
      modal.show();
    }
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="product-card" data-aos="fade-up">
        <div className="product-card-inner">
          <div className="product-media">
            <div className="sale-badges">
              {product.sale && (
                <>
                  <span>Sale!</span>
                  <span>{product.sale}%</span>
                </>
              )}
            </div>
            <img src={product.image} alt={product.name} />
            <div className="product-quick-actions">
              <button className="wishlist-action" aria-label="Wishlist" onClick={handleWishlist}>
                {state.wishlist.has(product.id) ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
              </button>
              <button aria-label="Compare"><i className="bi bi-arrow-left-right"></i></button>
              <button aria-label="Quick view"><i className="bi bi-search"></i></button>
            </div>
            {product.sale && (
              <div className="sale-ribbon">
                <div className="marquee-track">
                  <span>⚡ HOT SALE {product.sale}% OFF ⚡ HOT SALE {product.sale}% OFF </span>
                  <span>⚡ HOT SALE {product.sale}% OFF ⚡ HOT SALE {product.sale}% OFF </span>
                </div>
              </div>
            )}
          </div>
          <div className="product-body">
            <div className="product-title">{product.name}</div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price-row">
              <div>
                {product.oldPrice && <span className="product-price-old">${product.oldPrice.toLocaleString()}</span>}
                <span className="product-price">${product.price.toLocaleString()}</span>
              </div>
              <button className={`btn-add-cart ${adding ? 'added' : ''}`} onClick={handleAddToCart}>
                {adding ? (
                  <><i className="bi bi-check-lg"></i> Added</>
                ) : (
                  <><i className="bi bi-cart3"></i> Add to cart</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
