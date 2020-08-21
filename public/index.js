import { Controller } from '@feizheng/react-visible';
import ReactModal from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import '@feizheng/next-sample';
import './assets/style.scss';

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
        <img src="http://avatar.chsword.net/avatar/1" />
      </div>,
      <div>
        <h2>Modal 2</h2>
        <p>Content 2</p>
        <img src="http://avatar.chsword.net/avatar/2" />
      </div>,
      <div>
        <h3>Modal 3</h3>
        <p>Content 3</p>
        <img src="http://avatar.chsword.net/avatar/3" />
      </div>
    ];
    return nx.sample(contents);
  }

  componentDidMount() {
    Controller.singleton(ReactModal, {
      backdrop: {
        onClick: () => {
          ReactModal.dismiss();
        }
      }
    });
  }

  toggleModal = (inKey) => {
    this.setState({ [inKey]: !this.state[inKey] });
  };

  render() {
    return (
      <div className="app-container">
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
              className="button"
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
              className="button"
              onClick={this.toggleModal.bind(this, 'value1')}>
              学到啦！
            </button>
          </div>
        </ReactModal>

        <button
          className="button"
          onClick={(e) => {
            this.setState({ value2: !this.state.value2 });
          }}>
          Modal1
        </button>

        <button
          className="button"
          onClick={(e) => {
            this.setState({ value1: !this.state.value1 });
          }}>
          Modal2
        </button>

        <button
          className="button"
          onClick={(e) => {
            ReactModal.present(
              () => {
                console.log('present!');
              },
              {
                children: (
                  <div className="sample-container">{this.sampleContent}</div>
                )
              }
            );
            console.log('dynamic child');
          }}>
          Dyanmic modal child
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
