import "../../styles/components/Gift/gift.scss";
import butterfly from "../../assets/images/decorations/butterfly-1.png";

export default function Gift() {
  return (
    <section className="gift">

      <div className="present">

        {/* 🎁 TAPA */}
        <div className="lid">
          <span></span>
        </div>

          <div className="gift__message">
    <h3>Con cariño 💙</h3>
    <p>
      Tu presencia es mi mejor regalo,<br />
      pero si deseas tener un detalle...
    </p>
  </div>

        {/* 🦋 CONTENIDO (mariposas) */}
        <div className="gift__inside">
          <img src={butterfly} className="b b1" />
          <img src={butterfly} className="b b2" />
          <img src={butterfly} className="b b3" />
          <img src={butterfly} className="b b4" />
          <img src={butterfly} className="b b5" />
        </div>

        {/* 🎁 CAJA */}
        <div className="box">
          <span></span>
          <span></span>
        </div>

      </div>

    </section>
  );
}