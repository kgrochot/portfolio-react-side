import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import mainImg from "../assets/meinFoto.jpeg";
import { Link } from "react-router-dom";
import bikeTravelImg from "../assets/himmel.jpeg";
import teaAtelierImg from "../assets/tee-raum.jpg";
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    title: "Portfolio",
    description: "Meine aktuelle Portfolio-Webseite.",
    image: portfolioImg,
    category: "React",
    link: "/portfolio",
    internal: true,
  },
  {
    title: "Tea Atelier",
    description:
      "Eine stilvolle Website rund um Tee, Teesorten und Wissenswertes über die Welt des Tees.",
    image: teaAtelierImg,
    category: "Webdesign",
    link: "https://kgrochot.github.io/Tee-Shop/",
    internal: false,
  },
  {
    title: "Bike & Travel",
    description:
      "Eine Blog-Plattform für Fahrradtouren, Reiseziele und Outdoor-Abenteuer mit CMS-Integration und responsive Design.",
    image: bikeTravelImg,
    category: "React",
    link: "#",
    internal: false,
  },
];

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-start h-full text-white px-12 py-16 space-y-12">
      {/* Hero Section */}
      <section
        aria-labelledby="hero-section"
        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full"
      >
        <div className="flex-1">
          <h1
            id="hero-section"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight"
          >
            Hallo, ich bin Katarzyna Grochot
          </h1>

          <h2
            className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-4 md:mb-6"
            aria-label="Webentwicklerin, UI/UX Designerin, Frontend Entwicklerin"
          >
            <Typewriter
              words={[
                "Webentwicklerin",
                "UI/UX Designerin",
                "Frontend Entwicklerin",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 max-w-lg">
            Ich erstelle kreative Webseiten und moderne Benutzeroberflächen mit
            React & Tailwind CSS.
          </p>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              aria-label="Schreib mir"
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaEnvelope />
              Schreib mir
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Lebenslauf_Katarzyna%20Grochot_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV anzeigen"
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaDownload />
              CV anzeigen
            </a>
          </div>
        </div>

        {/* Bild */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 p-2 bg-white rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition shrink-0">
          <img
            src={mainImg}
            alt="Katarzyna Grochot"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
      {/* Intro */}
      <section
        aria-labelledby="intro-section"
        className="space-y-4 max-w-xl text-gray-100"
      >
        <h2 id="intro-section" className="sr-only">
          Einführung
        </h2>

        <p>
          Willkommen auf meinem Portfolio! Hier zeige ich meine Projekte,
          Services und kreative Arbeiten. Ich kombiniere modernes Design mit
          funktionalem Code, um ansprechende Benutzererlebnisse zu schaffen.
        </p>

        <p>
          Schau dir meine Projekte an und kontaktiere mich gerne für eine
          Zusammenarbeit!
        </p>
      </section>

      {/* Meine Projekte */}
      <section aria-labelledby="projects-section" className="w-full">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Arbeiten & Projekte
          </p>

          <h2 id="projects-section" className="text-3xl md:text-4xl font-bold">
            Meine Projekte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                {/* Projektbild */}
                <div className="relative h-56 overflow-hidden bg-gray-900/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>

                {/* Karteninhalt */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500">0{index + 1}</span>

                    <span className="text-xs uppercase tracking-wider text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm text-gray-300 group-hover:text-blue-400 transition">
                    Projekt ansehen
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </>
            );

            return project.internal ? (
              <Link
                key={index}
                to={project.link}
                aria-label={`${project.title}: ${project.description}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] hover:shadow-2xl"
              >
                {cardContent}
              </Link>
            ) : (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: ${project.description}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] hover:shadow-2xl"
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
