import { motion } from "framer-motion";
import { UpworkIcon } from "../../assets/icons/UpworkIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";
import { Logo } from "../../assets/logos/Logo";
import { GithubIcon } from "../../assets/icons/GithubIcon";

const footerData = [
  {
    title: "Navigation",
    items: ["Home", "Services", "Team", "Projects", "FAQ"],
  },
  {
    title: "Important Links",
    items: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
  },
  {
    title: "Company",
    items: ["Jobs", "About Us", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <motion.footer
      className="bg-background py-16 text-muted"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
        <div className="flex flex-wrap justify-between">
          
          {/* LOGO + INFO */}
          <motion.div
            className="w-full lg:w-1/3 mb-16 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex justify-center lg:justify-start items-center">
              <div className="text-secondary-background mr-3 text-6xl">
                <Logo />
              </div>
              <div className="text-secondary-background font-bold text-xl">
                Nova Devs
              </div>
            </div>
            <p className="mt-4 leading-loose max-w-xs mx-auto lg:mx-0">
              Transforming ideas into reality with cutting-edge technology and
              innovation.
            </p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 mt-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.a
                href="https://www.upwork.com/agencies/1864021705604676426/"
                className="rounded-full transition duration-300 shadow-md hover:scale-110"
                aria-label="Upwork"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <UpworkIcon className="w-6 h-6 text-secondary-background" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/nova-devs-eu"
                className="rounded-full transition duration-300 shadow-md hover:scale-110"
                aria-label="Linkedin"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <LinkedinIcon className="w-6 h-6 text-secondary-background" />
              </motion.a>
              <motion.a
                href="https://github.com/novadevseu"
                className="rounded-full transition duration-300 shadow-md hover:scale-110"
                aria-label="Github"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <GithubIcon className="w-6 h-6 text-secondary-background" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* FOOTER LINKS */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-wrap justify-between text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {footerData.map((section, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-auto mb-10 lg:mb-0"
              >
                <h3 className="mb-6 text-2xl font-bold text-accent">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item, idx) => {
                    const isNavigation = section.title === "Navigation";
                    return (
                      <motion.li
                        key={idx}
                        className="mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                      >
                        <a
                          href={isNavigation ? `#${item.toLowerCase().replace(/\s+/g, "-")}` : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-muted hover:border-b-2 hover:border-accent transition duration-300 ease-in-out"
                          aria-label={item}
                        >
                          {item}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
};
