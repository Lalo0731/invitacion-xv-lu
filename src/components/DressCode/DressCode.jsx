import "../../styles/components/Dresscode/dresscode.scss";

import dressIcon from "../../assets/images/ui/dress.png";
import suitIcon from "../../assets/images/ui/suit.png";
import dressDecor from "../../assets/images/decorations/dress-decor.png";
import suitDecor from "../../assets/images/decorations/suit-decor.png";

export default function DressCode() {
  return (
    <section className="dress">
       <img src={dressDecor} className="dress__decor dress__decor--leftD" />
          <img src={suitDecor} className="dress__decor dress__decor--rightS" />

      <div className="dress__card">

        <h2 className="dress__title">
          Código de Vestimenta
        </h2>

        <p className="dress__subtitle">
          Formal - Elegante (tonos neutros)
        </p>

        {/* 🎨 Color */}
        <div className="dress__color">
          <span className="dress__circle"></span>
          <p>Azul Plumbago</p>
        </div>

        {/* 👗 Iconos */}
        <div className="dress__icons">
          <div className="dress__item">
            <img src={dressIcon} className="dress__icon-img" />
            <p>Damas</p>
          </div>

          <div className="dress__item">
            <img src={suitIcon} className="dress__icon-img" />
            <p>Caballeros</p>
          </div>
        </div>

        <p className="dress__note">
          Se reserva el color AZUL PLUMBAGO para la quinceañera o similares al vestido.
        </p>

      </div>

    </section>
  );
}