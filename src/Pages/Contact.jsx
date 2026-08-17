import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append("access_key", "f761ad67-d562-4f15-81cd-14b9a17fd29d");

    formData.append("subject", "Neue Nachricht über mein Portfolio");

    formData.append("from_name", "Katarzyna Grochot Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        setResult("Danke! Deine Nachricht wurde erfolgreich gesendet. 😊");

        event.target.reset();
      } else {
        setResult(
          `Fehler: ${data.message || "Nachricht konnte nicht gesendet werden."}`,
        );
      }
    } catch (error) {
      console.error(error);

      setResult("Verbindungsfehler beim Senden.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-white">
      {/* Überschrift */}
      <div className="mb-10 md:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="text-white">Kontaktiere</span>{" "}
          <span className="text-blue-500">mich</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
          Du hast eine spannende Stelle, ein Projekt oder möchtest dich einfach
          austauschen? Ich freue mich auf deine Nachricht.
        </p>
      </div>

      {/* Formular */}
      <form onSubmit={onSubmit} className="w-full max-w-xl flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Dein Name"
            required
            className="w-full px-4 py-3.5 rounded-lg bg-[#0d1a12] border border-gray-700 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* E-Mail */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            E-Mail
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="deine@email.de"
            required
            className="w-full px-4 py-3.5 rounded-lg bg-[#0d1a12] border border-gray-700 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Nachricht */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Nachricht
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Erzähl mir gerne etwas über deine Anfrage..."
            required
            className="w-full px-4 py-3.5 rounded-lg bg-[#0d1a12] border border-gray-700 text-white placeholder-gray-500 outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSending}
          className="w-full sm:w-auto self-start flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white font-semibold transition"
        >
          <FaPaperPlane />

          {isSending ? "Wird gesendet..." : "Nachricht senden"}
        </button>

        {/* Ergebnis */}
        {result && <p className="text-sm text-gray-300 -mt-2">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
