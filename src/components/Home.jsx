
import React from "react";

function Home() {
  return (
    <>
      <style>{`
        .music-hero {
          position: relative;
          width: 100%;
          min-height: 650px;
          padding: 75px 0 35px;
          background-image: url('/music-hero.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          display: flex;
          align-items: center;
          color: #fff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8, 8, 20, 0.88) 0%,
            rgba(8, 8, 20, 0.66) 45%,
            rgba(8, 8, 20, 0.15) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 35px 6%;
        }

        .collection-tag {
          display: inline-block;
          margin-bottom: 20px;
          padding: 9px 15px;
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 30px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .music-hero h1 {
          margin: 0 0 22px;
          color: #fff;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1.5px;
        }

        .hero-description {
          margin: 0 0 28px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 13px;
          margin-bottom: 45px;
        }

        .hero-buttons .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 12px 25px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .hero-buttons .btn-light {
          color: #171717;
        }

        .hero-buttons .btn-light:hover {
          background: #f29a4a;
          border-color: #f29a4a;
          color: #fff;
        }

        .hero-buttons .btn-outline-light:hover {
          background: #fff;
          color: #171717;
        }

        .hero-features {
          max-width: 850px;
          margin: 0;
        }

        .hero-features > div {
          display: flex;
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          min-height: 75px;
          padding: 13px 12px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(8px);
        }

        .feature-card > i {
          flex-shrink: 0;
          color: #f5a45e;
          font-size: 25px;
        }

        .feature-card h6 {
          margin: 0 0 5px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .feature-card small {
          display: block;
          color: rgba(255, 255, 255, 0.78);
          font-size: 10px;
          line-height: 1.5;
        }

        /* Laptop */

        @media (min-width: 992px) and (max-width: 1200px) {
          .music-hero {
            min-height: 600px;
          }

          .hero-content {
            padding-right: 4%;
            padding-left: 4%;
          }

          .music-hero h1 {
            font-size: 52px;
          }

          .hero-features {
            max-width: 790px;
          }

          .feature-card {
            gap: 8px;
            padding: 12px 9px;
          }

          .feature-card > i {
            font-size: 22px;
          }
        }

        /* Tablet */

        @media (min-width: 576px) and (max-width: 991px) {
          .music-hero {
            min-height: 610px;
            padding: 65px 0 30px;
            background-position: 60% center;
          }

          .hero-overlay {
            background: linear-gradient(
              90deg,
              rgba(8, 8, 20, 0.9),
              rgba(8, 8, 20, 0.65)
            );
          }

          .hero-content {
            padding: 30px 5%;
          }

          .collection-tag {
            margin-bottom: 17px;
            font-size: 11px;
          }

          .music-hero h1 {
            font-size: 48px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            margin-bottom: 35px;
          }

          .hero-features {
            max-width: 100%;
          }

          .feature-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
            min-height: 105px;
            padding: 13px 10px;
          }

          .feature-card h6 {
            font-size: 11px;
          }

          .feature-card small {
            font-size: 10px;
          }
        }

        /* Mobile */

        @media (max-width: 575px) {
          .music-hero {
            min-height: auto;
            padding: 65px 0 28px;
            background-position: 60% center;
          }

          .hero-overlay {
            background: rgba(8, 8, 20, 0.76);
          }

          .hero-content {
            padding: 30px 20px;
          }

          .collection-tag {
            margin-bottom: 17px;
            padding: 8px 12px;
            font-size: 10px;
            letter-spacing: 1px;
          }

          .music-hero h1 {
            margin-bottom: 17px;
            font-size: clamp(34px, 9vw, 45px);
            line-height: 1.15;
            letter-spacing: -0.8px;
          }

          .hero-description {
            margin-bottom: 22px;
            font-size: 13px;
            line-height: 1.8;
          }

          .desktop-break {
            display: none;
          }

          .hero-buttons {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            margin-bottom: 30px;
          }

          .hero-buttons .btn {
            width: 100%;
            min-height: 45px;
            padding: 12px 18px;
            font-size: 13px;
          }

          .hero-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 0;
          }

          .hero-features > div {
            width: 100%;
            padding: 0;
          }

          .feature-card {
            flex-direction: row;
            align-items: center;
            gap: 13px;
            min-height: 68px;
            padding: 12px 14px;
          }

          .feature-card > i {
            font-size: 23px;
          }

          .feature-card h6 {
            margin-bottom: 4px;
            font-size: 12px;
          }

          .feature-card small {
            font-size: 10px;
          }
        }

        /* Small mobile */

        @media (max-width: 360px) {
          .hero-content {
            padding-right: 15px;
            padding-left: 15px;
          }

          .music-hero h1 {
            font-size: 32px;
          }

          .hero-description {
            font-size: 12px;
          }

          .feature-card {
            padding: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-buttons .btn {
            transition: none;
          }
        }
      `}</style>

      <section className="music-hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container-fluid hero-content">
          <span className="collection-tag">
            NEW COLLECTION 2026
          </span>

          <h1>
            Elevate Your
            <br />
            Musical Journey
          </h1>

          <p className="hero-description">
            Discover premium quality instruments crafted
            <br className="desktop-break" />
            for passion, performance and precision.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn btn-light">
              Shop Now
            </a>

            <a href="#collection" className="btn btn-outline-light">
              View Collection
            </a>
          </div>

          <div className="row g-2 hero-features">
            <div className="col-4">
              <div className="feature-card">
                <i className="bi bi-truck"></i>
                <div>
                  <h6>Free Shipping</h6>
                  <small>On orders above $50</small>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="feature-card">
                <i className="bi bi-arrow-repeat"></i>
                <div>
                  <h6>Easy Returns</h6>
                  <small>30-day return policy</small>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="feature-card">
                <i className="bi bi-shield-check"></i>
                <div>
                  <h6>Secure Payment</h6>
                  <small>100% secure checkout</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
