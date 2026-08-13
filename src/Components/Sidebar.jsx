import React from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold text-[9px] md:text-sm text-center"
      : "text-white hover:text-blue-400 text-[9px] md:text-sm transition text-center";

  return (
    <aside className="w-[70px] md:w-[12%] min-h-screen bg-[#002512] flex flex-col items-center px-1 py-4 md:p-4">

      {/* Name */}
      <div className="w-full">
        <h2 className="text-[9px] md:text-sm font-bold text-white text-center leading-tight">
          Katarzyna
          <br />
          Grochot
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 md:gap-5 items-center uppercase w-full mt-10 md:mt-12">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/portfolio" className={linkClass}>
          Portfolio
        </NavLink>

        <NavLink to="/services" className={linkClass}>
          Services
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Kontakt
        </NavLink>
      </nav>

      {/* CV */}
      <a
        href={`${import.meta.env.BASE_URL}Lebenslauf_Katarzyna%20Grochot_2026.pdf`}
        download
        className="mt-10 flex flex-col items-center justify-center gap-1 bg-green-600 hover:bg-blue-700 text-white rounded px-1 py-2 text-[8px] md:text-sm text-center transition w-full"
      >
        <span>CV</span>
        <FaDownload className="text-[9px] md:text-xs" />
      </a>

    </aside>
  );
};

export default Sidebar;