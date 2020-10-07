import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store.js'

import QrReader from './containers/QrReader.js'
import QrContentModal from './containers/QrContentModal.js'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <QrReader/>
        <QrContentModal contentTitle='title'/>
      </div>
    </Provider>
  );
}

export default App;
