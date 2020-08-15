# react-modal
> Modal components for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-modal
```

## update
```shell
npm update @feizheng/react-modal
```

## properties
| Name        | Type   | Required | Default | Description                                 |
| ----------- | ------ | -------- | ------- | ------------------------------------------- |
| className   | string | false    | -       | The extended className for component.       |
| value       | bool   | false    | -       | Abstract visible value.                     |
| destroyable | bool   | false    | true    | If element destroyed when visible to false. |
| onChange    | func   | false    | noop    | The change handler.                         |
| backdrop    | union  | false    | -       | Backdrop props or not display backdrop.     |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-modal/dist/style.scss";

  // customize your styles:
  $react-modal-options: ()
  ```
2. import js
  ```js
  import ReactModal from '@feizheng/react-modal';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value1: false,
      value2: false
    };

    toggleModal = (inKey) => {
      this.setState({ [inKey]: !this.state[inKey] });
    };

    render() {
      return (
        <div className="app-container">
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

          <button
            className="button"
            onClick={(e) => {
              this.setState({ value1: !this.state.value1 });
            }}>
            Toggle1
          </button>

          <button
            className="button"
            onClick={(e) => {
              this.setState({ value2: !this.state.value2 });
            }}>
            Toggle2
          </button>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-modal/


## license
Code released under [the MIT license](https://github.com/afeiship/react-modal/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-modal
[version-url]: https://npmjs.org/package/@feizheng/react-modal

[license-image]: https://img.shields.io/npm/l/@feizheng/react-modal
[license-url]: https://github.com/afeiship/react-modal/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-modal
[size-url]: https://github.com/afeiship/react-modal/blob/master/dist/react-modal.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-modal
[download-url]: https://www.npmjs.com/package/@feizheng/react-modal
