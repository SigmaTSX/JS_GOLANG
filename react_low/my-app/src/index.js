import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Header  = () => <h2>Hello World!</h2>
const styleField = {
  width: '300px'
}
const Field  = () => {
  const holder = "Enter here"
  return <input 
          style={styleField}
          type="text" 
          placeholder={holder}
          autoComplete=""
          className='first' 
        />
}
const Btn = () => {
  const text = "Log in";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>
}
root.render(
  <React.StrictMode>
    <Header />
    <Field />
    <Btn />
  </React.StrictMode>
);

