
import React from "react";

const categories = [
  { name: "Pianos", count: "85+ Items", image: "/piano.jpg", featured: true },
  { name: "Drums", count: "120+ Items", image: "/drums.jpg" },
  { name: "Guitars", count: "150+ Items", image: "/guitar.jpg" },
  { name: "Violins", count: "60+ Items", image: "/violin.jpg" },
  { name: "Saxophones", count: "45+ Items", image: "/saxophone.jpg" },
  { name: "Microphones", count: "80+ Items", image: "/microphone.jpg" },
];

function CategorySection() {
  return (
    <section className="category-section" id="categories">
      <div className="container-fluid">
        <div className="category-list">
          {categories.map((category) => (
            <a
              href="#products"
              className={`category-item ${category.featured ? "featured" : ""}`}
              key={category.name}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h6>{category.name}</h6>
              <p>{category.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
