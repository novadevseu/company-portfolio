import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assets/images/logo.png";

export const Home = () => {
  return (
    <section id="home" className="relative w-screen flex flex-col lg:flex-row justify-between items-center bg-background text-muted py-24 px-16">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl mb-6 font-bold">
            Welcome to <span className="text-accent">Nova Devs</span>
          </h3>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-secondary-background">
            We build <span className="text-accent">amazing</span> software.
          </h1>
          <p className="text-lg bg-accent bg-clip-text text-transparent md:text-xl mt-4">
            Innovating the future, one line of code at a time.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <p className="text-lg md:text-xl mt-6">
            Specializing in web and mobile applications, we are a team of developers who are passionate about creating software that is both functional and visually appealing.
          </p>
        </motion.div>
      </div>

      <motion.div className="w-full lg:w-1/2 flex justify-center items-center rounded-xl lg:mt-0 mt-12" initial={{ opacity: 0, y: 10, zIndex: 20 }} animate={{ opacity: 1, y: 0, zIndex: 20 }} transition={{ duration: 0.5, delay: 0.15 }}>
        <img src={logo.src} alt="Logo Image" className="w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg shadow-highlight" />
      </motion.div>
    </section>
  );
};
