import React from 'react'; 
import ReactDOM from 'react-dom'; 

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(<Badge firstName="Philippa" lastName="Georgiou" jobTitle="USS Shenzhou Captain" twitter="captainGeorgiou" avatar="https://cudebi.files.wordpress.com/2018/01/image0025.png"/>,container);
ReactDOM.render(<BadgeNew/>, container)