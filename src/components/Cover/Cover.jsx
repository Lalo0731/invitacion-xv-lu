import "../../styles/components/Cover/cover.scss";
import bow from "../../assets/images/decorations/bow.png";
import goldDetail from "../../assets/images/decorations/gold-detail.png";
import foto from "../../assets/images/photos/foto-xv.jpg";
import flowerTL from "../../assets/images/decorations/flowers-top-left.png";
import flowerTR from "../../assets/images/decorations/flowers-top-right.png";
import flowerBL from "../../assets/images/decorations/flowers-bottom-left.png";
import flowerBR from "../../assets/images/decorations/flowers-bottom-right.png";
import butterfly1 from "../../assets/images/decorations/butterfly-1.png";
import butterfly2 from "../../assets/images/decorations/butterfly-2.png";
import envelope from "../../assets/images/ui/envelope.png";

import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function Cover ({ onOpen, playing, toggle }) {
    return (
    <section className="cover">
      <div className="cover__background"></div>
        <img src={flowerTL} className="cover__flower cover__flower--tl" />
        <img src={flowerTR} className="cover__flower cover__flower--tr" />
        <img src={flowerBL} className="cover__flower cover__flower--bl" />
        <img src={flowerBR} className="cover__flower cover__flower--br" />

        <img src={butterfly1} className="cover__butterfly cover__butterfly--one" />
        <img src={butterfly2} className="cover__butterfly cover__butterfly--two" />
        <img src={butterfly1} className="cover__butterfly cover__butterfly--three" />
      <div className="cover__arch">
         <div className="cover__content">

          <div className="cover__header">
            <img
              src={bow}
              alt="Moño decorativo"
              className="cover__bow"
            />
          </div>

          <div className="cover__title">
            <h2>MIS XV</h2>
          </div>

          <div className="cover__name">
            <h1>Carla Luna</h1>
          </div>

          <div className="cover__ornament">
            <img
              src={goldDetail}
              alt="Detalle decorativo"
              className="cover__gold"
            />
          </div>

          <div className="cover__photo">
            <img src={foto} alt="Carla Luna" />
          </div>
          <button
            className="cover__open-btn"
            onClick={onOpen}
          >
            Abrir invitación
          </button>

        </div>
      </div>
      <img
        src={envelope}
        className="cover__envelope"
      />
      <AudioPlayer playing={playing} toggle={toggle}/>
    </section>
  );
};