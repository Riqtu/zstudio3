import React from 'react';
import './Fvt.scss';

import fvt from '../img/endflat.png';
import fvtOld from '../img/fvtOld.png';

import v1 from '../img/v1.png';
import v2 from '../img/v9.png';
import v3 from '../img/vv.png';

import Exit from './Exit.jsx';
import Preloader from './Preloader.jsx';

function Fvt() {
  return (
    <div className="Fvt" id="fvt">
        <Exit goTo="#fvt" />
        <Preloader />
        <div className='fvt__logo'>
            <img src={fvt} alt="Логотип Института Высоких Технологий и Пьезотехники"/>
        </div>
        <div className='fvt__text'>
            <p>
                Этот логотип пришел на смену
                старому. Была проведена большая 
                работа по выдерживанию строгого
                стиля инженерного факультета (на 
                котором, кстати, я учусь).
            </p>
            <p>
                Основная задача состояла в том, чтобы освежить старый логотип: придать ему новый лоск, соответсвтующий современным стандартам графического дизайна.
            </p>
            <p>
                Новый логотип минималистичен, и отражает грациозность и почетность института
            </p>
        </div>
        <label className='fvt__old-label'>Старый логотип</label>
        <div className='fvt__old'>
            <img src={fvtOld} alt="Старый логотип Института Высоких Технологий и Пьезотехники"/>
        </div>
        <div className='fvt__alt'>
            <img src={v1} alt="Альтернативный вариант - 1"/>
            <img src={v2} alt="Альтернативный вариант - 2"/>
            <img src={v3} alt="Альтернативный вариант - 3"/>
            <label>Другие варианты</label>
        </div>
    </div>
  );
}

export default Fvt;
