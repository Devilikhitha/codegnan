import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myReducers from './reducers';
import { createStore } from 'redux';
import provider from 'react-redux'

const myStore = createStore(myReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <provider store={myStore}>
    <App />
</provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();