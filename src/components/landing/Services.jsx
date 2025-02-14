import { motion } from "framer-motion";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";

export const Services = () => {
  return (
    <section
      id="services"
      className="relative w-screen flex flex-col lg:flex-row justify-between items-center bg-background text-muted py-24 px-16"
    >
      <motion.div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-accent text-xl sm:text-2xl mb-6 font-bold">
            Our Services
          </h3>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-secondary-background">
            Software,<span className="text-accent"> Web</span> &{" "}
            <span className="text-primary">Mobile</span> Applications
          </h1>

      
          <p className="text-lg md:text-xl mt-5">
            We offer top-notch software solutions and consulting services. Our
            expertise spans web, mobile, and cloud development.
          </p>

       
          <ul className="mb-6 text-secondary-background text-md md:text-lg mt-5">
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Custom Web & Mobile Development</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Cloud Integration & Automation</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Scalable API Development</span>
            </li>
          </ul>
        </motion.div>
      <motion.div
        className="w-full lg:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-3/4 mx-auto flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 px-2">
            <img
              src={service1.src}
              alt="Web Development Service Image"
              className="rounded-xl shadow-lg shadow-highlight mb-4"
            />
            <img
              src={service2.src}
              alt="Mobile Development Service Image"
              className="rounded-xl shadow-lg shadow-highlight"
            />
          </div>
          <div className="w-1/2 pt-12 px-2 hidden sm:inline-block">
            <img
              src={service3.src}
              alt="Software Development Service Image"
              className="rounded-xl shadow-lg shadow-highlight mb-4"
            />
            <img
              src={service4.src}
              alt="API Development Service Image"
              className="rounded-xl shadow-lg shadow-highlight"
            />
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-bottom-1665696614 absolute bottom-0 left-0 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-background fill-background"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-background fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};
