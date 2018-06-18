import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
class App extends React.Component {
  static propTypes = {
    initialText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.initialText };
  }

  onButtonClick(event) {
    event.preventDefault();

    this.setState({ text: 'changed in the browser!0001' });
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.onButtonClick.bind(this)}>change text!</button>
      </div>
    );
  }
}

export default App;
