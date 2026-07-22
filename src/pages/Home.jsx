import React from 'react';
import Countdown from '../components/Countdown/Countdown';
import Hero from '../components/Hero/Hero';
import Parents from '../components/Parents/Parents';
import Location from '../components/Location/Location';
import DressCode from '../components/DressCode/DressCode';
import Gift from '../components/Gift/Gift';
import Photos from '../components/Photos/Photos';
import RSVP from '../components/Rsvp/Rsvp';
import Moments from '../components/Moments/Moments';

export default function Home() {
  return (
    <>
      <Hero/>
      <Countdown/>
      <Parents/>
      <Location/>
      <DressCode/>
      <Gift/>
      <Photos/>
      <RSVP/>
      <Moments/>
    </>
  )
}

