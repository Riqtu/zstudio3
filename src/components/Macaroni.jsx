import React from 'react';
import './Macaroni.scss';

import logo from '../img/logo.png';

import Exit from './Exit.jsx';
import browserBox from '../img/browserbox.png';
import inst from '../img/inst.jpg';
import icon from '../img/icon.png';

function Macaroni() {
  return (
    <div className="Macaroni">
        <Exit goTo="#macaroni"/>
        <div className='Macaroni__logo'>
            <img src={logo} alt="Логотип Macaroni Studio"/>
        </div>
        <article className='Macaroni__text'>
        <p>
            Университетский проект в рамках 
            прохождения курса «интернет 
            предпринимательство». Был полностью
            разработан дизайн и общая концепция.
        </p>
        <p>
            Проект предлагает минимизировать
            затраты на разработку веб сайта за счет
            уменьшения взаимодействия заказчика
            с исполнителем.
        </p>
        <p>
            Проект является стартапом и находится
            на раннем этапе развития
        </p>
        <p>
            <a href="https://xzetx.ru/macaroni">Перейти на сайт</a>
        </p>
        </article>
        <div className='Macaroni__browserBox'>
            <img src={browserBox} alt="Главная страница в браузере"/>
            <label className='browserBox-label'>Главная страница в браузере</label>
        </div>
        <div className='Macaroni__differentBox'>
            <img src={inst} alt="Instagram аккаунт"/>
            <label className="differentBox-inst">Instagram аккаунт</label>
            <img src={icon} alt="Иконка"/>
            <label className="differentBox-icon">Иконка</label>
        </div>
    </div>
  );
}

export default Macaroni;
