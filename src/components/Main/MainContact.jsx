import React, { useState } from 'react'

import './MainContact.scss'

import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import cn from 'classnames'

function MainContact(props) {
  const [bool, setBool] = useState(false)
  props.menu(bool)
  return (
    <div
      className={cn('MainContact', { activeContact: props.visible })}
      id="contact"
    >
      <div className="mainContact__backCh">@</div>
      <Fade left cascade>
        <section>
          <article className="mainContact__more">
            Множество других проектов ты сможешь найти
            <button
              onClick={() => {
                setBool(!bool)
                setTimeout(() => {
                  setBool(false)
                }, 4)
              }}
              aria-label="Кнопка вызова меню, где больше проектов"
            >
              здесь
            </button>
          </article>
          <article className="mainContact__cont">
            <h1>ПОНРАВИЛОСЬ?</h1>
            <p>
              Я рад, если да! <br />
              Хочешь посотрудничать? <br />
              <br />
              Напиши мне -{' '}
              <Link to="/contacts" className="link">
                @xZeTx3D
              </Link>
            </p>
          </article>
        </section>
      </Fade>
    </div>
  )
}

export default MainContact
