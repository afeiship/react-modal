import ReactModal from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  toggleModal = () => {
    this.setState({ value: !this.state.value });
  };

  render() {
    return (
      <div className="app-container">
        <ReactModal
          value={this.state.value}
          backdrop={{
            onClick: this.toggleModal
          }}>
          <div className="bd">
            <h1>道</h1>
            <p>
              道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
              故常无欲，以观其妙，常有欲，以观其徼。
              此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
            </p>
            <img
              src="https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg"
              width="60%"
            />
            <button className="button" onClick={this.toggleModal}>
              学到啦！
            </button>
          </div>
        </ReactModal>

        <button
          className="button"
          onClick={(e) => {
            this.setState({ value: !this.state.value });
          }}>
          Toggle
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
