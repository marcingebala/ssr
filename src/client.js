import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import mainStore from './stores/main';

const stores = { mainStore };

ReactDOM.hydrate(
  <Provider {...stores}>
    <App {...window.APP_STATE} />
  </Provider>
  , document.getElementById('app'));
