import "../../styles/components/Parents/parents.scss";

import flores1 from "../../assets/images/decorations/flowers-bottom-rightV.png";
import flores2 from "../../assets/images/decorations/flowers-bottom-leftV.png";

export default function Parents() {
  return (
    <section className="parents">

      <div className="parents__card">

        {/* 🌸 Flores */}
        <img src={flores1} className="parents__flower parents__flower--left" />
        <img src={flores2} className="parents__flower parents__flower--right" />

        <p className="parents__intro">
          Con la bendición de Dios<br />
          y en compañía de mis padres
        </p>

        <h3 className="parents__names">
          Juan Pérez<br />
          María López
        </h3>

        <div className="parents__icon">✧</div>

        <p className="parents__text">
          Te invito a celebrar conmigo este día tan especial
        </p>

      </div>

    </section>
  );
}