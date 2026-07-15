import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

import song from "../assets/music/song.mp3";

export default function useAudio() {

    const sound = useRef(null);

    const [playing,setPlaying] = useState(false);

    useEffect(()=>{

        sound.current = new Howl({

            src:[song],

            html5:true,

            loop:true,

            volume:.5

        });

        return ()=>{

            sound.current.stop();

        }

    },[]);

    const toggle = ()=>{

        if(!playing){

            sound.current.play();

        }else{

            sound.current.pause();

        }

        setPlaying(!playing);

    };

    return{

        playing,

        toggle

    };

}