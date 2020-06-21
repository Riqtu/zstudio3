import React from 'react'
// import { Picture } from 'react-responsive-picture';

import './Seasons.scss'

import Exit from './Exit.jsx'

const Seasons = () => {
  return (
    <React.Fragment>
      <Exit goTo="" />
      <section className="Seasons">
        <section className="Seasons__section">
          <div className="main-container">
            <div className="backCircle">
              <img src={require('../img/Seasons/ff.png')} alt="" />
            </div>
            <div className="main-logo">
              <img src={require('../img/Seasons/logor.png')} alt="" />
            </div>
            <div className="main-text">
              <h1>Разработка сайта для ресторана «Сезоны»</h1>
              <p>
                Сайт разрабатывался, как визитка для клиентов, с помощью
                которой, можно быстро получить необходимую информацию о
                заведении и перейти к доставке
              </p>
            </div>
            <div className="main-img">
              <img src={require('../img/Seasons/main.png')} alt="" />
            </div>
          </div>
        </section>
        <section className="Seasons__section">
          <div className="delivery-container">
            <img src={require('../img/Seasons/Mockup-back.png')} alt="" />
            <img
              className="mockup"
              src={require('../img/Seasons/Mockup-main.png')}
              alt=""
            />
            <img src={require('../img/Seasons/Mockup-top.png')} alt="" />
          </div>
        </section>

        {/* <section className="Seasons__section"> */}
        <div className="about-container">
          <article>
            <label className="article-label">Адаптивный!</label>
            <div className="article-container">
              <div className="article-logo">
                <img
                  className="response"
                  src={require('../img/Seasons/responsive.svg')}
                  alt=""
                />
              </div>
              <div className="article-text">
                Адаптирован под разные экраны для удобства пользования. Меню
                отлично просмтатривается как на компьютере, так и на телефоне
              </div>
            </div>
          </article>
          <article>
            <label className="article-label">Реактивный!</label>
            <div className="article-container">
              <div className="article-logo">
                <img
                  className="react"
                  src={require('../img/Seasons/react-seeklogo.com.svg')}
                  alt=""
                />
              </div>
              <div className="article-text">
                Сайт написан с использованием технологии React. Без перезагрузок
                страницы, без нервов и проблем{' '}
              </div>
            </div>
          </article>
          <article>
            <label className="article-label">Красивый!</label>
            <div className="article-container">
              <div className="article-logo">
                <img
                  className="artist"
                  src={require('../img/Seasons/artist.svg')}
                  alt=""
                />
              </div>
              <div className="article-text">
                Минималистичный, удобный и просто прекрасный сайт для ресторана.
                И как он может не понравится?)
              </div>
            </div>
          </article>
        </div>
        {/* </section> */}

        <footer>
          <img src={require('../img/Seasons/pizzbar.png')} alt="" />
          <p>
            Хочешь узнать больше? <br />
            <a href="https://xzetx.ru/seasons/"> Переходи и смотри </a>
          </p>
        </footer>
      </section>
    </React.Fragment>
  )
}

export default Seasons
