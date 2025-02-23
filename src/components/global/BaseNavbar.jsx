import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../../assets/logos/Logo";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";
import { UpworkIcon } from "../../assets/icons/UpworkIcon";
import { ContactModal } from "../../components/global/ContactModal";
import { MessageIcon } from "../../assets/icons/MessageIcon";

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
            <div className="grow basis-0 justify-end flex gap-4 items-center">
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
        </div>
      </nav>
      {isModalOpen && <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
};
