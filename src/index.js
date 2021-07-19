import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Hello text="Olá" />
  </React.StrictMode>,
  document.getElementById('root')
);