import { useState } from "react";
import "../../styles/components/Gift/gift.scss";
import butterfly from "../../assets/images/decorations/butterfly-1.png";

export default function Gift() {
     const [open, setOpen] = useState(false);
     return (
          <section className="gift">

               <div 
                    className={`present ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
               >
                    <div className="gift__hint">
                         Toca para abrir
                    </div>

                    <div className="lid">
                         <span></span>
                    </div>

               <div className="gift__message">
                    <h3>Con cariño 💙</h3>
                    <p>
                         Lo más valioso para mí es compartir este día contigo.<br/>
                         Si deseas tener un detalle, puedes hacerlo con una lluvia de sobres.
                         {/* Tu presencia es mi mejor regalo,<br />
                         pero si deseas tener un detalle... */}
                    </p>
               </div>

               <div className="gift__inside">
                    <img src={butterfly} className="b b1" />
                    <img src={butterfly} className="b b2" />
                    <img src={butterfly} className="b b3" />
                    <img src={butterfly} className="b b4" />
                    <img src={butterfly} className="b b5" />
               </div>

               <div className="box">
                    <span></span>
                    <span></span>
               </div>

               </div>

          </section>
     );
}