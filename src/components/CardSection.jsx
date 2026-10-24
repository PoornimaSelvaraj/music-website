
import React from "react";
import "./CardSection.css";

const cards = [
  {
    name: "Guitar Pro",
    category: "String Instruments",
    image: "/guitar1.png",
    color: "guitar-card",
  },
  {
    name: "Grand Piano",
    category: "Keyboards & Pianos",
    image: "/piano2.png",
    color: "piano-card",
  },
  {
    name: "Studio Drums",
    category: "Drums & Percussion",
    image: "/drums1.png",
    color: "drums-card",
  },
  {
    name: "Alto Sax",
    category: "Brass & Woodwinds",
    image: "/saxophone3.png",
    color: "sax-card",
  },
];

export default function CardSection() {
  return (
    <section className="card-section">
      <div className="container-fluid px-3 px-md-4">
        <h2 className="card-section-title">
          3D Instrument Cards
        </h2>

        <p className="card-section-subtitle">
          Click or hover cards to pop out the instruments in 3D
        </p>

        <div className="row g-4 instrument-card-row">
          {cards.map((card) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={card.name}
            >
              <div className="instrument-card-wrap">
                <div className={`music-card ${card.color}`}>
                  <div className="instrument-image-wrap">
                    <img
                      className="instrument-image"
                      src={card.image}
                      alt={card.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="music-card-info">
                    <h3>{card.name}</h3>

                    <p>Category: {card.category}</p>

                    <button
                      className="music-card-button"
                      type="button"
                    >
                      ADD TO CART
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
