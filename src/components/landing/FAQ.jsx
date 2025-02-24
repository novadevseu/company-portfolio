import { useState } from "react";
import { motion } from "framer-motion";
import { ContactModal } from "../../components/global/ContactModal";

const FAQData = [
  {
    question: "How can I hire Nova Devs for a project?",
    answer: ({ openModal }) => (
      <>
        You can hire us in two ways:  
        <br />
        - Through{" "}
        <a
          href="https://www.upwork.com/agencies/1864021705604676426/"
          className="text-green-500 underline hover:text-green-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upwork
        </a>{" "}
        for secure contracts and transparent collaborations.  
        <br />
        - Or{" "}
        <button
          onClick={openModal}
          className="text-blue-500 underline hover:text-blue-600 transition cursor-pointer"
        >
          contact us directly
        </button>{" "}
        to discuss a custom agreement.
      </>
    ),
  },
  {
    question: "Do you support communication in different languages?",
    answer:
      "Absolutely! Our team can communicate fluently in Spanish, English, Croatian, and Turkish, ensuring seamless collaboration regardless of your language.",
  },
  {
    question: "What should I prepare before starting a project?",
    answer:
      "You don’t need anything specific, as we handle everything. However, having initial requirements or designs ready can help accelerate the process.",
  },
  {
    question: "How can I become part of your team?",
    answer: (
      <>
        We are always looking for talented individuals. Contact us via{" "}
        <a
          href="https://www.linkedin.com/company/nova-devs-eu/"
          className="text-blue-600 underline hover:text-blue-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        to explore opportunities.
      </>
    ),
  },
  {
    question: "How does the payment and delivery process work?",
    answer:
      "Projects are structured into clear deliverables, allowing clients to track progress within a set timeline. Payments can be made per milestone or for the full project. Two final review phases ensure client satisfaction before completion.",
  },
  {
    question: "How can I get support for my project?",
    answer:
      "Our support team is ready to assist you. You can contact us via our website's contact form, email us directly, or reach out through live chat for quick assistance.",
  },
];

export const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="FAQ" className="relative py-24 bg-background text-muted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto"
        >
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-accent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl">
              Explore common questions about how we work and communicate with
              clients.
            </p>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="flex flex-col gap-6">
            {FAQData.map((item, index) => (
              <FAQBox
                key={index}
                title={item.question}
                content={typeof item.answer === "function" ? item.answer({ openModal: () => setIsModalOpen(true) }) : item.answer}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal de Contacto */}
      {isModalOpen && <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
};

const FAQBox = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="p-6 bg-bgDark3 border border-highlight rounded-2xl cursor-pointer transition hover:shadow-lg hover:shadow-highlight hover:border-transparent duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="28px"
            height="30px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </motion.div>
      </div>
      <motion.p
        className="text-lg text-secondaryText mt-4 overflow-hidden"
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.p>
    </div>
  );
};
