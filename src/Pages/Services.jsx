import React from 'react'
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaShoppingCart, FaServer } from 'react-icons/fa'

const services = [
  { title: 'Webentwicklung', description: 'Moderne, responsive Webseiten mit React und Tailwind CSS.', icon: <FaCode size={30} className="text-blue-500" /> },
  { title: 'UI/UX Design', description: 'Intuitive Benutzeroberflächen und ansprechendes Design.', icon: <FaPaintBrush size={30} className="text-pink-500" /> },
  { title: 'Mobile Optimierung', description: 'Webseiten, die auf allen Geräten perfekt funktionieren.', icon: <FaMobileAlt size={30} className="text-green-500" /> },
  { title: 'SEO Optimierung', description: 'Bessere Sichtbarkeit in Suchmaschinen und höheres Ranking.', icon: <FaSearch size={30} className="text-yellow-500" /> },
  { title: 'E-Commerce / WooCommerce', description: 'Professionelle Online-Shops und Zahlungsintegration.', icon: <FaShoppingCart size={30} className="text-purple-500" /> },
  { title: 'Content Management', description: 'Einfache Verwaltung von Inhalten für Webseiten und Blogs.', icon: <FaServer size={30} className="text-orange-500" /> }
]

const Services = () => {
  return (
    <main className="px-12 py-16 text-white">
      <section aria-labelledby="services-section" className="w-full">
        <h1 id="services-section" className="text-4xl font-bold mb-12">
            <span className="text-white">Meine </span>
             <span className="text-blue-500">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              tabIndex={0} // damit Karte fokussierbar
              className="bg-[#0d1a12] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`${service.title}: ${service.description}`} // Screenreader Label
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services