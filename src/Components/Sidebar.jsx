import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
// import { BiUser } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className="w-[22%] min-h-screen bg-[#002512] flex flex-col justify-between p-8">
      
      {/* Name / Logo */}
      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Katarzyna Grochot
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 items-center uppercase">
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 font-bold text-lg' 
              : 'text-white hover:text-blue-400 text-lg transition'
          }
        >
          Home
        </NavLink>
        <NavLink 
          to='/portfolio' 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 font-bold text-lg' 
              : 'text-white hover:text-blue-400 text-lg transition'
          }
        >
          Portfolio
        </NavLink>
        <NavLink 
          to='/services' 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 font-bold text-lg' 
              : 'text-white hover:text-blue-400 text-lg transition'
          }
        >
          Services
        </NavLink>
        <NavLink 
          to='/contact' 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 font-bold text-lg' 
              : 'text-white hover:text-blue-400 text-lg transition'
          }
        >
          Kontakt
        </NavLink>
      </nav>

      {/* Download Button */}
      <a
        href="/CV_KatarzynaGrochot.pdf"
        download
        className="mt-10 flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded hover:bg-blue-700 transition"
      >
  Download CV <FaDownload />
</a>
      {/* <button><BiUser /></button> */}
    </div>
  )
}

export default Sidebar