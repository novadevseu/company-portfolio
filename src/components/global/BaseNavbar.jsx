import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../../assets/logos/Logo";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";
import { UpworkIcon } from "../../assets/icons/UpworkIcon";
import { ContactModal } from "../../components/global/ContactModal";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { CloseIcon } from "../../assets/icons/CloseIcon";

export const BaseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-background lg:bg-transparent z-40 lg:backdrop-blur-xl">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <a href="/#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <motion.div whileHover={{ scale: 1.1, rotate: 3 }} transition={{ duration: 0.3 }}>
                  <Logo className="w-12 h-12" />
                </motion.div>
              </div>
            </a>
          </motion.div>

          {/* Social Icons + Contact Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="grow basis-0 justify-end hidden lg:flex gap-4 items-center">
              <a href="https://github.com/novadevseu" target="_blank" className="text-white hover:scale-110 transition-all duration-300">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/company/nova-devs-eu" target="_blank" className="text-white hover:scale-110 transition-all duration-300">
                <LinkedinIcon />
              </a>
              <a href="https://www.upwork.com/agencies/1864021705604676426/" target="_blank" className="text-white hover:scale-110 transition-all duration-300">
                <UpworkIcon />
              </a>
              <button className="hover:scale-110 cursor-pointer transition-all duration-300" onClick={() => setIsModalOpen(true)} aria-label="Contact Us">
                <MessageIcon className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden flex flex-col px-3 py-3 border border-transparent rounded-md cursor-pointer hover:bg-accent transition"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <CloseIcon className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 flex flex-col justify-between"
              >
                <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white"></div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-background z-50 w-full items-center gap-10 pb-10 pt-10"
            >
              {navbarLinks.map(({ label, href, id }) => (
                <a
                  key={id}
                  href={href}
                  className="text-white text-2xl leading-6 cursor-pointer font-medium transition duration-300"
                  onClick={() => {
                    setIsOpen(false);
                    setActive(id);
                    setManualNavigation(true);
                    setTimeout(() => setManualNavigation(false), 1000);
                  }}
                >
                  {label}
                </a>
              ))}
               <div className="flex gap-6 mt-4">
                  <a
                    href="https://github.com/novadevseu"
                    target="_blank"
                    className="text-white hover:text-accent transition"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nova-devs-eu"
                    target="_blank"
                    className="text-white hover:text-accent transition"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="https://www.upwork.com/agencies/1864021705604676426/"
                    target="_blank"
                    className="text-white hover:text-accent transition"
                  >
                    <UpworkIcon />
                  </a>
                  <button
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Contact Us"
                  >
                    <MessageIcon className="w-6 h-6" />
                  </button>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isModalOpen && <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
};
