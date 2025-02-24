import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import team from "../../content/team.json";

// Importar imágenes manualmente
import cesarImg from "../../assets/images/team/cesar.jpg";
import ivanImg from "../../assets/images/team/ivan.jpg";
import denizImg from "../../assets/images/team/deniz.jpg";
import markusImg from "../../assets/images/team/markus.jpg";
import aliImg from "../../assets/images/team/ali.jpg";
import joaoImg from "../../assets/images/team/joao.jpg";

// Mapeo de imágenes a los miembros del equipo
const teamImages = {
  "Cesar A. Suárez Orizondo": cesarImg,
  "Iván López": ivanImg,
  "Deniz Yetim": denizImg,
  "Markus Abramian Medina": markusImg,
  "Ali Gencay": aliImg,
  "Joao Pedro Lima Dias": joaoImg,
};

export const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  const handleMemberChange = (index) => {
    setActiveMember(index);
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-32" id="team">
      
      {/* Título Principal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-4/5 text-left mb-12"
      >
        <h2 className="text-5xl font-bold text-accent">Our Team</h2>
      </motion.div>

      {/* Contenedor Principal */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-4/5 flex flex-col lg:flex-row justify-start items-center text-left"
      >
        {/* Imagen del Miembro Activo (Izquierda) */}
        <div className="w-full lg:w-1/3 flex justify-start mb-10 lg:mb-0">
          <motion.div
            key={activeMember}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-56 h-56 rounded-full overflow-hidden shadow-lg shadow-highlight"
          >
            <img
              src={teamImages[team[activeMember].name].src} // Cargar imagen desde el objeto
              alt={`${team[activeMember].name} profile`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Datos del Miembro (Derecha) */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-5xl font-bold text-white mb-4">
                {team[activeMember].name}
              </h3>
              <p className="text-3xl text-accent mb-6">{team[activeMember].role}</p>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {team[activeMember].testimonial}
              </p>
              
              {/* LinkedIn */}
              <a
                href={team[activeMember].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 mt-6 text-accent text-xl hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0zM7.09 20.452H3.561V9.03h3.53v11.422zM5.326 7.692a2.045 2.045 0 1 1 0-4.09 2.045 2.045 0 0 1 0 4.09zm14.936 12.76h-3.533v-5.764c0-1.375-.029-3.145-1.916-3.145-1.916 0-2.211 1.497-2.211 3.042v5.867H9.068V9.03h3.391v1.561h.047c.472-.894 1.626-1.835 3.348-1.835 3.577 0 4.235 2.354 4.235 5.42v6.276z" />
                </svg>
                <span>View LinkedIn</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navegación de Miembros debajo */}
      <div className="flex items-center justify-start w-4/5 mt-12 space-x-6">
        {team.map((member, index) => (
          <motion.button
            key={index}
            onClick={() => handleMemberChange(index)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className={`w-16 h-16 rounded-full overflow-hidden hover:shadow-lg hover:shadow-highlight transition-ease duration-300 ${
              activeMember === index ? "ring-2 ring-accent scale-125 shadow-lg shadow-highlight" : ""
            }`}
          >
            <img
              src={teamImages[member.name]?.src} // Cargar imagen desde el objeto
              alt={`${member.name} profile`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
};
