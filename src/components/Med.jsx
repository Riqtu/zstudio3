import React from 'react';
import './Med.scss';

import logo from '../img/logomed.png';
import MedOld from '../img/logomedOld.png';

import v1 from '../img/medalt.png';

import Exit from './Exit.jsx';

function Med() {
  return (
    <div className="Med" id='Med'>
        <Exit goTo='' />
        <div className='Med__logo'>
            <img src={logo} alt="Логотип"/>
        </div>
        <div className='Med__text'>
            <p>
                Заказ от медицинского лицея. 
                Необходимо было создать логотип в честь 25 летия.
                Были максимально учтены все пожелания заказчичка.
            </p>
            <p>
                Логотип выполнен в минимализме.
            </p>
        </div>
        <label className='Med__old-label'>Референс</label>
        <div className='Med__old'>
            <img src={MedOld} alt="Референс"/>
        </div>
        <div className='Med__alt'>
            <img src={v1} alt="Альтернативный вариант"/>
            <label>Альтернативный вариант</label>
        </div>
    </div>
  );
}

export default Med;
