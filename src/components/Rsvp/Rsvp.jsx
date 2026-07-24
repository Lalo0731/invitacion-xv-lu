import { useState, useEffect } from "react";
import "../../styles/components/Rsvp/rsvp.scss";

export default function RSVP({ guests = 1 }) {

  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const phone = "529611840957";

  const sendWhatsApp = (type) => {
  if (!name) return;

  const message = type === "yes" ? buildYesMessage() : buildNoMessage();

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_self"); // 🔥 clave
};

const buildYesMessage = () =>
  encodeURIComponent(
    `Es un honor confirmar nuestra asistencia a esta celebración tan especial
    Será un placer acompañarte en este día tan significativo
    • Nombre: ${name}
    • Invitados: ${guests}
    
    ${note ? `• Nota: ${note}\n` : ""}`);

  /* ❌ MENSAJE SI NO ASISTE */
const buildNoMessage = () =>
  encodeURIComponent(
    `Agradecemos sinceramente la invitación a este evento tan especial
    Lamentablemente no podremos acompañarte, pero deseamos que sea una celebración maravillosa
    • Nombre: ${name}
    • Pases: ${guests}`);

  const yesLink = `https://wa.me/${phone}?text=${buildYesMessage()}`;
  console.log(yesLink);
  const noLink = `https://wa.me/${phone}?text=${buildNoMessage()}`;

  return (
    <section className="rsvp">

      <div className="rsvp__card">

        <h2 className="rsvp__title">
          Confirmar Asistencia
        </h2>

        <p className="rsvp__text">
          Tu presencia es muy importante para nosotros 💙
        </p>

        {/* NOMBRE */}
        <input
          type="text"
          placeholder="Escribe tu nombre completo"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(""); // 🔥 limpia error
          }}          className="rsvp__input"
        />
        {error && <p className="rsvp__error">{error}</p>}

        {/* 🎟 PASES (YA FIJOS) */}
        <div className="rsvp__pases">

          <p>Pases asignados</p>

          <div className="rsvp__icons">
            {Array.from({ length: guests }).map((_, i) => (
              <span key={i}>👤</span>
            ))}
          </div>

          <strong>
            {guests} persona{guests > 1 ? "s" : ""}
          </strong>

        </div>

        {/* MENSAJE OPCIONAL */}
        <textarea
          placeholder="Mensaje (opcional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="rsvp__textarea"
        />

        {/* BOTONES */}
        <div className="rsvp__actions">

        <a
          href={yesLink}
          target="_blank"
          className="rsvp__button rsvp__button--yes"
          onClick={(e) => {
            if (!name.trim()) {
              e.preventDefault();
              setError("Por favor escribe tu nombre completo");
            }
          }}
        >
          Sí asistiré
        </a>

        <a
          href={noLink}
          target="_blank"
          className="rsvp__button rsvp__button--no"
          onClick={(e) => {
            if (!name.trim()) {
              e.preventDefault();
              setError("Por favor escribe tu nombre completo");
            }
          }}
        >
          No asistiré
        </a>

        </div>

      </div>

    </section>
  );
}