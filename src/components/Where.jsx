import React from 'react'
import './Where.scss'
import logo from '../img/where.png'

import Exit from './Exit.jsx'
import browserBox from '../img/browserWhere.png'
import inst from '../img/instWhere.png'
import icon from '../img/iconWhere.png'

function Where() {
  return (
    <div className="Where" id="#where">
      <Exit goTo="#where" />
      <div className="Where__logo">
        <img src={logo} alt="Логотип Где кальян" />
      </div>
      <article className="Where__text">
        <p>
          Проект создан в целях удобства поиска кальянных заведений города.
          Охвачены все аспекты веб разработки: от дизайна до SEO продвижения
        </p>
        <p>
          Проект являлся одним из первых крупных разработок, в следствие чего
          использованы не самые передовые технологии, но это не мешает исправно
          работать и служить на благо любителей кальянов
        </p>
        <p>Сейчас планируется перевести проект на современные технологии</p>
        <p>Я не пропагандирую курение!</p>
        <p>
          <a href="https://xzetx.ru">Сайт на реконструкции</a>
        </p>
      </article>
      <div className="Where__browserBox">
        <img src={browserBox} alt="Главная страница в браузере" />
        <label className="browserBox-label">Главная страница в браузере</label>
      </div>
      <div className="Where__differentBox">
        <img src={inst} alt="Instagram аккаунт" />
        <label className="differentBox-inst">Instagram аккаунт</label>
        <img src={icon} alt="Иконка" />
        <label className="differentBox-icon">Иконка</label>
      </div>
    </div>
  )
}

export default Where
