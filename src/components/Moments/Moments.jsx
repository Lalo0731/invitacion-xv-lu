import "../../styles/components/Moments/moments.scss";

import qr from "../../assets/images/qr/instagram-qr.png";
import profile from "../../assets/images/photos/foto-xv.jpg";
import butterfly from "../../assets/images/decorations/butterfly-1.png";

export default function Moments() {

  return (
    <section className="moments">

      <h2 className="moments__title">
        Comparte tus momentos
      </h2>

      <p className="moments__subtitle">
          Cada fotografía guarda un recuerdo especial.<br/>
          Escanea el código, sígueme en Instagram y comparte tu momento
          etiquetándome para formar parte de este día inolvidable.
      </p>

      <div className="moments__card">

        {/* Mariposas */}
        <img
          src={butterfly}
          className="moments__butterfly left"
          alt=""
        />

        <img
          src={butterfly}
          className="moments__butterfly right"
          alt=""
        />

        {/* Cabecera */}
        <div className="moments__header">

          <img
            src={profile}
            className="moments__avatar"
            alt="Perfil"
          />

          <div>

            <h3>@_5thayyy.h__privv</h3>

            <span>Instagram</span>

          </div>

        </div>

        {/* QR */}
        <div className="moments__qr">

          <img src={qr} alt="QR Instagram"/>

          <div className="moments__shine"></div>

        </div>

        {/* <p className="moments__scan">
          ✨ Escanéame ✨
        </p> */}

        <a
          href="https://www.instagram.com/_5thayyy.h__privv?utm_source=qr&igsh=MTJiaGUyM3Fzd2NpcQ=="
          target="_blank"
          rel="noreferrer"
          className="moments__button"
        >
          Abrir Instagram →
        </a>

      </div>

    </section>
  );

}