import { useEffect, useState } from "react";
import "../../styles/components/Countdown/countdown.scss";

export default function Countdown() {

  const targetDate = new Date("2026-11-11T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTime());

  const format = (num) => String(num).padStart(2, "0");

  function getTime() {

    const now = new Date().getTime();
    const diff = targetDate - now;

     if (diff <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
     }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {

    const interval = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="countdown">

      <h2 className="countdown__title">
        Faltan
      </h2>

      <div className="countdown__grid">

        <div className="countdown__item">
          <span>{format(timeLeft.days)}</span>
          <p>Días</p>
        </div>

        <div className="countdown__item">
          <span>{format(timeLeft.hours)}</span>
          <p>Horas</p>
        </div>

        <div className="countdown__item">
          <span>{format(timeLeft.minutes)}</span>
          <p>Min</p>
        </div>

        <div className="countdown__item">
          <span>{format(timeLeft.seconds)}</span>
          <p>Seg</p>
        </div>

      </div>

    </section>
  );
}