import React from 'react';
import Countdown from '../components/Countdown/Countdown';
import Hero from '../components/Hero/Hero';
import Parents from '../components/Parents/Parents';
import Location from '../components/Location/Location';

export default function Home() {
  return (
    <>
      <Hero/>
      <Countdown/>
      <Parents/>
      <Location/>
    </>
  )
}

