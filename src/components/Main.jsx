import React, { useState } from 'react'

import './Main.scss'
import MainHello from './Main/MainHello.jsx'
import MainContact from './Main/MainContact'
import Fade from 'react-reveal/Fade'

import cn from 'classnames'
import Section from './Main/Section/Section'

import Header from '../components/Header.jsx'

function Main(props) {
  const [hidden] = useState(false)

  const [menu, setMenu] = useState(false)
  props.menu(menu)

  return (
    <div className={cn('Main', { hidden: props.hidden })}>
      <Header menu={menu} hidden={hidden} />
      <Fade>
        <MainHello />
      </Fade>
      <Section></Section>
      <Fade>
        <MainContact menu={setMenu} />
      </Fade>
    </div>
  )
}

export default Main
