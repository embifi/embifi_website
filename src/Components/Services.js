import React, { useContext } from 'react'
import { GlobalInfo } from '../context/GlobalContext'
import bn from '../Assets/ba-icon.svg';
import "./Services.css";

function Services() {

  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);

  return (
    <section id='services' ref={services}>
      <div className="header">
        <h1 className='underline'>Product & Modules</h1>
        {/* <h1 className='heading'>WHAT DO WE OFFER</h1> */}
        {/* <p>And much more…</p> */}
      </div>
      <div className='service-orbit'>

      </div>

    </section>
  )
}

export default Services