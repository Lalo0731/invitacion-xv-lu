import { useEffect, useRef } from "react";
import "../../styles/components/Photos/galleryModal.scss";

export default function GalleryModal({ images, current, onClose, setCurrent }) {
       const startX = useRef(0);
  const endX = useRef(0);

  const threshold = 50; // mínimo para cambiar

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") onClose();

    if (e.key === "ArrowRight") {
      setCurrent((prev) => (prev + 1) % images.length);
    }

    if (e.key === "ArrowLeft") {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [images.length, onClose, setCurrent]);

  const handleStart = (x) => {
     startX.current = x;
};

  const handleEnd = (x) => {
    endX.current = x;
    const diff = startX.current - endX.current;

    if (diff > threshold) next();     // ← swipe izquierda
    if (diff < -threshold) prev();    // → swipe derecha
  };


//   const prev = () => {
//     setCurrent((current - 1 + images.length) % images.length);
//   };

  return (
    <div className="gallery">

      {/* overlay */}
      <div className="gallery__overlay" onClick={onClose}></div>

      {/* contenido */}
      <div className="gallery__content"
              /* TOUCH */
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}

        /* MOUSE (desktop) */
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
      >

        {/* cerrar */}
        <button className="gallery__close" onClick={onClose}>✕</button>

        {/* imagen principal */}
        <img
          src={images[current]}
          className="gallery__image"
          draggable="false"
        />

        {/* controles */}
        <button className="gallery__nav left" onClick={prev}>‹</button>
        <button className="gallery__nav right" onClick={next}>›</button>

        {/* contador */}
        <div className="gallery__counter">
          {current + 1} / {images.length}
        </div>

      </div>
    </div>
  );
}