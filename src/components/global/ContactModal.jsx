import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactModal = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString(), // Agrega la fecha actual al mensaje
    };

    emailjs
      .send("service_b3bkic7", "template_9pq88ik", templateParams, "d1xrd4PH6TAUUwQCA")
      .then(
        (response) => {
          console.log("Email Sent!", response.status, response.text);
          setSuccess(true);
          setTimeout(() => {
            setIsOpen(false);
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.error("Email Error:", error);
          setError("Failed to send message. Please try again.");
        }
      );
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
          className="w-full h-full bg-transparent bg-opacity-80 fixed top-0 left-0 flex z-50 justify-center items-center backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-[90%] md:w-[75%] lg:w-[800px] xl:w-[850px] bg-highlight shadow-xl rounded-2xl overflow-hidden p-10 sm:p-16 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
                className="absolute top-6 right-6 z-50 w-5 h-5 cursor-pointer hover:scale-110 transition"
                onClick={() => setIsOpen(false)}
              >
              <CloseIcon />
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
                <h2 className="text-4xl font-bold text-accent">
                  Let's Work Together
                </h2>

                <ul className="mt-6 space-y-3 text-secondary-background">
                  <li className="flex items-center">
                    <CheckArrowIcon className="mr-2" />
                    Tailored Solutions for Your Business
                  </li>
                  <li className="flex items-center">
                    <CheckArrowIcon className="mr-2" />
                    Expert Team with Cutting-edge Technology
                  </li>
                  <li className="flex items-center">
                    <CheckArrowIcon className="mr-2" />
                    Fast and Secure Communication
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-bold text-primary text-center mb-4">
                  Get in Touch with Us
                </h3>
                <p className="text-muted text-center mb-4">
                  Fill out the form and we’ll get back to you as soon as possible.
                </p>

                {success ? (
                  <p className="text-green-500 text-center font-semibold">
                    ✅ Message sent successfully!
                  </p>
                ) : (
                  <form onSubmit={sendEmail} className="space-y-4">
                    {error && (
                      <p className="text-red-500 text-center">{error}</p>
                    )}

                    <input
                      className="w-full px-4 py-3 text-secondary-background font-medium placeholder-muted bg-background border border-highlight rounded-lg focus:ring focus:ring-accent outline-none"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <input
                      className="w-full px-4 py-3 text-secondary-background font-medium placeholder-muted bg-background border border-highlight rounded-lg focus:ring focus:ring-accent outline-none"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <textarea
                      className="w-full px-4 py-3 text-secondary-background font-medium placeholder-muted bg-background border border-highlight rounded-lg focus:ring focus:ring-accent outline-none"
                      name="message"
                      placeholder="Your Message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>

                    <button
                      className="w-full py-3 text-secondary-background font-semibold rounded-lg shadow-md focus:ring focus:ring-accent bg-primary hover:bg-accent transition ease-in-out duration-200"
                      type="submit"
                      aria-label="Send Message"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
