import React from 'react'
import PortfolioData from './PortfolioData'

const Portfolio = () => {
  return (
    <main className="px-12 py-16 text-white min-h-screen bg-[#060f0b]">
      <h1 id="services-section" className="text-4xl font-bold mb-12">
            <span className="text-white">Meine </span>
             <span className="text-blue-500">Projekte</span>
        </h1>
      <PortfolioData />
    </main>
  )
}

export default Portfolio