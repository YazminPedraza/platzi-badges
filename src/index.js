import React from 'react'; 
import ReactDOM from 'react-dom'; 

/*React has a createElement method, similar to document.createElement.
It receives 3 parameters: 
 the element
 the attributes (props in React)
 and the child/children of the element
*/

const jsx = <h1>Hello, Platzi Badges!</h1>;
const element = React.createElement(
    'a',
    { href: 'https://platzi.com'},
    'Ir a Platzi'
);

const container = document.getElementById('app');

// ReactDOM.render(__what__, __where__);
ReactDOM.render(element, container);

/*------------------------------------------------------- */

/*Also, we can write javascript within an html element
JS expressions can be variables, functions or function calls
If the expresion has: {null/false/undefined}, render won't show anything in the DOM.*/

const name = 'Yazmin';
const jsx = <h1>Hi, my name is {name}</h1>
// const jsx = <h1>Hi, my name is {_js expressions_}</h1>
const container = document.getElementById('app');

ReactDOM.render(jsx, container);

/*------------------------------------------------------- */

/*JSX vs React.createElement */

//Using JSX:

// const jsx = (
//     <div>
//         <h1>Hi, I'm Yazmin</h1>
//         <p>I'm front-end developer</p>
//     </div>
// );


//Using React.createElement:

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hi, I am Yazmin'),
//     React.createElement('p', {}, 'I´m front-end developer')
// );