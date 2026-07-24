import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Cover from "./components/Cover/Cover";
import Home from "./pages/Home";

import useAudio from "./hooks/useAudio";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
// import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState(1);
  const { playing, toggle } = useAudio();

    useEffect(() => {
    const path = window.location.pathname; // /4

    const number = parseInt(path.replace("/", ""));

    if (number && number >= 1 && number <= 10) {
      setGuests(number);
      setOpen(true); // 🔥 abre directo
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);

    if(!playing){
      toggle();
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!open && (
        <IntroAnimation key="cover">
          <Cover onOpen={handleOpen} playing={playing} toggle={toggle}/>
        </IntroAnimation>
      )}
      
      {open && (
        <IntroAnimation key="home">
          <Home guests={guests} />
        </IntroAnimation>
      )}
    </AnimatePresence>
  );
}

export default App;