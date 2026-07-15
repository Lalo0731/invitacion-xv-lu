import { useEffect } from "react";
import { Howl } from "howler";
// import song from "../../assets/music/song.mp3";

export default function MusicPlayer ({ play }){
  useEffect(() => {
    const sound = new Howl({
      src: [song],
      loop: true,
      volume: 0.5,
    });

    if (play) sound.play();

    return () => sound.stop();
  }, [play]);

  return null;
};