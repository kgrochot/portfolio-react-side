import React from "react";
import herrlesNord from "../../assets/herrlesNord.png";
import alteFabrik from "../../assets/altefabrikstudios.png";
import herrlesRobotics from "../../assets/herrlesRobotics.png";
import teeAtelier from "../../assets/teeatelier.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TeeAtelier",
    description:
      "Meine GitHub Page für das TeeAtelier – eine moderne Webseite rund um Tee.",
    image: teeAtelier,
    link: "https://kgrochot.github.io/TeeAtelier/",
  },
  {
    title: "Alte Fabrik Studios",
    description:
      "Webseite des Fotostudios in Altenburg – Vermietung kreativer Räume.",
    image: alteFabrik,
    link: "https://www.altefabrikstudios.de",
  },
  {
    title: "HERRLES Robotics",
    description: "Webseite der Firma HERRLES mit Fokus auf Robotiklösungen.",
    image: herrlesRobotics,
    link: "https://herrles-robotics.com/",
  },
  {
    title: "HERRLES Industrieservice Nord",
    description:
      "Webseite der Firma für Montage und Handel von Industrierobotern.",
    image: herrlesNord,
    link: "https://herrles-nord.de/",
  },
];

const PortfolioData = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, i) => (
      <a
        key={i}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0d1a12] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`${project.title}: ${project.description}`}
      >
        {/* Screenshot */}
        <div className="w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Titel */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          {project.title}
        </h2>

        {/* Beschreibung */}
        <p className="text-gray-300 text-base md:text-lg mb-2">
          {project.description}
        </p>

        {/* Link-Icon */}
        <FaExternalLinkAlt className="text-gray-400 hover:text-blue-400 text-xl transition" />
      </a>
    ))}
  </div>
);

export default PortfolioData;
