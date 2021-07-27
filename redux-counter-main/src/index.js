import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import CounterWithRedux from './CounterWithRedux'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter/>
      <CounterWithRedux/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
