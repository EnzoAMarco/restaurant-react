import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className='app__restaurant_title headtext__cormorant'>ZUNPIÉR</h1>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Inicio</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#about'>Sobre nosotros</a></li>
        <li className='p__opensans'><a href='#awards'>Reconocimientos</a></li>
        <li className='p__opensans'><a href='#contact'>Contacto</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Iniciar Sesión / Registrarse</a>
        <div />
        <a href='/' className='p__opensans'>Reservas</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Inicio</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#about'>Sobre nosotros</a></li>
              <li className='p__opensans'><a href='#awards'>Reconocimientos</a></li>
              <li className='p__opensans'><a href='#contact'>Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
