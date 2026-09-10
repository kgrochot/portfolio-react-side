import React from "react";
import {
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaPalette,
  FaCertificate,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import mainImg from "../assets/meinFoto.jpeg";
import bikeTravelImg from "../assets/himmel.jpeg";
import teaAtelierImg from "../assets/tee-raum.jpg";
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    title: "Portfolio",
    description:
      "Meine persönliche Portfolio-Webseite mit React und Tailwind CSS. Entwickelt mit Fokus auf modernes UI, responsive Design und eine klare Benutzerführung.",
    image: portfolioImg,
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    link: "/portfolio",
    internal: true,
  },
  {
    title: "Tea Atelier",
    description:
      "Eine moderne, responsive Website rund um Tee mit einer stilvollen visuellen Gestaltung und übersichtlicher Präsentation verschiedener Teesorten.",
    image: teaAtelierImg,
    category: "Webdesign",
    technologies: ["React", "UI Design", "Responsive Design"],
    link: "https://kgrochot.github.io/Tee-Shop/",
    internal: false,
  },
  {
    title: "Bike & Travel",
    description:
      "Eine responsive Blog-Plattform für Fahrradtouren, Reiseziele und Outdoor-Abenteuer mit CMS-Integration und strukturierter Inhaltsdarstellung.",
    image: bikeTravelImg,
    category: "Frontend",
    technologies: ["React", "CMS", "Responsive Design"],
    link: "https://kgrochot.github.io/ReisenBlog/",
    internal: false,
  },
];

const developmentSkills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
];

const designSkills = [
  "UI/UX Design",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Canva",
  "Affinity",
];

const certificates = [
  {
    title: "Adobe Photoshop CC – Essentials Training",
    provider: "Bring Your Own Laptop (BYOL)",
    description:
      "Praktisches Training in Bildbearbeitung, Masking, Retusche, Compositing, Typografie und digitaler Gestaltung.",
  },
  {
    title: "Adobe Illustrator",
    provider: "Bring Your Own Laptop (BYOL)",
    description:
      "Weiterbildung in digitaler Illustration, Vektorgrafiken und visueller Gestaltung.",
  },
  {
    title: "Adobe InDesign",
    provider: "Bring Your Own Laptop (BYOL)",
    description:
      "Weiterbildung in Layout, Editorial Design und der Erstellung professioneller Print- und Digitaldokumente.",
  },
];

const Home = () => {
  return (
    <main className="flex flex-col text-white px-6 sm:px-8 md:px-12 py-12 md:py-16 space-y-20">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        aria-labelledby="hero-title"
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14"
      >
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">
            Frontend Development · UI/UX · Design
          </p>

          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hallo, ich bin
            <span className="block">Katarzyna Grochot.</span>
          </h1>

          <h2
            className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-6"
            aria-label="Frontend Entwicklerin, React Entwicklerin, UI UX Designerin"
          >
            <Typewriter
              words={[
                "Frontend Entwicklerin",
                "React Entwicklerin",
                "UI/UX Designerin",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 max-w-2xl leading-relaxed">
            Ich entwickle moderne, responsive Webanwendungen mit React und
            verbinde funktionales Frontend Development mit einem starken
            Gespür für Design und Benutzerfreundlichkeit.
          </p>

          <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
            Durch meine Erfahrung mit Webentwicklung und verschiedenen
            Design-Tools kann ich Projekte sowohl technisch als auch visuell
            denken – von der ersten Idee bis zur fertigen Benutzeroberfläche.
          </p>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              aria-label="Kontakt aufnehmen"
              className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <FaEnvelope aria-hidden="true" />
              Kontakt aufnehmen
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Lebenslauf_Katarzyna%20Grochot_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lebenslauf von Katarzyna Grochot ansehen"
              className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <FaDownload aria-hidden="true" />
              Lebenslauf ansehen
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 p-2 bg-white rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 shrink-0">
          <img
            src={mainImg}
            alt="Katarzyna Grochot – Frontend Entwicklerin und UI/UX Designerin"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        aria-labelledby="about-title"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Über mich
          </p>

          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Code trifft Design.
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Ich interessiere mich besonders für die Schnittstelle zwischen
              Design und Entwicklung. Mein Ziel ist es, digitale Produkte zu
              gestalten, die modern aussehen, intuitiv funktionieren und auf
              unterschiedlichen Geräten zuverlässig funktionieren.
            </p>

            <p>
              Neben meiner Arbeit mit React und modernen Frontend-Technologien
              habe ich mich intensiv mit digitalen Design-Tools beschäftigt.
              Dazu gehören unter anderem Photoshop, Illustrator, InDesign,
              Canva und Affinity.
            </p>

            <p>
              Dadurch bringe ich sowohl technisches Verständnis als auch ein
              ausgeprägtes Interesse an visueller Gestaltung und User
              Experience mit.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section
        aria-labelledby="skills-title"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Fähigkeiten
          </p>

          <h2
            id="skills-title"
            className="text-3xl md:text-4xl font-bold"
          >
            Development & Design
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Development */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <FaCode className="text-blue-400" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Frontend Development
                </h3>

                <p className="text-sm text-gray-500">
                  Technische Skills
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {developmentSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm rounded-lg bg-white/[0.06] border border-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <FaPalette className="text-blue-400" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Design & UI/UX
                </h3>

                <p className="text-sm text-gray-500">
                  Kreative Skills
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm rounded-lg bg-white/[0.06] border border-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Ausgewählte Arbeiten
          </p>

          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Meine Projekte
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Eine Auswahl meiner Arbeiten aus den Bereichen Frontend
            Development, React, Webdesign und responsive UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className="relative h-56 overflow-hidden bg-gray-900/60">
                  <img
                    src={project.image}
                    alt={`Vorschau des Projekts ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs uppercase tracking-wider text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                    Projekt ansehen

                    <FaArrowRight
                      aria-hidden="true"
                      className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </>
            );

            const cardClassName =
              "group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500";

            return project.internal ? (
              <Link
                key={project.title}
                to={project.link}
                aria-label={`${project.title}: ${project.description}`}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: ${project.description}`}
                className={cardClassName}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          CERTIFICATES
      ========================================================= */}
      <section
        aria-labelledby="certificates-title"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Weiterbildung
          </p>

          <h2
            id="certificates-title"
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Design & Zertifikate
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Ergänzend zu meiner Frontend-Ausbildung erweitere ich meine
            Kenntnisse kontinuierlich im Bereich digitales Design und
            Gestaltung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                <FaCertificate
                  className="text-blue-400"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {certificate.title}
              </h3>

              <p className="text-sm text-blue-400 mb-4">
                {certificate.provider}
              </p>

              <p className="text-sm text-gray-400 leading-relaxed">
                {certificate.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
            Kontakt
          </p>

          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Lass uns etwas gestalten.
          </h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed mb-7">
            Du suchst Unterstützung bei einem Webprojekt oder möchtest dich
            über eine mögliche Zusammenarbeit austauschen? Ich freue mich
            über deine Nachricht.
          </p>

          <a
            href="mailto:k.grochot@hotmail.com"
            aria-label="E-Mail an Katarzyna Grochot schreiben"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <FaEnvelope aria-hidden="true" />
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
