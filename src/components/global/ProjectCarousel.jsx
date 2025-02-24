import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importar imágenes manualmente
import blogImg from "../../assets/images/projects/blog-platform.png";
import chatbotImg from "../../assets/images/projects/ai-chatbot.png";

// Mapeo de imágenes a los proyectos
const projectImages = {
  "Nova Devs Blog": blogImg,
  "AI Chatbot": chatbotImg
};

export const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  // Funciones para manejar el cambio de slide
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalProjects);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);

  return (
    <motion.div className="relative overflow-hidden w-full flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl p-6 sm:p-10 bg-background border border-highlight shadow-lg hover:shadow-xl hover:shadow-highlight transition duration-300 ease-in-out cursor-pointer rounded-3xl flex flex-col items-center justify-center text-center"
        >
          <a href={`/work/${projects[currentIndex].data.path}`}>
            <img
              src={projectImages[projects[currentIndex].data.title].src} // Cargar imagen desde el objeto
              alt={projects[currentIndex].data.title}
              className="rounded-3xl mb-6 w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
            <h3 className="mb-4 text-2xl font-bold font-heading text-primary">
              {projects[currentIndex].data.title}
            </h3>
            <p className="text-secondary-background leading-loose mb-4">
              {projects[currentIndex].data.description}
            </p>
          </a>
        </motion.div>
      </AnimatePresence>

      {/* Botones Prev y Next */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-background text-white p-2 rounded-full shadow-md hover:bg-accent transition"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-background text-white p-2 rounded-full shadow-md hover:bg-accent transition"
        onClick={nextSlide}
      >
        ▶
      </button>
    </motion.div>
  );
};
