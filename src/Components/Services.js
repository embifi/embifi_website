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


      {/* <div id="container">
        <div className='s-block-img'>
          <img src={bn} />
        </div>
        <div class="s-block-item"> <div className='s-block'>
          <p className='m-0'>Loan Application</p>
        </div></div>
        <div class="s-block-item"> <div className='s-block'>
          <p className='m-0'>KYC Module</p>
        </div></div>
        <div class="s-block-item"> <div className='s-block'>
          <p className='m-0'>Loan Processing</p>
        </div></div>
        <div class="s-block-item"> <div className='s-block'>
          <p className='m-0'>Collections</p>
        </div></div>
        <div class="s-block-item"> <div className='s-block'>
          <p className='m-0'>Underwriting</p>
        </div></div>
      </div>

      <div id="container2">
        <div className='s-block-img2'>
          <img src={bn} />
        </div>
        <div class="s-block-item2"> <div className='s-block2'>
          <p className='m-0'>Loan Application</p>
        </div></div>
        <div class="s-block-item2"> <div className='s-block2'>
          <p className='m-0'>KYC Module</p>
        </div></div>
        <div class="s-block-item2"> <div className='s-block2'>
          <p className='m-0'>Loan Processing</p>
        </div></div>
        <div class="s-block-item2"> <div className='s-block2'>
          <p className='m-0'>Collections</p>
        </div></div>
        <div class="s-block-item2"> <div className='s-block2'>
          <p className='m-0'>Underwriting</p>
        </div></div>
      </div> */}


      <div className='services-sec'>

        {/* <div className='ss-box-1'>
          <p className='feature-label floating'>Loan Application</p>
          <p className='feature-label floating'>KYC Module</p>
          <p className='feature-label floating'>Loan Processing</p>
        </div> */}

        {/* <div className='ss-box-2'>
          <img src={bn} className='ba-img' />
        </div> */}

        {/* <div className='ss-box-3'>
          <p className='feature-label floating'>Collections</p>
          <p className='feature-label floating'>Underwriting</p>
          <p className='feature-label floating'>And much more</p>
        </div> */}

        <div className='service-orbit'>
        <p className='feature-label '>Loan Application</p>
          <p className='feature-label '>KYC Module</p>
          <p className='feature-label '>Loan Processing</p>
        </div>

      </div>

      {/* secondary */}
      <div className='services-sec2'>
        <div className='ss-box-2-secondary'>
          <img src={bn} className='ba-img-2' />
        </div>

        <div className='ss-box-1-secondary'>
          <p className='feature-label-2 floating'>Loan Application</p>
          <p className='feature-label-2 floating'>KYC Module</p>
          <p className='feature-label-2 floating'>Loan Processing</p>
        </div>

        <div className='ss-box-3-secondary'>
          <p className='feature-label-2 floating'>Collections</p>
          <p className='feature-label-2 floating'>Underwriting</p>
          <p className='feature-label-2 floating'>And much more</p>
        </div>

      </div>

    </section>
  )
}

export default Services