import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  store  from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

// const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
