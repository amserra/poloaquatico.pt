import React from "react";
import cake from "../assets/img/portfolio/cake.png";
import cabin from "../assets/img/portfolio/cabin.png";
import circus from "../assets/img/portfolio/circus.png";
import Header from "./Header";
import Card from "./Card";

const Gallery = () => {
  return (
    <div>
      <Header></Header>
      <section id="portfolio" class="portfolio galeria">
        <div class="container">
          <div class="row">
            <Card file={cake} alt="cake" number={1}></Card>
            <Card file={cabin} alt="cabin" number={2}></Card>
            <Card file={circus} alt="circus" number={3}></Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
