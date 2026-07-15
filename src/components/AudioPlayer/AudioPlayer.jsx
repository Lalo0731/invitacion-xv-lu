import { useState } from "react";
// import useAudio from "../../hooks/useAudio";
import "../../styles/components/AudioPlayer/audio-player.scss";

export default function AudioPlayer({ playing, toggle}) {

  return (
    <div className="audio-player">
          <button
               onClick={toggle}
                className={`audio-player__button ${playing ? "is-playing":""}`}
          >

               {playing ? "⏸":"▶"}

          </button>

          <div className="audio-player__content">

               <span className="audio-player__title">
                    Nuestra Canción
               </span>

               <div className="audio-player__progress">

                    <div className="audio-player__line"></div>

                    <div className="audio-player__thumb"></div>

               </div>

          </div>

     </div>
  );
}