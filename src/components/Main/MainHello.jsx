import React from 'react'
import './MainHello.scss'
import Fade from 'react-reveal/Fade'

function MainHello() {
  return (
    <div className="MainHello">
      <section>
        {/* <Fade left cascade> */}
        <article className="mainHello__text">
          <Fade left text>
            <h1>ПРИВЕТ!</h1>
            <p>Давай вместе сделаем наше цифровое пространство лучше</p>
          </Fade>
        </article>
        <article className="mainHello__more">
          <div className="more-line" />
          <Fade bottom big text>
            <p>
              Я занимаюсь веб разработкой и хочу показать и рассказать, над чем
              я работал
            </p>
          </Fade>
        </article>
        {/* </Fade> */}
      </section>
    </div>
  )
}

export default MainHello
