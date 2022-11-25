import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const imagesArr = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef();

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 330;
      console.log('left');
    }else{
      current.scrollLeft += 330;
      console.log('right');
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Galería de fotos</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, pena</p>
        <button type='button' className='custom__button'>Seguir viendo </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {imagesArr.map((img, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={img} alt='galeria' />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
