import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store.js'

import QrReader from './containers/QrReader.js'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <QrReader/>
      </div>
    </Provider>
  );
}

export default App;
