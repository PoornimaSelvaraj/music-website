
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Acoustic Guitar",
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.8,
    reviews: 128,
    badge: "-20%",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 2,
    name: "Digital Piano",
    price: 799.99,
    oldPrice: 899.99,
    rating: 4.7,
    reviews: 86,
    badge: "-10%",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 3,
    name: "Classic Violin",
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.9,
    reviews: 94,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 4,
    name: "Alto Saxophone",
    price: 589.99,
    oldPrice: 649.99,
    rating: 4.8,
    reviews: 76,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1573871669414-010dbf73ca84?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 5,
    name: "Studio Drums",
    price: 1199.99,
    oldPrice: 1399.99,
    rating: 4.9,
    reviews: 54,
    badge: "-15%",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=85",
  },
];

function TrendingProducts({ onAddToCart }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const [orderDetails, setOrderDetails] = useState(null);

  const money = (amount) => `$${amount.toFixed(2)}`;

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 500 ? 0 : 9.99;
  const total = subtotal + shipping;

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    if (onAddToCart) {
      onAddToCart(product);
    }

    setCheckoutOpen(false);
    setOrderPlaced(false);
    setCartOpen(true);
  };

  const changeQuantity = (id, amount) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const openCheckout = () => {
    if (cart.length === 0) return;
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const placeOrder = (event) => {
    event.preventDefault();

    const order = {
      number: "MUS-" + Math.floor(100000 + Math.random() * 900000),
      name: customerName,
      email: customerEmail,
      address: customerAddress,
      total,
      shipping,
      items: cart.map((item) => ({ ...item })),
    };

    setOrderDetails(order);
    setCheckoutOpen(false);
    setCartOpen(false);
    setOrderPlaced(true);
    setCart([]);
  };

  const continueShopping = () => {
    setOrderPlaced(false);
    setCheckoutOpen(false);
    setCartOpen(false);
    setCustomerName("");
    setCustomerEmail("");
    setCustomerAddress("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeAll = () => {
    setCartOpen(false);
    setCheckoutOpen(false);
    setOrderPlaced(false);
  };

  return (
    <>
      <style>{`
        .tp-root,
        .tp-root * {
          box-sizing: border-box;
        }

        .tp-root {
          width: 100%;
          padding: 22px 20px 40px;
          background: #fff;
          color: #20202b;
          font-family: Arial, Helvetica, sans-serif;
        }

        .tp-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .tp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .tp-header h2 {
          margin: 0 0 5px;
          font-size: 21px;
          font-weight: 700;
        }

        .tp-header p {
          margin: 0;
          color: #888891;
          font-size: 11px;
        }

        .tp-view-all {
          padding: 8px;
          border: 0;
          background: transparent;
          color: #60606b;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
        }

        .tp-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .tp-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #eeeef2;
          border-radius: 11px;
          background: white;
          box-shadow: 0 5px 16px #14142812;
          transition: transform .2s, box-shadow .2s;
        }

        .tp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px #14142820;
        }

        .tp-image {
          position: relative;
          height: 155px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafd;
        }

        .tp-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .tp-badge {
          position: absolute;
          top: 9px;
          left: 9px;
          z-index: 1;
          padding: 5px 7px;
          border-radius: 4px;
          background: #f16c6c;
          color: white;
          font-size: 9px;
          font-weight: 700;
        }

        .tp-badge.new {
          background: #21a66c;
        }

        .tp-favorite {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 2;
          width: 28px;
          height: 28px;
          border: 0;
          border-radius: 50%;
          background: white;
          color: #777780;
          box-shadow: 0 2px 8px #00000012;
          font-size: 20px;
          cursor: pointer;
        }

        .tp-favorite.active {
          color: #ed5268;
        }

        .tp-add {
          width: 100%;
          min-height: 34px;
          padding: 8px 5px;
          border: 0;
          background: #19192e;
          color: white;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .tp-add:hover {
          background: #39395c;
        }

        .tp-info {
          padding: 11px 10px 13px;
        }

        .tp-info h3 {
          margin: 0 0 8px;
          color: #252532;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .tp-price {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          margin-bottom: 8px;
        }

        .tp-price strong {
          color: #191925;
          font-size: 13px;
        }

        .tp-price del {
          color: #a1a1aa;
          font-size: 9px;
        }

        .tp-rating {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;
        }

        .tp-rating span {
          color: #e8aa36;
          font-size: 11px;
        }

        .tp-rating small {
          color: #85858e;
          font-size: 9px;
        }

        .tp-cart-fab {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 17px;
          border: 0;
          border-radius: 30px;
          background: #19192e;
          color: white;
          box-shadow: 0 5px 22px #0003;
          font-weight: 700;
          cursor: pointer;
        }

        .tp-cart-fab b {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          height: 22px;
          padding: 0 5px;
          border-radius: 30px;
          background: #f4ad39;
          color: #19192e;
          font-size: 11px;
        }

        .tp-overlay {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(20, 18, 31, .66);
          backdrop-filter: blur(3px);
        }

        .tp-drawer {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 1101;
          display: flex;
          flex-direction: column;
          width: min(440px, 100%);
          height: 100vh;
          height: 100dvh;
          background: #fff;
          box-shadow: -10px 0 40px #0002;
          transform: translateX(105%);
          visibility: hidden;
          transition: transform .28s ease, visibility .28s;
        }

        .tp-drawer.open {
          transform: translateX(0);
          visibility: visible;
        }

        .tp-cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 19px 20px;
          border-bottom: 1px solid #eeeef2;
        }

        .tp-cart-header h2 {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
        }

        .tp-close {
          border: 0;
          background: transparent;
          color: #666;
          font-size: 29px;
          line-height: 1;
          cursor: pointer;
        }

        .tp-cart-list {
          flex: 1;
          overflow-y: auto;
          padding: 0 19px;
        }

        .tp-cart-item {
          display: grid;
          grid-template-columns: 65px minmax(0, 1fr) 25px;
          gap: 11px;
          align-items: center;
          padding: 13px 0;
          border-bottom: 1px solid #eeeeF3;
        }

        .tp-cart-item > img {
          width: 65px;
          height: 65px;
          border-radius: 7px;
          object-fit: contain;
          background: #fafafd;
          mix-blend-mode: multiply;
        }

        .tp-item-info {
          min-width: 0;
        }

        .tp-item-info h3 {
          margin: 0 0 5px;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
        }

        .tp-item-price {
          color: #d59a20;
          font-size: 12px;
          font-weight: 700;
        }

        .tp-quantity {
          display: flex;
          align-items: center;
          width: max-content;
          margin-top: 8px;
          border: 1px solid #e5e3eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .tp-quantity button {
          width: 26px;
          height: 25px;
          border: 0;
          background: #f7f6fa;
          color: #29283b;
          font-size: 16px;
          cursor: pointer;
        }

        .tp-quantity span {
          min-width: 27px;
          text-align: center;
          font-size: 12px;
        }

        .tp-remove {
          align-self: start;
          margin-top: 3px;
          border: 0;
          background: transparent;
          color: #999;
          font-size: 16px;
          cursor: pointer;
        }

        .tp-remove:hover {
          color: #e3485b;
        }

        .tp-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          text-align: center;
        }

        .tp-empty-icon {
          margin-bottom: 12px;
          font-size: 42px;
        }

        .tp-empty h3 {
          margin: 0 0 8px;
          font-size: 19px;
        }

        .tp-empty p {
          margin: 0 0 20px;
          color: #888;
          font-size: 13px;
          line-height: 1.6;
        }

        .tp-cart-footer {
          padding: 17px 20px 20px;
          border-top: 1px solid #eeeef2;
          background: #fff;
        }

        .tp-total-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 11px;
          color: #777;
          font-size: 12px;
        }

        .tp-total-row strong {
          color: #292638;
        }

        .tp-shipping-note {
          margin: 0 0 12px;
          color: #22875b;
          font-size: 11px;
          line-height: 1.5;
        }

        .tp-grand-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 14px 0;
          padding-top: 13px;
          border-top: 1px solid #eeeef2;
          font-size: 16px;
          font-weight: 700;
        }

        .tp-grand-total strong {
          color: #19192e;
          font-size: 19px;
        }

        .tp-checkout-btn {
          width: 100%;
          padding: 12px 14px;
          border: 0;
          border-radius: 6px;
          background: #f2a51f;
          color: #19192e;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .tp-checkout-btn:hover {
          background: #ffc14d;
        }

        .tp-secondary-btn {
          width: 100%;
          margin-top: 9px;
          padding: 11px;
          border: 1px solid #e2e0e9;
          border-radius: 6px;
          background: white;
          color: #454256;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .tp-secondary-btn:hover {
          background: #f7f6fa;
        }

        .tp-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 1102;
          width: min(420px, calc(100% - 28px));
          max-height: 90vh;
          max-height: 90dvh;
          overflow-y: auto;
          padding: 25px;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 20px 70px #0003;
          transform: translate(-50%, -50%);
        }

        .tp-modal-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .tp-modal h2 {
          margin: 0 0 8px;
          color: #1c1b28;
          font-size: 21px;
          font-weight: 800;
        }

        .tp-modal-subtitle {
          margin: 0 0 18px;
          color: #898794;
          font-size: 12px;
          line-height: 1.5;
        }

        .tp-form label {
          display: block;
          margin: 13px 0 6px;
          color: #393747;
          font-size: 12px;
          font-weight: 700;
        }

        .tp-form input,
        .tp-form textarea {
          width: 100%;
          padding: 11px;
          border: 1px solid #dfdce7;
          border-radius: 5px;
          background: #fff;
          color: #292638;
          font-size: 13px;
          outline: none;
        }

        .tp-form input:focus,
        .tp-form textarea:focus {
          border-color: #8b76db;
          box-shadow: 0 0 0 3px #7151d511;
        }

        .tp-form textarea {
          resize: vertical;
        }

        .tp-checkout-summary {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 16px 0;
          font-size: 13px;
          font-weight: 700;
        }

        .tp-checkout-summary strong {
          font-size: 18px;
        }

        .tp-success-modal {
          text-align: center;
          width: min(420px, calc(100% - 28px));
          padding: 27px 25px 24px;
        }

        .tp-success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 61px;
          height: 61px;
          margin: 0 auto 14px;
          border: 3px solid #cceedd;
          border-radius: 50%;
          background: #e2f8ed;
          color: #15955b;
          font-size: 32px;
          font-weight: 800;
        }

        .tp-success-modal h2 {
          margin-bottom: 9px;
          font-size: 20px;
        }

        .tp-success-message {
          margin: 0;
          color: #898794;
          font-size: 11px;
          line-height: 1.65;
        }

        .tp-success-message strong {
          color: #252335;
        }

        .tp-success-divider {
          margin: 17px 0;
          border-top: 1px solid #eeeef2;
        }

        .tp-success-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin: 13px 0;
          text-align: left;
          font-size: 11px;
        }

        .tp-success-row > span {
          color: #888693;
        }

        .tp-success-row > strong {
          max-width: 62%;
          text-align: right;
          overflow-wrap: anywhere;
          color: #292638;
        }

        .tp-success-row .tp-green {
          color: #18945a;
        }

        .tp-status {
          padding: 5px 8px;
          border-radius: 20px;
          background: #e4f8ed;
          color: #17874f !important;
          font-size: 10px;
        }

        .tp-demo-note {
          margin: 16px 0;
          color: #9996a1;
          font-size: 10px;
          line-height: 1.5;
        }

        .tp-success-continue {
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 6px;
          background: #19192e;
          color: white;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .tp-success-continue:hover {
          background: #39395c;
        }

        @media (max-width: 1000px) {
          .tp-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }
        }

        @media (max-width: 600px) {
          .tp-root {
            padding: 20px 12px 30px;
          }

          .tp-header h2 {
            font-size: 18px;
          }

          .tp-header p {
            max-width: 230px;
            line-height: 1.5;
          }

          .tp-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 13px;
          }

          .tp-image {
            height: 140px;
          }

          .tp-info {
            padding: 10px 8px 12px;
          }

          .tp-info h3 {
            font-size: 11px;
          }

          .tp-price strong {
            font-size: 12px;
          }

          .tp-cart-fab {
            right: 14px;
            bottom: 14px;
          }

          .tp-modal {
            padding: 22px 19px;
          }
        }

        @media (max-width: 350px) {
          .tp-image {
            height: 115px;
          }
        }
      `}</style>

      <main className="tp-root">
        <div className="tp-container">
          <div className="tp-header">
            <div>
              <h2>Trending Products</h2>
              <p>Discover instruments loved by musicians</p>
            </div>

            <button
              className="tp-view-all"
              onClick={() =>
                document
                  .getElementById("tp-product-grid")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View All <span>→</span>
            </button>
          </div>

          <div className="tp-grid" id="tp-product-grid">
            {products.map((product) => (
              <article className="tp-card" key={product.id}>
                <div className="tp-image">
                  {product.badge && (
                    <span
                      className={`tp-badge ${
                        product.badge === "New" ? "new" : ""
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <button
                    type="button"
                    className={`tp-favorite ${
                      favorites.includes(product.id) ? "active" : ""
                    }`}
                    aria-label={`Toggle ${product.name} favorite`}
                    aria-pressed={favorites.includes(product.id)}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {favorites.includes(product.id) ? "♥" : "♡"}
                  </button>

                  <img src={product.image} alt={product.name} />
                </div>

                <button
                  type="button"
                  className="tp-add"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <div className="tp-info">
                  <h3>{product.name}</h3>

                  <div className="tp-price">
                    <strong>{money(product.price)}</strong>
                    <del>{money(product.oldPrice)}</del>
                  </div>

                  <div className="tp-rating">
                    <span>★★★★★</span>
                    <small>
                      {product.rating} ({product.reviews})
                    </small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <button
        type="button"
        className="tp-cart-fab"
        onClick={() => {
          setCheckoutOpen(false);
          setOrderPlaced(false);
          setCartOpen(true);
        }}
        aria-label={`Open cart, ${cartCount} items`}
      >
        🛒 Cart <b>{cartCount}</b>
      </button>

      {(cartOpen || checkoutOpen || orderPlaced) && (
        <div className="tp-overlay" onClick={closeAll} />
      )}

      {/* Cart drawer */}
      <aside
        className={`tp-drawer ${cartOpen ? "open" : ""}`}
        aria-hidden={!cartOpen}
      >
        <div className="tp-cart-header">
          <h2>Your Shopping Cart ({cartCount})</h2>
          <button
            type="button"
            className="tp-close"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="tp-empty">
            <div className="tp-empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add your favorite instruments to get started.</p>
            <button
              type="button"
              className="tp-checkout-btn"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="tp-cart-list">
              {cart.map((item) => (
                <div className="tp-cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="tp-item-info">
                    <h3>{item.name}</h3>
                    <div className="tp-item-price">
                      {money(item.price)}
                    </div>

                    <div className="tp-quantity">
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="tp-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    title="Remove item"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="tp-cart-footer">
              <div className="tp-total-row">
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>

              <div className="tp-total-row">
                <span>Shipping</span>
                <strong>{shipping === 0 ? "FREE" : money(shipping)}</strong>
              </div>

              {subtotal > 0 && subtotal < 500 && (
                <p className="tp-shipping-note">
                  Spend {money(500 - subtotal)} more for free shipping.
                </p>
              )}

              <div className="tp-grand-total">
                <span>Total</span>
                <strong>{money(total)}</strong>
              </div>

              <button
                type="button"
                className="tp-checkout-btn"
                onClick={openCheckout}
              >
                Checkout Now · {money(total)}
              </button>

              <button
                type="button"
                className="tp-secondary-btn"
                onClick={() => setCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>

      {/* Checkout modal */}
      {checkoutOpen && (
        <section
          className="tp-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tp-checkout-title"
        >
          <div className="tp-modal-top">
            <h2 id="tp-checkout-title">Checkout</h2>
            <button
              type="button"
              className="tp-close"
              onClick={() => setCheckoutOpen(false)}
              aria-label="Close checkout"
            >
              ×
            </button>
          </div>

          <p className="tp-modal-subtitle">
            Enter your details to confirm your order.
          </p>

          <form className="tp-form" onSubmit={placeOrder}>
            <label htmlFor="tp-name">Full Name</label>
            <input
              id="tp-name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              required
            />

            <label htmlFor="tp-email">Email Address</label>
            <input
              id="tp-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
              required
            />

            <label htmlFor="tp-address">Delivery Address</label>
            <textarea
              id="tp-address"
              autoComplete="street-address"
              rows={3}
              placeholder="Enter your complete address"
              value={customerAddress}
              onChange={(event) =>
                setCustomerAddress(event.target.value)
              }
              required
            />

            <div className="tp-checkout-summary">
              <span>Order Total</span>
              <strong>{money(total)}</strong>
            </div>

            <button type="submit" className="tp-checkout-btn">
              Place Order · {money(total)}
            </button>

            <button
              type="button"
              className="tp-secondary-btn"
              onClick={() => {
                setCheckoutOpen(false);
                setCartOpen(true);
              }}
            >
              Back to Cart
            </button>
          </form>
        </section>
      )}

      {/* Order confirmation popup */}
      {orderPlaced && orderDetails && (
        <section
          className="tp-modal tp-success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tp-success-title"
        >
          <div className="tp-success-icon">✓</div>

          <h2 id="tp-success-title">
            Order Placed Successfully! 🎉
          </h2>

          <p className="tp-success-message">
            Thank you for your purchase, <strong>{orderDetails.name}</strong>!
            Your order <strong>{orderDetails.number}</strong> has been
            confirmed and will be shipped soon.
          </p>

          <div className="tp-success-divider" />

          <div className="tp-success-row">
            <span>Total Amount Paid</span>
            <strong>{money(orderDetails.total)}</strong>
          </div>

          <div className="tp-success-row">
            <span>Shipping Method</span>
            <strong className="tp-green">
              {orderDetails.shipping === 0
                ? "FREE Express Shipping"
                : "Standard Shipping"}
            </strong>
          </div>

          <div className="tp-success-row">
            <span>Payment Status</span>
            <strong className="tp-status">Order Confirmed</strong>
          </div>

          <p className="tp-demo-note">
            Demo checkout only. No real payment has been processed.
          </p>

          <button
            type="button"
            className="tp-success-continue"
            onClick={continueShopping}
          >
            Continue Shopping
          </button>
        </section>
      )}
    </>
  );
}

export default TrendingProducts;
