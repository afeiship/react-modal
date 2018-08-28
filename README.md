# react-modal
> Modal components for react.

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    backdrop: PropTypes.bool,
    backdropProps: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    value: false,
    backdrop: true,
    onChange: noop
  };
  
```

## usage:
```jsx
// install: npm install afeiship/react-modal --save
// import : import ReactModal from 'react-modal'

class App extends React.Component {
  state = {
    visible: false
  }

  onShow = e => {
    this.md.present();
  };

  onHide = e => {
    this.md.dismiss();
  };

  render() {
    return (
      <div className="hello-react-modal">
        <button onClick={this.onShow}>ShowModel</button>

        <ReactModal className="my-modal" ref={md => this.md = md}>
          <h1>I am the title</h1>
          <button onClick={this.onHide}>test modal</button>
        </ReactModal>
      </div>
    )
  }
}


```