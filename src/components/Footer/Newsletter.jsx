import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>

    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'> Suscribete a nuestro diario</h1>
      <p className='p__opensans'>Para nunca perderte las novedades!</p>
    </div>

    <form className='app__newsletter-input flex__center'>
      <input className='app__newsletter-input_email' type='email' placeholder='Escriba su dirección e-email' />
      <input type='submit' style={{width:'max-content'}}className='custom__button' value='Suscribite'/>
    </form>

  </div>
);

export default Newsletter;
