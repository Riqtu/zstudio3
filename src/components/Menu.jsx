import React, { useState, useEffect } from 'react'
import './Menu.scss'

import { Link } from 'react-router-dom'
import cn from 'classnames'
function Menu(props) {
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    if (props.menuOn === true) {
      setMenuActive(true)
    }
    let arr = document.getElementById('ul').childNodes

    if (menuActive) {
      for (
        let index = 0;
        index < document.getElementsByClassName('link').length;
        index++
      ) {
        document.getElementsByClassName('link')[index].tabIndex = '-1'
      }
      for (let index = 0; index < arr.length; index++) {
        arr[index].children[0].tabIndex = '0'
      }
    } else {
      for (
        let index = 0;
        index < document.getElementsByClassName('link').length;
        index++
      ) {
        document.getElementsByClassName('link')[index].tabIndex = '0'
      }
      for (let index = 0; index < arr.length; index++) {
        arr[index].children[0].tabIndex = '-1'
      }
    }
  }, [props.menuOn, menuActive])
  const handleClick = () => {
    setMenuActive(!menuActive)
  }
  window.onload = () => {}
  return (
    <div className="Menu">
      <button
        className={cn('Menu__button', { active: menuActive })}
        onClick={() => handleClick()}
        aria-label="Кнопка вызова меню"
      >
        <span className="button-element"></span>
      </button>
      <div
        className={cn('menu__container', { 'container-active': menuActive })}
      >
        <nav>
          <ul id="ul">
            <li>
              <Link
                to="/ivtipt"
                onClick={() => setMenuActive(false)}
                id="li-ivtipt"
              >
                ИВТиПТ
              </Link>
            </li>
            <li>
              <Link
                to="/macaroni"
                onClick={() => setMenuActive(false)}
                id="li-macaroni"
              >
                Macaroni Studio
              </Link>
            </li>
            <li>
              <Link
                to="/wheretosmoke"
                onClick={() => setMenuActive(false)}
                id="li-where"
              >
                Где кальян
              </Link>
            </li>
            <li>
              <Link
                to="/medical"
                onClick={() => setMenuActive(false)}
                id="li-med"
              >
                25 лет Мед. лицею
              </Link>
            </li>
            <li>
              <Link
                to="/viewers"
                onClick={() => setMenuActive(false)}
                id="li-viewers"
              >
                Viewers team
              </Link>
            </li>
            <li>
              <Link to="/seasonsp" onClick={() => setMenuActive(false)}>
                Seasons Pizza
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu
