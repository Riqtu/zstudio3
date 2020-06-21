import React from 'react';
import './Exit.scss';

// import {Link} from "react-router-dom";
import { Link } from 'react-router-dom';

function Exit(props) {
  const location = {
    pathname: '/',
    // hash: props.goTo
  }
  return (
    <div>
    <Link to={location} className='exit'>Вернуться</Link>
    </div>
  );
}

export default Exit;
