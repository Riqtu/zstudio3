import React, { useEffect, useState } from 'react'

import './MainStart.scss'

function MainStart() {
  const [hello, setHelloTest] = useState('.........')
  const helloArr = hello.split('')
  const [start, setStart] = useState('start-char ')
  useEffect(() => {
    // let helloArr = helloTest.split('')
  })
  let text = helloArr.map((el, index) => {
    return (
      <div
        key={index}
        className={'cont-char'}
        style={{
          animation: start + (index + 2) / 5 + 's forwards ease',
        }}
      >
        {helloArr[index]}
      </div>
    )
  })
  return (
    <section className="mainStart" onClick={() => setStart('sec-char ')}>
      <div className="start-container">{text}</div>
    </section>
  )
}

export default MainStart
