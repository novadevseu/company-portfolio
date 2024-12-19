import React, { useState } from 'react';
import team from '../../data/team.json'; // Importa el JSON desde src/data

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  const handleMemberChange = (index) => {
    setActiveMember(index);
  };

  return (
    <section className="overflow-hidden relative ">
      <div className="px-8 md:px-12 max-w-7xl mx-auto">
        {/* Título con mayor separación */}
        <div className= "mb-10">
        <h2 className="text-4xl font-bold text-center text-[var(--color-primary)] mb-16">
          Meet the Team
        </h2>
</div>
        {/* Contenedor dinámico */}
        <div className="text-center">
          {/* Foto grande */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src={team[activeMember].image}
                alt={`${team[activeMember].name} profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial y datos con mayor separación */}
          <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed mb-6">
            {team[activeMember].testimonial}
          </p>
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
            {team[activeMember].name}
          </h3>
          <p className="text-[var(--color-muted)]">
            {team[activeMember].role}
          </p>

          {/* LinkedIn */}
          <a
            href={team[activeMember].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0zM7.09 20.452H3.561V9.03h3.53v11.422zM5.326 7.692a2.045 2.045 0 1 1 0-4.09 2.045 2.045 0 0 1 0 4.09zm14.936 12.76h-3.533v-5.764c0-1.375-.029-3.145-1.916-3.145-1.916 0-2.211 1.497-2.211 3.042v5.867H9.068V9.03h3.391v1.561h.047c.472-.894 1.626-1.835 3.348-1.835 3.577 0 4.235 2.354 4.235 5.42v6.276z" />
            </svg>
            <span>View LinkedIn</span>
          </a>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          {team.map((member, index) => (
            <button
              key={index}
              onClick={() => handleMemberChange(index)}
              className={`w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 ${
                activeMember === index
                  ? "ring-2 ring-white scale-110" // Borde blanco y crecimiento suave
                  : ""
              }`}
            >
              <img
                src={member.image}
                alt={`${member.name} profile`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
