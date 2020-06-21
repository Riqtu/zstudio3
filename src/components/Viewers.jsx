import React from 'react';
import './Viewers.scss';

import Exit from './Exit.jsx'

import logo from '../img/ViewersImg/Vieieie.png'
function Viewers() {
  const text = 'РАЗВЛЕКАТЕЛЬНЫЙ ИГРОВОЙ КАНАЛ '
  return (
    <div className="Viewers">
        <Exit goTo=''/>
        <section className="Viewers__main">
            <img src={logo} alt='Лого'></img>
            <div className='main-topText'>{text.repeat(10)}</div>
            <div className='main-bottomText'>{text.repeat(10)}</div>
            <div className='circle'></div>
        </section>
        <div className="Viewers__about">
        </div>
    </div>
  );
}

export default Viewers;
