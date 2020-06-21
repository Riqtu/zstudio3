import React from 'react';

import './Header.scss';

import {Link} from "react-router-dom";

import Menu from './Menu.jsx';

import cn from 'classnames';

function Header(props) {
  return (
    <div className={cn("Header",{hid:[props.hidden]})}>
        <header>
            <div className='header__logo'><h1 aria-label="logo"><Link to="/" className='link'>Z</Link></h1></div>
            <div className='header__txtMenu'>
              <Link to="/about" className='link'>О СЕБЕ</Link>
              <Link to="/contacts" className='link'>КОНТАКТЫ</Link>
            </div>
            <Menu menuOn={props.menu}/>
        </header>
    </div>
  );
}

export default Header;
