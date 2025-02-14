import { motion } from "framer-motion";

import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";

export const Services2 = () => {
  return (
    <section id="services" className="relative w-screen flex flex-col lg:flex-row justify-between items-center bg-background text-muted py-24 px-16">
      <motion.div className="w-full lg:w-1/2 flex justify-start z-10 order-last lg:order-first"   initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="w-3/4 mx-auto flex flex-wrap justify-start">
          <div className="w-full px-2">
            <img src={service5.src} alt="Tech Stack 1" className="rounded-xl shadow-lg shadow-highlight mb-4" />
            <img src={service6.src} alt="Tech Stack 2" className="rounded-xl shadow-lg shadow-highlight" />
          </div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right z-10">
      <motion.div  initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-accent text-xl sm:text-2xl mb-6 font-bold">
            Our Skills & Technologies
          </h3>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-secondary-background">
            Cutting-Edge <span className="text-accent">Tech Stack</span>
          </h1>

          <p className="text-lg md:text-xl mt-5">
            We leverage modern and powerful technologies to build scalable, high-performance applications.
          </p>

          <ul className="mb-6 text-secondary-background text-md md:text-lg mt-5">
            <li className="mb-4 flex justify-end">
              <span className="mr-2">Frontend: React, Angular, Astro, Vue</span>
              <CheckArrowIcon />
            </li>
            <li className="mb-4 flex justify-end">
              <span className="mr-2">Backend: Node.js, Spring Boot, Laravel</span>
              <CheckArrowIcon />
            </li>
            <li className="mb-4 flex justify-end">
              <span className="mr-2">Databases: PostgreSQL, MySQL, MongoDB</span>
              <CheckArrowIcon />
            </li>
            <li className="mb-4 flex justify-end">
              <span className="mr-2">Cloud & DevOps: Docker, Kubernetes, AWS</span>
              <CheckArrowIcon />
            </li>
            <li className="mb-4 flex justify-end">
              <span className="mr-2">Mobile: React Native, Flutter</span>
              <CheckArrowIcon />
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
