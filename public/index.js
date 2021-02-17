import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from '../src/main';
import { Controller } from '@jswork/react-visible';
import './assets/style.scss';

import '@jswork/next-sample';

class App extends React.Component {
  state = {
    value1: false,
    value2: false
  };

  get sampleContent() {
    const contents = [
      <div>
        <h1>Modal 1</h1>
        <p>Content 1</p>
        <img src="https://randomuser.me/api/portraits/women/31.jpg" />
      </div>,
      <div>
        <h2>Modal 2</h2>
        <p>Content 2</p>
        <img src="https://randomuser.me/api/portraits/women/32.jpg" />
      </div>,
      <div>
        <h3>Modal 3</h3>
        <p>Content 3</p>
        <img src="https://randomuser.me/api/portraits/women/33.jpg" />
      </div>
    ];
    return nx.sample(contents);
  }

  componentDidMount() {
    this.modal = Controller.createInstance(ReactModal, {
      backdrop: true
    });
    console.log(this.modal);
  }

  toggleModal = (inKey) => {
    this.setState({ [inKey]: !this.state[inKey] });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-modal">
        <ReactModal value={this.state.value2}>
          <div className="bd">
            <h1>道可道，非常道 - no backdrop</h1>
            <p>
              天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。
              故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
              是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
              夫惟弗居，是以不去。
            </p>
            <img src="https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            <button
              className="button is-default is-fullwidth"
              onClick={this.toggleModal.bind(this, 'value2')}>
              可以关掉我
            </button>
          </div>
        </ReactModal>
        <ReactModal
          value={this.state.value1}
          backdrop={{
            onClick: this.toggleModal.bind(this, 'value1')
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
            <button
              className="button is-primary is-fullwidth"
              onClick={this.toggleModal.bind(this, 'value1')}>
              学到啦！
            </button>
          </div>
        </ReactModal>

        <button
          className="button is-primary is-fullwidth"
          onClick={(e) => {
            this.setState({ value2: !this.state.value2 });
          }}>
          Modal1
        </button>

        <button
          className="button my-2 is-primary is-fullwidth"
          onClick={(e) => {
            this.setState({ value1: !this.state.value1 });
          }}>
          Modal2
        </button>

        <button
          className="button is-fullwidth is-primary"
          onClick={(e) => {
            this.modal.toggle({
              children: (
                <div className="sample-container">
                  {this.sampleContent}
                  <button
                    className="button is-primary"
                    onClick={(e) => {
                      this.modal.dismiss();
                    }}>
                    CloseMe
                  </button>
                </div>
              )
            });
            console.log('dynamic child');
          }}>
          Dyanmic modal child
        </button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
