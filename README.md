# react-modal
> Modal components for react.

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    destroyable: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true,
    destroyable: false
  };
  
```

## usage:
```jsx
// install: npm install afeiship/react-modal --save
// import : import ReactModal from 'react-modal'

class ChildView extends React.Component {

  get title() {
    return Math.random();
  }

  render(){
    return this.title;
  }
}

class App extends React.Component {
  state = {
    value: false,
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
        <ReactModal destroyable onChange={this._onChange} className="my-modal" ref={md => this.md = md}>
          <h1>I am the title {this.title}</h1>
          <ChildView/>
          <button onClick={this.onHide}>Hide Me</button>
        </ReactModal>
      </div>
    )
  }
}


```