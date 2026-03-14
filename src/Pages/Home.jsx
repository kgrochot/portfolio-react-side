import React from 'react'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import mainImg from '../assets/meinFoto.jpeg'

// Beispiel-Daten für Projekte
const projects = [
  { title: 'Portfolio Webseite', description: 'Meine persönliche Portfolio-Seite mit React und Tailwind CSS.', link: '#' },
  { title: 'E-Commerce Shop', description: 'Ein kleiner Online-Shop mit React und Stripe Integration.', link: '#' },
  { title: 'Blog Plattform', description: 'Blog-Seite mit CMS-Integration und responsive Design.', link: '#' }
]

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-start h-full text-white px-12 py-16 space-y-12">

      {/* Hero Section */}
      <section aria-labelledby="hero-section" className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1">
          <h1 id="hero-section" className="text-5xl font-bold mb-4">Hallo, ich bin Katarzyna Grochot</h1>
          
          <h2 className="text-2xl text-blue-400 mb-6" aria-label="Webentwicklerin, UI/UX Designerin, Frontend Entwicklerin">
            <Typewriter
              words={['Webentwicklerin', 'UI/UX Designerin', 'Frontend Entwicklerin']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-xl text-gray-100 mb-8 max-w-lg">
            Ich erstelle kreative Webseiten und moderne Benutzeroberflächen mit React & Tailwind CSS.
          </p>

          <div className="flex gap-4">
            <a 
              href="#contact" 
              aria-label="Schreib mir" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaEnvelope /> Schreib mir
            </a>
            <a 
              href="/CV_KatarzynaGrochot.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="CV anzeigen" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaDownload /> CV anzeigen
            </a>
          </div>
        </div>

        {/* Bild */}
        <div className="w-64 h-64 p-2 bg-white rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition">
          <img 
            src={mainImg} 
            alt="Katarzyna Grochot" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Intro / Kurzinfo */}
      <section aria-labelledby="intro-section" className="space-y-4 max-w-xl text-gray-100">
        <h2 id="intro-section" className="sr-only">Einführung</h2>
        <p>
          Willkommen auf meinem Portfolio! Hier zeige ich meine Projekte, Services und kreative Arbeiten. 
          Ich kombiniere modernes Design mit funktionalem Code, um ansprechende Benutzererlebnisse zu schaffen.
        </p>
        <p>
          Schau dir meine Projekte an und kontaktiere mich für eine Zusammenarbeit!
        </p>
      </section>

      {/* Featured Projekte */}
      <section aria-labelledby="projects-section" className="w-full">
        <h2 id="projects-section" className="text-3xl font-bold mb-6">Featured Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              tabIndex={0} // Fokusbar für Tastatur
              aria-label={`${project.title}: ${project.description}`} // Screenreader
              className="bg-[#0d1a12] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home