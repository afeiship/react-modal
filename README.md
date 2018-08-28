# react-modal
> Modal components for react.

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true
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

  _onChange = e =>{
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="hello-react-modal">
        <button onClick={this.onShow}>ShowModel</button>

        <ReactModal onChange={this._onChange} className="my-modal" ref={md => this.md = md}>
          <h1>I am the title</h1>
          <button onClick={this.onHide}>test modal</button>
        </ReactModal>
      </div>
    )
  }
}


```