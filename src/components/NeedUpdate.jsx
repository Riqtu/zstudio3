import React from 'react';
import './NeedUpdate.scss';


import Exit from './Exit.jsx';

function NeedUpdate() {
  return (
    <div className="NeedUpdate" id='NeedUpdate'>
        <Exit goTo=''/>
        <h1>
            Эта страница находится на оформлении <span role="img" aria-label="Грустный смайлик">🙁</span>
        </h1>
    </div>
  );
}

export default NeedUpdate;
