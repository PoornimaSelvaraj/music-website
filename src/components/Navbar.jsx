
export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <nav className="navbar musicio-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <i className="bi bi-music-note-beamed me-2"></i>
          musicio<span>.</span>
        </a>

        <button
          className="cart-button"
          onClick={onCartOpen}
          aria-label="Open shopping cart"
          type="button"
        >
          <i className="bi bi-bag"></i>
          <span className="cart-count">{cartCount || 0}</span>
        </button>
      </div>
    </nav>
  );
}
