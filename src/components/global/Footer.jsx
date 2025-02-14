import { UpworkIcon } from "../../assets/icons/UpworkIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";
import { Logo } from "../../assets/logos/Logo";
import { GithubIcon } from "../../assets/icons/GithubIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-background py-16 text-muted">
      <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
        <div className="flex flex-wrap justify-between">
          
          {/* LOGO + INFO */}
          <div className="w-full lg:w-1/3 mb-16 lg:mb-0 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center">
              <div className="text-secondary-background mr-3 text-6xl">
                <Logo />
              </div>
              <div className="text-secondary-background font-bold text-xl">Nova Devs</div>
            </div>
            <p className="mt-4 leading-loose max-w-xs mx-auto lg:mx-0">
              Transforming ideas into reality with cutting-edge technology and
              innovation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <a
                href="#"
                className="rounded-full transition duration-300 shadow-md hover:scale-105"
                aria-label="Upwork"
              >
                <UpworkIcon className="w-5 h-5 text-secondary-background" />
              </a>
              <a
                href="#"
                className="rounded-full transition duration-300 shadow-md hover:scale-105"
                aria-label="Linkedin"
              >
                <LinkedinIcon className="w-5 h-5 text-secondary-background" />
              </a>
              <a
                href="#"
                className="rounded-full transition duration-300 shadow-md hover:scale-105"
                aria-label="Github"
              >
                <GithubIcon className="w-5 h-5 text-secondary-background" />
              </a>
            </div>
          </div>

          {/* FOOTER LINKS */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-between text-center lg:text-left">
            {footerData.map((section, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-auto mb-10 lg:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-accent">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx} className="mb-4">
                      <a
                        href="#"
                        className="text-muted hover:border-b-2 hover:border-accent transition duration-300 ease-in-out"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
