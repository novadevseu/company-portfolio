import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { TailcastLogo } from "../../assets/logos/TailcastLogo";
import { useState } from "react";

export const ContactModal = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Aquí puedes integrar una API de backend o un servicio como EmailJS
    console.log("Form Data Submitted: ", formData);
    alert("Message sent successfully!");

    // Cierra el modal después de enviar
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-background bg-opacity-80 fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[900px] xl:w-[1000px] sm:rounded-2xl bg-highlight main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              {/* Sección de la izquierda con información */}
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primary">
                  Contact Us
                </h2>
                <h2 className="text-5xl font-bold tracking-normal text-accent">
                  Let's Work Together
                </h2>

                <ul className="mb-6 text-secondary-background mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Tailored Solutions for Your Business</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Expert Team with Cutting-edge Technology</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Fast and Secure Communication</span>
                  </li>
                </ul>
              </div>

              {/* Sección de la derecha con el formulario */}
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="text-secondary-background mr-2 text-8xl">
                    <TailcastLogo />
                  </div>
                  <div className="text-secondary-background font-['Inter'] font-bold text-3xl">
                    Nova Devs
                  </div>
                </div>

                <h3 className="mb-4 text-2xl text-primary font-bold leading-snug text-center">
                  Get in Touch with Us
                </h3>
                <p className="mb-6 text-muted text-center">
                  Fill out the form and we’ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="w-full sm:w-4/5">
                  {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                  <div className="mb-4">
                    <input
                      className="px-4 py-3 w-full text-secondary-background font-medium placeholder-muted outline-none border bg-background border-highlight rounded-lg focus:ring focus:ring-accent"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      className="px-4 py-3 w-full text-secondary-background font-medium placeholder-muted outline-none border bg-background border-highlight rounded-lg focus:ring focus:ring-accent"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      className="px-4 py-3 w-full text-secondary-background font-medium placeholder-muted outline-none border bg-background border-highlight rounded-lg focus:ring focus:ring-accent"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="w-full">
                    <button
                      className="py-4 px-6 w-full text-secondary-background font-semibold rounded-xl shadow-4xl focus:ring focus:ring-accent bg-primary hover:bg-accent transition ease-in-out duration-200"
                      type="submit"
                      aria-label="Send Message"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Botón de cierre */}
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-secondary-background transition"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
