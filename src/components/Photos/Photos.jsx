import { React, useEffect, useState } from "react";
import "../../styles/components/Photos/photos.scss";

import img1 from "../../assets/images/photos/p1.jpg";
import img2 from "../../assets/images/photos/p2.jpg";
import img3 from "../../assets/images/photos/p3.jpg";
import camera from "../../assets/images/icons/camera.png"


import GalleryModal from "./GalleryModal";

export default function Photos() {

     const images = [img1, img2, img3];

     const [open, setOpen] = useState(false);
     const [current, setCurrent] = useState(0);

     return (
          <section className="photos">

               <div className="photos__hero" onClick={() => {
                    setCurrent(0);
                    setOpen(true);
               }}>

                    <img src={img1} alt="principal" />

                    <div className="photos__overlay">
                         <h2>Sesión de Fotos</h2>
                         <p>Un vistazo a una noche inolvidable</p>
                    </div>
               </div>

               <div className="photos__strip">
                    {images.map((img, i) => (
                         <img 
                              key={i}
                              src={img}
                              onClick={() => { 
                                   setCurrent(i); setOpen(true);
                              }}
                         />
                    ))}
               </div>

               <a className="photos__more"         
                    onClick={() => {
                         setCurrent(0);
                         setOpen(true);
                    }}>
                    <span className="photos__camera-wrap">
                         <img src={camera} className="photos__camera" />
                         <span className="photos__flash"></span>
                    </span>
                    Ver galería completa
               </a>

               {open && (
                    <GalleryModal
                         images={images}
                         current={current}
                         setCurrent={setCurrent}
                         onClose={() => setOpen(false)}
                    />
               )}

          </section>
     );
}