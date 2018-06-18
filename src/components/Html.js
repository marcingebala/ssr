import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';

import App from './App';
import mainStore from '../stores/main';

class Html extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    scripts: PropTypes.array
  }

  render () {
    const { initialState, scripts } = this.props;

    const stores = { mainStore };

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!1</title>
        </head>
        <body>
          <div id="app">
            <Provider {...stores}>
              <App {...initialState} />
            </Provider>
          </div>
          {initialState && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.APP_STATE=${JSON.stringify(initialState)}`
              }}
            ></script>
          )}
          {scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}

export default Html;
