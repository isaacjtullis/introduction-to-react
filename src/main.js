import React from 'react';
import ReactDOM from 'react-dom';

let divElement = <div>
  <h1 id="special-header" className="header" onClick={event => alert("Roar!")}>
    I am a react element! Hear me Roar!
  </h1>
  <ul>
    <li>eat</li>
    <li>sleep</li>
  </ul>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('app')
);

/*
let headerElement = React.createElement(
  'h1',
  { id: 'special-header', className: 'header', onClick: event => alert('Roar!') },
  'I am a React element! Hear me roar!'
);

let firstLiElement = React.createElement(
  'li',
  null,
  'eat'
);

let secondLiElement = React.createElement(
  'li',
  null,
  'sleep'
);

let ulElement = React.createElement(
  'ul',
  null,
  firstLiElement,
  secondLiElement
);

let divElement = React.createElement(
  'div',
  null,
  headerElement,
  ulElement
);

ReactDOM.render(
  divElement,
  document.getElementById('app')
);
*/
