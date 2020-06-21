import React from 'react'
import './Contacts.scss'

import vk from '../img/vk.svg'
import instagram from '../img/instagram.svg'
import Fade from 'react-reveal/Fade'

function Contacts() {
  return (
    <div className="Contacts">
      <Fade bottom big cascade>
        <article>
          <h1>Ищешь меня в социальных сетях?</h1>
          <p>
            Я есть в большинстве популярных медиа пространствах под ником
            xZeTx3D
          </p>
          <p>
            У тебя есть, что спросить или ты просто хочешь поработать вместе?
            Напиши мне!
          </p>
          <p>
            <a href="https://vk.com/xzetx3d">
              <img src={vk} alt="иконка ВК" />
            </a>
            <a href="https://instagram.com/xzetx3d">
              <img src={instagram} alt="Иконка инст" />
            </a>
          </p>
        </article>
      </Fade>
    </div>
  )
}

export default Contacts
