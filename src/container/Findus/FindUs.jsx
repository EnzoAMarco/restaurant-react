import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className='app__wrapper_info'>
      <SubHeading title='Contacto' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}} >Donde encontrarnos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>ESCRIBIR DIRECCION</p>
        <p className='p__opensans' style={{color: '#DCCA87', margin:'2rem 0'}}>Horarios</p>
        <p className='p__opensans'>Lun - vie: 10:00AM - 01:00AM</p>
        <p className='p__opensans'>Sab - Dom: 11:00AM - 02:00AM</p>
      </div>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Visitanos</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='bebida img' />
    </div>

  </div>
);

export default FindUs;
