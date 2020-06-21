import React from 'react'
import './Section.scss'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import sections from './../../../sections.json'
import exports from './../../../logoExports.js'

function Section(props) {
  return sections.data.map((el, index) => {
    let revers = index % 2 === 0 ? '' : '-revers'
    return (
      <section className="Section" key={index}>
        <Fade cascade>
          <div
            className={'Section__logo' + revers}
            style={{
              backgroundImage: 'url(' + exports[el.logo] + ')',
              filter: `invert(${el.invert ? '100%' : '0%'})`,
            }}
          ></div>
        </Fade>
        <Fade>
          <div className={'Section__text'}>
            <Fade>
              <article>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                {el.link.indexOf('http') === -1 ? (
                  <Link to={el.link} className="link">
                    Узнать больше
                  </Link>
                ) : (
                  <a href={el.link} className="link">
                    Перейти
                  </a>
                )}
              </article>
              <div className="Section__number">
                {index + 1}/{sections.data.length}
              </div>
            </Fade>
          </div>
        </Fade>
      </section>
    )
  })
}

export default Section
