import "../../styles/components/Hero/hero.scss";
import foto from "../../assets/images/photos/foto-xv.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero__overlay"></div>

      <img src={foto} alt="Anahi Cristal Coello Sánchez" className="hero__image" />

      <div className="hero__content">

        <h2 className="hero__subtitle">MIS XV</h2>

        <h1 className="hero__title">Anahi Cristal Coello Sánchez</h1>

      </div>

    </section>
  );
}