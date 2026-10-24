import React from "react";

function BannerSection() {
  const scrollToProducts = () => {
    document
      .getElementById("trending-products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .banner-section {
          width: 100%;
          padding: 25px 20px;
          background: #f7f7f7;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .banner-section * {
          box-sizing: border-box;
        }

        .banner-container {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .banner-card {
          position: relative;
          min-width: 0;
          min-height: 215px;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-radius: 13px;
          background-size: cover;
          background-position: center;
          transition: transform 0.3s ease;
        }

        .banner-card:hover {
          transform: translateY(-3px);
        }

        .banner-one {
          background-image:
            linear-gradient(
              90deg,
              rgba(24, 22, 36, 0.78),
              rgba(24, 22, 36, 0.12)
            ),
            url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=85");
        }

        .banner-two {
          background-image:
            linear-gradient(
              90deg,
              rgba(24, 22, 36, 0.75),
              rgba(24, 22, 36, 0.1)
            ),
            url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85");
        }

        .banner-content {
          position: relative;
          z-index: 1;
          padding: 24px;
          color: #ffffff;
        }

        .banner-content > span {
          display: block;
          margin-bottom: 9px;
          color: #ffd47b;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .banner-content h2 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 800;
          line-height: 1.15;
        }

        .banner-content p {
          margin: 0 0 15px;
          color: #f3f3f3;
          font-size: 12px;
        }

        .banner-content button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background: #19192e;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .banner-content button:hover {
          background: #39395d;
        }

        @media (max-width: 768px) {
          .banner-section {
            padding: 18px 14px;
          }

          .banner-container {
            gap: 12px;
          }

          .banner-card {
            min-height: 175px;
          }

          .banner-content {
            padding: 16px;
          }

          .banner-content h2 {
            font-size: 23px;
          }
        }

        @media (max-width: 550px) {
          .banner-container {
            grid-template-columns: 1fr;
          }

          .banner-card {
            min-height: 185px;
          }

          .banner-content {
            padding: 22px;
          }

          .banner-content h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-card banner-one">
            <div className="banner-content">
              <span>SUMMER SALE</span>

              <h2>
                Up to 50%
                <br />
                Off
              </h2>

              <p>On selected items</p>

              <button onClick={scrollToProducts}>
                Shop Now
              </button>
            </div>
          </div>

          <div className="banner-card banner-two">
            <div className="banner-content">
              <span>EXPLORE OUR COLLECTION</span>

              <h2>
                Discover The
                <br />
                Latest Trends
              </h2>

              <p>Find your perfect sound</p>

              <button onClick={scrollToProducts}>
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;