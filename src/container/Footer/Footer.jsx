import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { MdCopyright } from 'react-icons/md'

import { images } from '../../constants'
import { Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <Newsletter />
    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactanos</h1>
        <p className='p__opensans'>Macatai Güemez 154, Buenos Aires, Z7009FAK CABA, Argentina</p>
        <p className='p__opensans'>+54 911 9330 6813</p>
        <p className='p__opensans'>+54 911 7230 1007</p>
      </div>

      <div className='app__footer-links_logo'>
        <h1 className='headtext__cormorant'>ZUNPIÉR</h1>
        <p className='p__opensans'>"Una experiencia inolvidable e unica solo en ZUNPIÉR"</p>
        <img src={images.spoon} alt='cuchara' style={{marginTop: '15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horario de atención</h1>
        <p className='p__opensans'>Lun - Vie:</p>
        <p className='p__opensans'>08:00AM - 10:00PM</p>
        <p className='p__opensans'>Sab - Dom:</p>
        <p className='p__opensans'>10:00AM - 10:00PM</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'> 
      <MdCopyright />
        2022 ZUNPIÉR. Todos los derechos reservados
      </p>
    </div>
  </div>
);

export default Footer;
