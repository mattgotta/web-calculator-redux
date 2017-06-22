/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';
import {Provider} from 'react-redux';
import store from './store.js'

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, document.getElementById('root'));
