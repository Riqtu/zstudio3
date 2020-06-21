import React, { useState, useEffect } from 'react'
import './App.scss'

import { Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Main from './components/Main.jsx'
import Fvt from './components/Fvt.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts'
import Macaroni from './components/Macaroni'
import Where from './components/Where'
import Med from './components/Med'
// import NeedUpdate from './components/NeedUpdate';
import Viewers from './components/Viewers'
import Seasons from './components/Seasons'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

function App() {
  const [hidden, setHidden] = useState(false)
  const test = () =>
    history.listen((location, action) => {
      if (location.pathname !== '/') {
        setHidden(true)
        document.body.style.overflow = 'hidden'
      } else {
        setHidden(false)
        document.body.style.overflow = 'auto'
      }
    })
  useEffect(() => {
    if (history.location.pathname !== '/') {
      setHidden(true)
      document.body.style.overflow = 'hidden'
    } else {
      setHidden(false)
      document.body.style.overflow = 'auto'
    }
    test()
  }, [])

  const [, setMenu] = useState(false)

  return (
    <div className="App">
      <Router history={history}>
        <Main menu={setMenu} hidden={hidden} />
        {/* <Header menu={menu} hidden={hidden} /> */}
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          {/* <Route exact path="/medical" render={{Med,Exit}} /> */}
          <Route path="/ivtipt" component={Fvt} />
          <Route path="/about" component={About} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/macaroni" component={Macaroni} />
          <Route path="/wheretosmoke" component={Where} />
          <Route path="/medical" component={Med} />
          <Route path="/viewers" component={Viewers} />
          <Route path="/seasonsp" component={Seasons} />
        </AnimatedSwitch>
      </Router>
    </div>
  )
}

export default App
