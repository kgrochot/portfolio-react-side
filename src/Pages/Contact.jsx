import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Danke, ${formData.name}! Deine Nachricht wurde gesendet.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-16 text-white">
      
      <h1 className="text-4xl font-bold mb-12">
        <span className="text-white">Kontaktiere</span> <span className="text-blue-500">mich</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Kontaktinformationen */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>info@katarzynagrochot.de</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500 text-2xl" />
            <span>+49 170 1234567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span>Altenburg, Deutschland</span>
          </div>
        </div>

        {/* Kontaktformular */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Dein Name"
            className="p-4 rounded bg-[#0d1a12] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Deine E-Mail"
            className="p-4 rounded bg-[#0d1a12] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Deine Nachricht"
            rows={5}
            className="p-4 rounded bg-[#0d1a12] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            Nachricht senden
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact