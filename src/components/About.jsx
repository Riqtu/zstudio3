import React from 'react'
import './About.scss'
import Fade from 'react-reveal/Fade'

function About() {
  return (
    <div className="About">
      <Fade bottom big cascade>
        <article>
          <p>
            Меня зовут Артем. Я занимаюсь UI/UX дизайном, веб разработкой и
            созданием логотипов. Я только учусь, поэтому не судите слишком
            строго{' '}
            <span role="img" aria-label="Смайлик">
              😊
            </span>
          </p>
          <p>
            Практикуюсь в: <br />
            HTML/CSS/JS <br />
            React <br />
            Adobe Photoshop <br />
            Figma/Sketch <br />
          </p>
        </article>
      </Fade>
    </div>
  )
}

export default About
