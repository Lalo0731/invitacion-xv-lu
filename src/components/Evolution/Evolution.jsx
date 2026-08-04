import "../../styles/components/Evolution/evolution.scss";

export default function Evolution() {
  return (
    <section className="evolution">

      <h2 className="evolution__title">
        Mi Historia
      </h2>

      <p className="evolution__subtitle">
        Un recorrido de momentos que han marcado mi vida
      </p>

      <div className="evolution__video">
        <video 
          loop 
          muted 
          playsInline
          controls
        >
          <source src="/videos/evolucion.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}