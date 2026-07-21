import { useState } from "react";
import "../../styles/components/Rsvp/rsvp.scss";

export default function RSVP() {

  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [note, setNote] = useState("");

  const phone = "529611840957";

  const buildMessage = () => {
    return encodeURIComponent(
      `Hola 💙 soy ${name || "invitado"}.
Confirmo mi asistencia a los XV junto con ${guests} persona${guests > 1 ? "s" : ""}.
${note ? `Mensaje: ${note}` : ""}
¡Será un placer acompañarte! 🎉`
    );
  };

  const whatsappLink = `https://wa.me/${phone}?text=${buildMessage()}`;

  return (
    <section className="rsvp">

      <div className="rsvp__card">

        <h2 className="rsvp__title">
          Confirmar Asistencia
        </h2>

        <p className="rsvp__text">
          Nos encantará compartir contigo este momento 💙
        </p>

        {/* NOMBRE */}
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rsvp__input"
        />

        {/* INVITADOS */}
        <div className="rsvp__guests">

          <button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>

          <span>{guests}</span>

          <button onClick={() => setGuests(guests + 1)}>+</button>

        </div>

        {/* MENSAJE OPCIONAL */}
        <textarea
          placeholder="Mensaje (opcional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="rsvp__textarea"
        />

        {/* BOTÓN */}
        <a
          href={whatsappLink}
          target="_blank"
          className="rsvp__button"
        >
          Confirmar por WhatsApp
        </a>

      </div>

    </section>
  );
}