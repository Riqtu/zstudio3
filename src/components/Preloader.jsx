import React, {} from 'react';
import './Preloader.scss';

import cn from 'classnames'

function Preloader() {

  return (
    <div className={cn("Preloader",{activePreloader: 1})} id='Preloader'>
        <h1>
            <span role="img" aria-label="Грустный смайлик">🐱</span>          
        </h1>
    </div>
  );
}

export default Preloader;
