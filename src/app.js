import React from 'react';
import ReactDom from 'react-dom';
import Calc from './components/Calc';

const contentNode = document.getElementById('app');

ReactDom.render(<Calc />,contentNode);