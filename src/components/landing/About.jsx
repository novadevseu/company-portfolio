import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function About() {
  // Array de iconos
  const icons = [
    { src: "https://img.icons8.com/color/144/angularjs.png", alt: "Angular" },
    { src: "https://img.icons8.com/officel/144/react.png", alt: "React" },
    { src: "https://img.icons8.com/fluency/144/node-js.png", alt: "Node.js" },
    { src: "https://img.icons8.com/plasticine/144/postgreesql.png", alt: "MySQL" },
    { src: "https://img.icons8.com/color/144/spring-logo.png", alt: "Spring Boot" },
    { src: "https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png", alt: "Java" }
  ];

  return (
    <section id="about" className="overflow-hidden relative mb-4">
      {/* Introducción */}
      <div className="px-8 md:px-12 mt-20 max-w-3xl mx-auto relative mb-5">
        <section className="bg-[var(--color-background)] text-[var(--color-muted)] py-16 px-8 rounded-lg">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-6 text-center">
              <h1 className="text-5xl font-extrabold text-[var(--color-primary)] leading-tight">
                Welcome to <span className="text-[var(--color-accent)]">Nova Devs</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow">
                We are a team of cross-platform application developers offering our
                services to third parties. Our mission is to provide efficient and
                personalized software solutions that meet the unique needs of our
                clients.
              </p>
              <div className="my-8 flex justify-center">
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/images/favicon-192x192.png"
                    alt="Favicon"
                    className="h-18 w-18"
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                We create high-quality, cross-platform applications designed to
                solve real-world challenges. From sleek mobile apps to robust web
                platforms, our solutions are crafted to meet your specific goals. At
                <span className="text-[var(--color-accent)] font-semibold"> Nova Devs</span>, 
                we deliver software that not only works seamlessly but also
                drives results.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Carrusel con imágenes no seleccionables */}
      <div className="px-8 mb-16">
        <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}   // No queremos miniaturas
          infiniteLoop={true}  // Ciclo infinito
          autoPlay={false}     // Sin reproducción automática
          interval={3000}      // Se ignora sin autoPlay
          transitionTime={1000}   // Velocidad de transición
          swipeable={true}     // Permitir “swipe” en móviles
          emulateTouch={true}   // Soporte de touch en desktop (opcional)
        >
          {icons.map((icon, index) => (
            <div key={index} className="text-center py-10">
              <img
                src={icon.src}
                alt={icon.alt}
                className="max-w-[100px] max-h-[100px] mx-auto object-contain"
                draggable={false} // Deshabilitar arrastre
                style={{ userSelect: "none" }} // Deshabilitar selección
              />
              <p className="text-xl text-[var(--color-muted)]">{icon.alt}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default About;
