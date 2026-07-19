import "../../styles/components/Location/location.scss";
import butterfly from "../../assets/images/decorations/butterfly-1.png";

import { Church, PartyPopper, MapPin } from "lucide-react";

export default function Location() {

  const ceremoniaMap = "https://maps.google.com/?q=Parroquia+San+Roque";
  const recepcionMap = "https://maps.google.com/?q=Salon+Los+Pinos";

  return (
    <section className="location">

      <div className="location__card">

        <h2 className="location__main-title">Itinerario</h2>

        <div className="location__timeline">

          <div className="location__event">

            <div className="location__time">
              4:00 PM
            </div>

            <div className="location__content">

              <div className="location__header">
                <span className="location__butterfly"><img src={butterfly} className="location__butterfly delay-1" alt="mariposa" /></span>
                 <Church className="location__icon" />
                <h3>Ceremonia</h3>
              </div>

              <p className="location__place">
                <MapPin className="location__pin" />
                Parroquia San Roque
              </p>

              <a href={ceremoniaMap} target="_blank" className="location__button">
                Ver ubicación
              </a>

            </div>

          </div>

          <div className="location__event">

            <div className="location__time">
              6:00 PM
            </div>

            <div className="location__content">

              <div className="location__header">
                <span className="location__butterfly">
                  <img src={butterfly} className="location__butterfly delay-2" alt="mariposa" />
                </span>
                <PartyPopper className="location__icon" />
                <h3>Recepción</h3>
              </div>

              <p className="location__place">
                <MapPin className="location__pin" />
                Salón Los Pinos
              </p>

              <p className="location__address">
                Av. Principal #123, Ciudad
              </p>

              <a href={recepcionMap} target="_blank" className="location__button">
                Ver ubicación
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}